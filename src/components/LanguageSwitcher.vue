<template>
    <div class="flex items-center relative border-l px-4 lg:px-8 lg:border-r">
        <span class="-md:hidden mr-4 font-semibold italic text-xs select-none text-gray-800">
            {{$t('header.lang.label')}}
        </span>
        <select name="language"
                ref="select"
                class="p-2 bg-transparent appearance-none cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300"
                @change="changeLanguage"
                aria-label="language">
            <option
                v-for="lang in supportedLanguages"
                :key="lang"
                :selected="isCurrentLanguage(lang)"
                :class="{ 'is-selected': isCurrentLanguage(lang) }"
                :value="lang"
            >
                {{lang|uppercase}}
            </option>
        </select>
    </div>
</template>
<script>
    import {Trans} from '@/plugins/Translation'
    import {uppercase} from '@/common/filters'

    export default {
        filters: {
            uppercase,
        },
        watch: {
            $route(to) {
                if (!to.params.lang) return
                const {lang} = to.params
                if (lang !== this.currentLanguage) {
                    Trans.changeLanguage(lang)
                }
            },
        },
        computed: {
            supportedLanguages: () => Trans.supportedLanguages,
            currentLanguage: () => Trans.currentLanguage,
        },
        methods: {
            changeLanguage(e) {
                const {value: lang} = e.target
                const {location} = this.$router.resolve({params: {lang}})

                Trans.changeLanguage(lang).then(() => {
                    this.$router.push(location)
                })
            },
            isCurrentLanguage(lang) {
                return lang === this.currentLanguage
            },
        },
    }
</script>
