import Vue from 'vue'

import App from '@/App.vue'

import store from '@/store'
import router from '@/router'
import i18n from '@/lang'

import {Trans} from '@/plugins/Translation'
import '@/css/main.scss'

import loadComponents from '@/common/load-components'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.router = Vue.observable(router)
Vue.config.productionTip = false

loadComponents()

export const vm = new Vue({
    store,
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
