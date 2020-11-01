import Vue from 'vue'

import {Alert, Button, Icon, Map} from '@/components/ui'

export default () => {
    Vue.component('v-alert', Alert)
    Vue.component('v-btn', Button)
    Vue.component('v-icon', Icon)
    Vue.component('v-map', Map)
}
