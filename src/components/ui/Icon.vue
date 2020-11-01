<template functional>
    <i :class="[$options.methods.className(props.name), data.staticClass, data.class]"
       :style="data.staticStyle"
       v-bind="data.attrs"
       v-on="listeners">
    </i>
</template>

<script>
    export default {
        name: 'v-icon',
        props: {
            name: {
                type: String,
            },
        },
        methods: {
            className(name) {
                return `Icon-${name}`
            },
        },
    }
</script>

<style lang="scss">
    $icons: (
        linkedin: '\e900',
        twitter: '\e901',
        facebook: '\e902',
        dropdown: '\e903',
        close: '\e904',
        success: '\e905',
        error: '\e906',
        minimize: '\e907',
        search: '\e908',
        gps: '\e909',
        half: '\e90a',
    );

    [class^="Icon-"],
    [class*=" Icon-"] {
        font-family: theme('fontFamily.icon');
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @each $name, $code in $icons {
        .Icon-#{$name}:before {
            content: $code;
        }
    }
</style>
