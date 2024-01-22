import { reactive } from "vue";

export const store = reactive({
    message: 'tu sorella',
    apiUrl: 'http://127.0.0.1:8000/api',
    imgUrl: 'http://127.0.0.1:8000/storage/',
    projects: [],
    navBarHeader: {
        classText: 'my-text-secondary',
        srcLogo: './images/logo.png',
        tabs: [
            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },
            // {
            //     title: 'Portfolio',
            //     href: 'home',
            // },
            // {
            //     title: 'Our Process',
            //     href: 'home',
            // },
            // {
            //     title: 'Pricing',
            //     href: 'home',
            // },
            // {
            //     title: 'Blog',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],
        // btn: {
        //     title: 'Get a Quote',
        //     classBg: 'my-btn-light'
        // }
    },
    navBarFooter: {
        classText: 'my-text-primary',
        srcLogo: './images/footer-logo.png',
        tabs: [

            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },

            // {
            //     title: 'Pricing',
            //     href: 'home',
            // },
            // {
            //     title: 'Career',
            //     href: 'home',
            // },
            // {
            //     title: 'Contact',
            //     href: 'home',
            // },

        ],

    },
})