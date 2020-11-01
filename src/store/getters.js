import {GET_NOTIFICATION, GET_USER_COORDS} from '@/common/types'

export default {
    /**
     *
     * @param state
     * @returns {{lat: number, long: number}}
     */
    [GET_USER_COORDS]: state => {
        return state.user.coords
    },

    /**
     *
     * @param state
     * @returns {string|Notification}
     */
    [GET_NOTIFICATION]: state => {
        return state.site.notification
    },
}
