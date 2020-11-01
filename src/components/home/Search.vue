<template>
    <div class="relative z-1000">
        <div class="max-w-screen-md relative mx-auto flex rounded-full shadow-md bg-white hover:shadow-lg">
            <div class="absolute left-0 bottom-100 ml-16 mb-2 flex items-start">
                <AssetArrow class="w-8"/>
                <span class="ml-2 transform -translate-y-1/2 leading-none italic text-xs font-bold select-none">
                    {{ $t('home.search.label') }}
                </span>
            </div>

            <div class="leading-16 mr-2 ml-6 text-gray-600 text-xl">
                <v-icon name="search"/>
            </div>

            <input type="search"
                   aria-label="Search"
                   class="h-full w-full px-2 border-none bg-transparent outline-none"
                   ref="input"
                   v-model="input"
                   :disabled="isFetching"
                   :placeholder="$t('home.search.placeholder')"
            />

            <div class="relative">
                <v-btn primary
                       @click.stop="localize"
                       :disabled="disabled"
                       class="h-16 rounded-r-full"
                >
                    <v-icon name="gps" class="mr-2 -xs:text-lg"/>
                    <span class="-xs:hidden">
                        {{ $t('home.search.gps') }}
                    </span>
                </v-btn>
                <transition name="loader">
                    <div v-show="isFetching"
                         class="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-r-full">
                        <div class="transform scale-20">
                            <AssetLoader/>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {CODES} from '@/common/types'
    import {reverseGeocoding} from '@/api'
    import {localizable, notifiable, searchable} from '@/mixins'
    import {AssetArrow, AssetLoader} from '@/assets'

    export default {
        name: 'home-search',
        components: {
            AssetArrow,
            AssetLoader,
        },
        mixins: [
            localizable,
            searchable,
            notifiable,
        ],
        data() {
            return {
                disabled: false,
            }
        },
        watch: {
            input(val) {
                this.location.setVal(val)
            },
            $route(to) {
                if (!to.params.city) {
                    this.reset()
                    return
                }
                const {city} = to.params
                const name = this.coords.name || ''

                if (name.toLowerCase() !== city.toLowerCase()) {
                    this.search(city)
                }
            },
        },
        created() {
            if (this.$route.params.city) {
                this.search(this.$route.params.city)
            }
        },
        methods: {
            localize() {
                this.requestUserLocation({timeout: 10000})
                    .then(({coords}) => {
                        this.isFetching = true
                        // Autofill input with user's device location
                        return reverseGeocoding(coords)
                            .then(async input => await this.search(input))
                            .catch(() => this.notify(this.geolocalisationError))
                    })
                    .catch(({code}) => {
                        // Display alert only if not denied by user
                        if ([CODES.POSITION_UNAVAILABLE, CODES.TIMEOUT].includes(code)) {
                            this.notify(this.geolocalisationError)
                        }
                        if (code === CODES.PERMISSION_DENIED) {
                            this.disabled = true
                        }
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            },
        },
    }
</script>

<style lang="scss">
    .ap-footer, .ap-input-icon {
        display: none;
    }

    .algolia-places {
        flex: 1 0 0;
    }

    .loader-enter, .loader-leave-to {
        visibility: hidden;
    }
</style>
