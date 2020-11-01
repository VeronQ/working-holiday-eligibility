<template>
    <div v-bind="$attrs"></div>
</template>

<script>
    import L from 'leaflet'
    import 'leaflet.fullscreen'

    export default {
        name: 'v-map',
        props: {
            lat: Number,
            lng: Number,
        },
        data() {
            return {
                map: null,
            }
        },
        created() {
            this.$watch(vm => [vm.lat, vm.lng], (latlng) => {
                this.map.flyTo(latlng, 9, {
                    animate: true,
                    duration: 1,
                })
            })
        },
        mounted() {
            this.map = L.map(this.$el, {
                fullscreenControl: true,
                attributionControl: false,
                scrollWheelZoom: false,
            }).setView([this.lat, this.lng], 9)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
        },
    }
</script>
