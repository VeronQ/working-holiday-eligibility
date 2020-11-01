import {mapGetters} from 'vuex'
import {GET_USER_COORDS, NOTIFICATION_STATES} from '@/common/types'
import {notifiable} from '@/mixins'

export default {
    mixins: [
        notifiable,
    ],
    watch: {
        coords() {
            this.notify(this)
        },
    },
    computed: {
        ...mapGetters({
            coords: GET_USER_COORDS,
        }),
        isRegionalAustralia() {
            return this.coords.isRegionalAustralia
        },
        isBushfireAffected() {
            return this.coords.isBushfireAffected
        },
        state() {
            if (this.isRegionalAustralia && this.isBushfireAffected) {
                return NOTIFICATION_STATES.SUCCESS
            }
            if ([this.isRegionalAustralia, this.isBushfireAffected].some(x => x)) {
                return NOTIFICATION_STATES.PARTIALLY
            }
            return NOTIFICATION_STATES.ERROR
        },
        title() {
            return this.coords.name
        },
        content() {
            return `
                <b class="text-xs text-gray-700 block">
                    ${this.$i18n.t('home.alert.regionalAustralia')}
                </b>
                ${this.isRegionalAustralia
                ? this.$i18n.t('home.alert.eligible')
                : this.$i18n.t('home.alert.ineligible')
            }
                <br>
                <b class="text-xs text-gray-700 block mt-2">
                    ${this.$i18n.t('home.alert.bushfireAffected')}
                </b>
                ${this.isBushfireAffected
                ? this.$i18n.t('home.alert.eligible')
                : this.$i18n.t('home.alert.ineligible')
            }
            `
        },
        subtitle() {
            return this.coords.administrative + (this.coords.postcode ? ` (${this.coords.postcode})` : '')
        },
    },
}
