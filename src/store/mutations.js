import {SET_NOTIFICATION, SET_USER_COORDS} from '@/common/types'
import {isEligible} from '@/common/utils'
import {RegionalAreas, BushfireAffectedAreas} from '@/resources'

export default {
    /**
     *
     * @param state
     * @param payload
     */
    [SET_USER_COORDS](state, payload) {
        const administrative = payload.administrative || state.user.coords.administrative
        const postcode = payload.postcode || state.user.coords.postcode

        state.user.coords = {
            ...payload,
            isRegionalAustralia: isEligible(RegionalAreas, administrative, postcode),
            isBushfireAffected: isEligible(BushfireAffectedAreas, administrative, postcode),
        }
    },

    /**
     *
     * @param state
     * @param payload
     */
    [SET_NOTIFICATION](state, payload) {
        state.site.notification = payload
    },
}
