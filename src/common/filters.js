/**
 *
 * @param value
 * @returns {string}
 */
export const capitalize = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 *
 * @param value
 * @returns {string}
 */
export const uppercase = (value) => {
    return value.toUpperCase()
}

/**
 *
 * @param value
 * @returns {string}
 */
export const lowercase = (value) => {
    return value.toLowerCase()
}
