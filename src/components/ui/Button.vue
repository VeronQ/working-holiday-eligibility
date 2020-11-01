<template functional>
    <button :class="[$options.methods.className(props), data.staticClass, data.class]"
            :style="[data.staticStyle, data.style]"
            v-bind="data.attrs"
            v-on="listeners"
            type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'v-btn',
        props: {
            primary: Boolean,
        },
        methods: {
            className(props) {
                return {
                    'Button': true,
                    'Button--primary': props.primary,
                }
            },
        },
    }
</script>

<style lang="scss">
    .Button {
        min-height: theme('minHeight.12');
        display: inline-block;
        background: none;
        text-transform: uppercase;
        font-weight: 600;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
        text-align: center;
        @apply py-4 px-8 text-xs transition duration-300 transition-all;

        &:focus {
            outline: none !important;
        }
    }

    .Button[disabled] {
        @apply bg-gray-600 cursor-not-allowed #{!important};
    }

    .Button.Button--primary {
        @apply bg-gray-800 text-white;

        &:hover,
        &:focus {
            @apply bg-gray-900;
        }
    }
</style>
