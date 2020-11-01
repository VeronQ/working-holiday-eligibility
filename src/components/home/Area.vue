<template>
    <div class="xl:fixed xl:bottom-0 xl:right-0">
        <transition name="slide-to-left">
            <div v-if="coords.name"
                 class="w-full h-80 xl:w-100 xl:p-4">
                <v-map :lat="coords.latlng.lat"
                       :lng="coords.latlng.lng"
                       class="h-full"
                />
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {GET_USER_COORDS} from '@/common/types'

    export default {
        name: 'home-area',
        computed: {
            ...mapGetters({
                coords: GET_USER_COORDS,
            }),
        },
    }
</script>

<style lang="scss">
    .slide-to-left-enter-active, .slide-to-left-leave-active {
        transition: transform 0.3s;
    }

    .slide-to-left-enter, .slide-to-left-leave-to {
        transform: translateX(100%);
    }
</style>
