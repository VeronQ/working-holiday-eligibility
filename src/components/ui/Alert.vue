<template>
    <div class="fixed bottom-0 left-0 z-1100" v-bind="$attrs">
        <div class="w-80 p-4">
            <div class="shadow border" :class="[`bg-${color}-200`, `border-${color}-500`]">
                <div class="flex items-center p-4 border-b relative" :class="`border-${color}-500`">
                    <div class="mr-4 text-3xl" :class="`text-${color}-500`">
                        <v-icon :name="state"/>
                    </div>
                    <div class="pr-5">
                        <div class="text-lg font-bold leading-tight">
                            {{ title }}
                        </div>
                        <span class="text-sm text-gray-700">
                            {{ subtitle }}
                        </span>
                    </div>
                    <div class="p-2 absolute top-0 right-0 cursor-pointer hover:text-gray-800" @click="remove">
                        <v-icon name="close"/>
                    </div>
                </div>
                <div class="p-4 text-gray-800 text-sm titalic leading-snug" v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {NOTIFICATION_STATES, NOTIFICATION_COLORS, HANDLE_NOTIFICATION} from '@/common/types'

    export default {
        name: 'v-alert',
        props: {
            state: String,
            title: String,
            subtitle: String,
            content: String,
        },
        computed: {
            color() {
                switch (this.state) {
                    case NOTIFICATION_STATES.ERROR:
                        return NOTIFICATION_COLORS.ERROR

                    case NOTIFICATION_STATES.SUCCESS:
                        return NOTIFICATION_COLORS.SUCCESS

                    case NOTIFICATION_STATES.PARTIALLY:
                        return NOTIFICATION_COLORS.PARTIALLY
                }
            },
        },
        methods: {
            remove() {
                this.$store.dispatch(HANDLE_NOTIFICATION, {})
            },
        },
    }
</script>
