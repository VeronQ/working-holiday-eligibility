export default {
    bind: (el) => {
        el.openAsModal = (e) => {
            e.preventDefault()
            const {href} = e.target.closest('a')
            const y = window.top.outerHeight / 2 - 300
            const x = window.top.outerWidth / 2 - 200

            window.open(href, 'window name', `height=600,width=400,modal=yes,alwaysRaised=yes,top=${y},left=${x}`)
        }
        el.addEventListener('click', el.openAsModal)
    },
    unbind: (el) => {
        el.removeEventListener('click', el.openAsModal)
    },
}
