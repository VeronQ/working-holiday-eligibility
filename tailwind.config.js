module.exports = {
    purge: false,
    theme: {
        extend: {
            screens: {
                'xs': {
                    min: '480px',
                },
                '-xs': {
                    max: '479px',
                },
                '-sm': {
                    max: '639px',
                },
                '-md': {
                    max: '767px',
                },
                '-lg': {
                    max: '1023px',
                },
                '-xl': {
                    max: '1279px',
                },
            },
            cursor: {
                help: 'help',
            },
            zIndex: {
                1: 1,
                1000: 1000,
                1100: 1100,
            },
            inset: {
                100: '100%',
            },
            lineHeight: (theme) => ({
                ...theme('spacing'),
            }),
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            fontSize: {
                'xxs': '0.675rem',
                '5xl': '2.9rem',
            },
            spacing: {
                14: '3.5rem',
                80: '20rem',
                100: '25rem',
            },
            scale: {
                '20': '0.20',
            },
            fontFamily: {
                heading: [
                    'Poppins',
                    'sans-serif',
                ],
                icon: [
                    'Icomoon',
                ],
            },
            colors: {
                dark: '#323232',
                primary: {
                    100: '#F6EFE9',
                    200: '#EDE0D4',
                    300: '#E4D0BE',
                    400: '#DBC1A9',
                    500: '#D2B193',
                    600: '#A88E76',
                    700: '#7e6a58',
                    800: '#54473B',
                    900: '#2A231D',
                },
            },
        },
    },
    corePlugins: {
        container: false,
    },
}
