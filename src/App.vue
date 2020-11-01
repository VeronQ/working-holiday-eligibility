<template>
    <div id="app">
        <TheHeader/>
        <router-view/>
        <TheFooter/>
        <TheNotification/>
    </div>
</template>

<script>
    import {TheHeader, TheFooter, TheNotification} from '@/components/layouts'

    export default {
        name: 'App',
        components: {
            TheHeader,
            TheFooter,
            TheNotification,
        },
    }
</script>

<style lang="scss">
    #app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
