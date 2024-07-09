import { createWebHistory, createRouter } from 'vue-router'
import home from '@/pages/38-route-params/Home.vue'
import news from '@/pages/38-route-params/News.vue'
import about from '@/pages/38-route-params/About.vue'
import detail from '@/pages/38-route-params/Detail.vue'

const routes = [
    { name: '/homePage', path: '/home', component: home },
    {
        name: '/newsPage', path: '/news', component: news,
        children: [
            // use query
            // { path: 'detail', component: detail },
            // use params
            {
                name: 'detail',
                // use query
                path: 'detail',
                // use params
                // path: 'detail/:id/:title/:content?', 
                component: detail,
                // treat all params as props
                // props: true,
                // treat query as props
                props(route) {
                    // console.log(route)
                    return route.query;
                }
            },
        ]
    },
    { name: '/aboutPage', path: '/about', component: about },
    { path: '/', redirect: '/home' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;