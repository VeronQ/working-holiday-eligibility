import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '@/lang/en.json'
import {getLocale} from '@/common/utils'

Vue.use(VueI18n)

export default new VueI18n({
    locale: getLocale(),
    fallbackLocale: process.env.VUE_APP_DEFAULT_LOCALE,
    messages: {
        en,
    },
})
