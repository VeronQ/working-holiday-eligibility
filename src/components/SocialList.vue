<template>
    <div class="h-full flex items-center border-l px-4 lg:px-8">
        <span class="-md:hidden mr-4 font-semibold italic text-xs text-gray-800 select-none">
            {{$t('header.social.label')}}
        </span>
        <a v-for="(href, network) in social"
           v-open-as-modal
           @click.self
           :href="href"
           target="_blank"
           rel="noopener noreferrer"
           class="p-1 hover:text-primary-700 has-icon"
           :title="$t('header.social.title', {network})">
            <v-icon :name="network|lowercase"/>
        </a>
    </div>
</template>

<script>
    import {lowercase} from '@/common/filters'
    import {openAsModal} from '@/directives'

    export default {
        name: 'SocialList',
        directives: {
            'open-as-modal': openAsModal,
        },
        filters: {
            lowercase,
        },
        computed: {
            social() {
                return {
                    Twitter: `https://twitter.com/intent/tweet?text=${this.$i18n.t('meta.description')}%0a%23Backpacker %23WHV%0ahttps://musing-yonath-f92ad6.netlify.app/`,
                    Facebook: `https://www.facebook.com/share.php?u=https://musing-yonath-f92ad6.netlify.app/`,
                    LinkedIn: 'https://www.linkedin.com/sharing/share-offsite/?mini=true&url=https://musing-yonath-f92ad6.netlify.app/',
                }
            },
        },
    }
</script>
