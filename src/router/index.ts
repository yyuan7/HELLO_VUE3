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
            { name:'detail', path: 'detail/:id/:title/:content?', component: detail, props: true },
        ]
    },
    { name: '/aboutPage', path: '/about', component: about },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;