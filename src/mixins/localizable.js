export default {
    methods: {
        requestUserLocation(options) {
            if (navigator.geolocation) {
                return new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, options)
                })
            }
            return new Promise(resolve => resolve({}))
        },
    },
}
