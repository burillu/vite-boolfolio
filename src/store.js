import { reactive } from "vue";

export const store = reactive({
    message: 'tu sorella',
    apiUrl: 'http://127.0.0.1:8000/api',
    imgUrl: 'http://127.0.0.1:8000/storage/',
    projects: [],
    navBarHeader: {
        classText: 'my-text-primary',
        srcLogo: 'https://media.licdn.com/dms/image/v2/D4E03AQEYk5x2BQqOmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708207818662?e=1746057600&v=beta&t=o0Wol0WbET5NTx3mq3tJIbwDbciwBqagROL2IOuHuqQ',
        tabs: [
            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },
            {
                title: 'Contacts',
                href: 'contacts',
            },
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
        srcLogo: '/src/assets/logo-me.png',
        tabs: [

            {
                title: 'Home',
                href: 'home',
            },
            {
                title: 'Projects',
                href: 'projects',
            },

            {
                title: 'Contacts',
                href: 'contacts',
            },
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