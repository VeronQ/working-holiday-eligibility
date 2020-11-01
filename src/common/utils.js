import {DEFAULT_LOCALE} from '@/common/types'

/**
 *
 * @returns {any}
 */
export const getLocale = () => {
    return window.navigator.language
        ? window.navigator.language.substring(0, 2)
        : DEFAULT_LOCALE
}

/**
 *
 * @param ressource
 * @param state
 * @param postcode
 * @returns {boolean|*}
 */
export const isEligible = (ressource, state, postcode) => {
    if (!ressource.hasOwnProperty(state)) {
        return false
    }

    if (!postcode) {
        return false
    }

    if (typeof ressource[state] === 'boolean') {
        return ressource[state]
    }

    return ressource[state].some(val => {
        return (Array.isArray(val) && (postcode >= val[0] && postcode <= val[1]))
            || parseInt(postcode) === val
    })
}
