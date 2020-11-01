// Misc
export const UPDATED_DATE = '28/07/2020'

// URLs
export const SOURCE_URL = 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work'
export const GOOGLE_GEOCODE_SOURCE = 'https://maps.googleapis.com/maps/api/geocode/json'

// Language
export const SUPPORTED_LOCALES = ['en', 'fr']
export const DEFAULT_LOCALE = 'en'

// Geolocalisation
export const GEOLOCALISATION_TYPE = 'administrative_area_level_2'

// Breakpoints
export const BREAKPOINT = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
}

// Default coords to Australia
export const DEFAULT_COORDS_LAT = -25.274398
export const DEFAULT_COORDS_LNG = 133.775136

// Codes
export const CODES = {
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
}

// Notification (states)
export const NOTIFICATION_STATES = {
    SUCCESS: 'success',
    ERROR: 'error',
    PARTIALLY: 'half',
}

// Notification (colors)
export const NOTIFICATION_COLORS = {
    SUCCESS: 'green',
    ERROR: 'red',
    PARTIALLY: 'yellow',
}

// Error status
export const ERROR_STATUS = {
    REQUEST_DENIED: 'REQUEST_DENIED',
}

// Actions
export const HANDLE_USER_COORDS = 'store/HANDLE_USER_COORDS'
export const HANDLE_NOTIFICATION = 'store/HANDLE_NOTIFICATION'
export const RESET_USER_COORDS = 'store/RESET_USER_COORDS'

// Mutations
export const SET_USER_COORDS = 'store/SET_USER_COORDS'
export const SET_NOTIFICATION = 'store/SET_NOTIFICATION'

// Getters
export const GET_USER_COORDS = 'store/GET_USER_COORDS'
export const GET_NOTIFICATION = 'store/GET_NOTIFICATION'
