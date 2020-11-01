import {HANDLE_NOTIFICATION, NOTIFICATION_STATES} from '@/common/types'

export default {
    computed: {
        geolocalisationError() {
            return {
                title: this.$i18n.t('errors.geolocation.title'),
                subtitle: this.$i18n.t('errors.geolocation.subtitle'),
                content: this.$i18n.t('errors.geolocation.content'),
            }
        },
        searchError() {
            return {
                title: this.$i18n.t('errors.search.title'),
                subtitle: this.$i18n.t('errors.search.subtitle'),
                content: this.$i18n.t('errors.search.content'),
            }
        },
    },
    methods: {
        notify({state = NOTIFICATION_STATES.ERROR, title, subtitle, content}) {
            this.$store.dispatch(HANDLE_NOTIFICATION, {
                state,
                title,
                subtitle,
                content,
            })
        },
    },
}
