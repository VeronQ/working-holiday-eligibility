import {vm} from '@/main'
import {
    HANDLE_NOTIFICATION,
    HANDLE_USER_COORDS,
    RESET_USER_COORDS,
    SET_NOTIFICATION,
    SET_USER_COORDS,
} from '@/common/types'
import defaultState from './state'

export default {
    /**
     *
     * @param commit
     * @param coords
     */
    [HANDLE_USER_COORDS]({commit}, coords) {
        commit(SET_USER_COORDS, coords)

        if (vm.$route.params.city && vm.$route.params.city.toLowerCase() === coords.name.toLowerCase()) {
            return
        }

        const {location} = vm.$router.resolve({params: {city: coords.name.toLowerCase()}})
        vm.$router.push(location)
    },

    /**
     *
     * @param commit
     */
    [RESET_USER_COORDS]({commit}) {
        commit(SET_USER_COORDS, defaultState().user.coords)
    },

    /**
     *
     * @param commit
     * @param notification
     */
    [HANDLE_NOTIFICATION]({commit}, notification) {
        commit(SET_NOTIFICATION, notification)
    },
}
