<template>
    <footer>
        <div class="container">
            <div class="py-6 flex flex-col items-center justify-center text-gray-700">
                <AssetBackPack width="40"/>
                <span class="mt-2 text-xs italic">
                    For Backpackers - by {{ author.name }}
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
    import {AssetBackPack} from '@/assets'
    import {author} from '@/../package.json'

    export default {
        name: 'TheFooter',
        components: {
            AssetBackPack,
        },
        data() {
            return {
                author,
            }
        },
    }
</script>
