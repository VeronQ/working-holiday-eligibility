<template>
    <header class="h-16 w-full mx-auto md:h-20 sm:pl-4 lg:px-8 flex justify-between bg-white" style="max-width:1920px">
        <div class="flex flex-1 justify-between">
            <a class="flex items-center mr-auto -sm:border-r -sm:px-2" href="/">
                <div class="h-10">
                    <img src="@/assets/brand-logo.png" alt="Website Logo" class="h-full">
                </div>
                <div class="-sm:hidden ml-4">
                    <span class="font-bold">
                        {{title}}
                    </span>
                </div>
            </a>
            <nav class="h-full flex items-center px-4 lg:px-8 text-sm">
                <a v-for="(item, index) in nav"
                   :href="item.url"
                   :key="index"
                   :target="item.outside ? '_blank' : null"
                   :rel="item.outside ? 'noopener noreferrer' : null"
                   class="hover:underline">
                    {{item.title}}
                </a>
            </nav>
            <SocialList/>
            <LanguageSwitcher/>
        </div>
    </header>
</template>

<script>
    import {LanguageSwitcher, SocialList} from '@/components'
    import {capitalize} from '@/common/filters'
    import {SOURCE_URL} from '@/common/types'
    import {responsible} from '@/mixins'

    export default {
        name: 'TheHeader',
        components: {
            LanguageSwitcher,
            SocialList,
        },
        filters: {
            capitalize,
        },
        mixins: [
            responsible,
        ],
        computed: {
            nav() {
                return [
                    {
                        title: this.$i18n.t('header.nav.source'),
                        url: SOURCE_URL,
                        outside: true,
                    },
                ]
            },
            title() {
                return this.isLG
                    ? this.$i18n.t('meta.title')
                    : this.$i18n.t('meta.shorten_title')
            },
        },
    }
</script>
