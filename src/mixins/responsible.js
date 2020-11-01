import {BREAKPOINT} from '@/common/types'

export default {
    data() {
        return {
            isBase: true,
            isSM: false,
            isMD: false,
            isLG: false,
            isXL: false,
        }
    },
    methods: {
        setDevices() {
            const w = window.innerWidth
            this.isBase = w < BREAKPOINT.SM
            this.isSM = w >= BREAKPOINT.SM
            this.isMD = w >= BREAKPOINT.MD
            this.isLG = w >= BREAKPOINT.LG
            this.isXL = w >= BREAKPOINT.XL
        },
    },
    mounted() {
        window.addEventListener('resize', this.setDevices)
        this.setDevices()
    },
    destroyed() {
        window.removeEventListener('resize', this.setDevices)
    },
}
