import { reactive } from "vue";

export const store = reactive({
    message: 'tu sorella',
    apiUrl: 'http://127.0.0.1:8000/api',
    projects: [],
    navBarHeader: {
        classText: 'my-text-secondary',
        srcLogo: './images/logo.png',
        tabs: [
            {
                title: 'Home',
                href: '#',
            },
            {
                title: 'About Us',
                href: '#',
            },
            {
                title: 'Portfolio',
                href: '#',
            },
            {
                title: 'Our Process',
                href: '#',
            },
            {
                title: 'Pricing',
                href: '#',
            },
            {
                title: 'Blog',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },

        ],
        btn: {
            title: 'Get a Quote',
            classBg: 'my-btn-light'
        }
    },
    navBarFooter: {
        classText: 'my-text-primary',
        srcLogo: './images/footer-logo.png',
        tabs: [

            {
                title: 'About Us',
                href: '#',
            },
            {
                title: 'Portfolio',
                href: '#',
            },

            {
                title: 'Pricing',
                href: '#',
            },
            {
                title: 'Career',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },

        ],

    },
})