import {Trans} from '@/plugins/Translation'
import {Home} from '@/views'

export default [
    {
        path: '/:lang/:city?',
        component: {
            template: '<router-view></router-view>',
        },
        beforeEnter: Trans.routeMiddleware,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
        ],
    },
    {
        // Redirect user to supported lang version
        path: '*',
        redirect(to) {
            return Trans.getUserSupportedLang()
        },
    },
]
