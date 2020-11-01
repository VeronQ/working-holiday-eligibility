import axios from 'axios'
import algoliasearch from 'algoliasearch/lite'
import {shuffle} from '@algolia/client-common'

import {ERROR_STATUS, GEOLOCALISATION_TYPE, GOOGLE_GEOCODE_SOURCE} from '@/common/types'

/**
 *
 * @type {SearchClient}
 */
const placesClient = algoliasearch(process.env.VUE_APP_PLACES_APP_ID, process.env.VUE_APP_PLACES_API_KEY, {
    hosts: [{url: 'places-dsn.algolia.net'}].concat(
        shuffle([
            {url: 'places-1.algolia.net'},
            {url: 'places-2.algolia.net'},
            {url: 'places-3.algolia.net'},
        ]),
    ),
})

/**
 * Get suggestion from query
 *
 * @param query
 * @param requestOptions
 * @returns {Promise<Readonly<Promise<unknown>>>}
 */
export const search = async (query, requestOptions) => {
    return placesClient.transporter.read(
        {
            method: 'POST',
            path: '1/places/query',
            data: {
                query,
            },
            cacheable: true,
        },
        requestOptions,
    )
}

/**
 * Get location from coordinates
 *
 * @param latitude
 * @param longitude
 * @returns {Promise<Error>}
 */
export async function reverseGeocoding({latitude, longitude}) {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios.get(GOOGLE_GEOCODE_SOURCE, {
            params: {
                latlng: `${latitude},${longitude}`,
                key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
                result_type: GEOLOCALISATION_TYPE,
            },
        })
        if (data.status === ERROR_STATUS.REQUEST_DENIED || data.results.length < 1) {
            reject(new Error)
        }
        resolve(data.results[0].formatted_address)
    })
}
