import places from 'places.js'
import {mapGetters} from 'vuex'

import {search} from '@/api'
import {GET_USER_COORDS, HANDLE_USER_COORDS, RESET_USER_COORDS} from '@/common/types'
import {getLocale} from '@/common/utils'

export default {
    data() {
        return {
            isFetching: false,
            input: '',
            configuration: {
                type: 'city',
                countries: ['au'],
                language: getLocale(),
            },
            options: {
                apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
                useDeviceLocation: false,
            },
        }
    },
    computed: {
        ...mapGetters({
            coords: GET_USER_COORDS,
        }),
        location() {
            return places({
                ...this.options,
                container: this.$refs.input,
            }).configure(this.configuration)
        },
    },
    mounted() {
        this.location.on('change', (e) => this.change(e))
    },
    methods: {
        format(hit) {
            return `${hit.locale_names}, ${hit.administrative[0]}, ${hit.country}`
        },
        reset() {
            this.$store.dispatch(RESET_USER_COORDS)
        },
        change({suggestion}) {
            this.input = suggestion.value
            this.$store.dispatch(HANDLE_USER_COORDS, suggestion)
        },
        async search(input) {
            this.isFetching = true
            await search(input, {
                ...this.configuration,
                hitsPerPage: 1,
            })
                .then(({hits}) => {
                    if (!hits.length > 0) {
                        throw new Error()
                    }
                    const hit = hits[0]
                    this.input = this.format(hit)
                    this.$store.dispatch(HANDLE_USER_COORDS, {
                        administrative: hit.administrative[0],
                        postcode: hit.postcode[0],
                        name: hit.locale_names[0],
                        latlng: {
                            lat: hit._geoloc.lat,
                            lng: hit._geoloc.lng,
                        },
                    })
                })
                .catch(() => {
                    this.notify(this.searchError)
                })
                .finally(() => {
                    this.isFetching = false
                })
        },
    },
}
