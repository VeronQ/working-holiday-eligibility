<template>
    <transition name="slide-to-right">
        <v-alert v-if="hasNotification"
                 :state="notification.state"
                 :title="notification.title"
                 :subtitle="notification.subtitle"
                 :content="notification.content"
        />
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {GET_NOTIFICATION} from '@/common/types'

    export default {
        name: 'TheNotification',
        computed: {
            ...mapGetters({
                notification: GET_NOTIFICATION,
            }),
            hasNotification() {
                return Object.keys(this.notification).length > 0
            },
        },
    }
</script>

<style lang="scss">
    .slide-to-right-enter-active, .slide-to-right-leave-active {
        transition: transform 0.3s;
    }

    .slide-to-right-enter, .slide-to-right-leave-to {
        transform: translatex(-100%);
    }
</style>
