import {DEFAULT_COORDS_LAT, DEFAULT_COORDS_LNG} from '@/common/types'

export default function () {
    return {
        site: {
            notification: {},
        },
        user: {
            coords: {
                administrative: null,
                postcode: null,
                name: null,
                latlng: {
                    lat: DEFAULT_COORDS_LAT,
                    lng: DEFAULT_COORDS_LNG,
                },
                isRegionalAustralia: false,
                isBushfireAffected: false,
            },
        },
    }
}
