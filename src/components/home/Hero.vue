<template>
    <div class="w-full py-12 md:py-20 bg-primary-500" :style="style">
        <div class="container">
            <div class="mb-10 flex justify-around">
                <div class="max-w-screen-sm">
                    <h1 class="text-4xl xs:text-5xl mt-0 mb-6 md:mb-10 text-primary-900 font-heading leading-tight">
                        <span class="text-sm xs:text-base block" v-html="$t('home.baseline.suptitle')"/>
                        {{ $t('home.baseline.title') }}
                    </h1>
                    <div class="text-gray-900">
                        <p v-html="$t('home.about.p1')"></p>
                        <p v-html="$t('home.about.p2')"></p>
                        <p class="text-xs mt-8">
                            <i v-html="$t('home.about.caption', {date})"></i>
                        </p>
                    </div>
                </div>
                <div class="flex items-center -lg:hidden">
                    <AssetHero/>
                </div>
            </div>
            <slot name="search"/>
        </div>
    </div>
</template>

<script>
import {AssetHero} from '@/assets'
import {UPDATED_DATE} from '@/common/types'

export default {
    name: 'home-hero',
    components: {
        AssetHero,
    },
    data() {
        return {
            date: UPDATED_DATE,
            style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e4d0be' fill-opacity='0.27'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            },
        }
    },
}
</script>
