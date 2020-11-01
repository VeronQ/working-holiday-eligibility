<template>
    <div :class="[`view-${$options.name.toLowerCase()}`, 'flex flex-1 -xl:flex-col']">
        <home-hero>
            <template v-slot:search>
                <home-search/>
            </template>
        </home-hero>
        <home-area/>
    </div>
</template>

<script>
    import {Hero, Search, Area, Config} from '@/components/home'

    export default {
        name: 'Home',
        components: {
            'home-hero': Hero,
            'home-search': Search,
            'home-area': Area,
        },
        extends: Config,
    }
</script>
