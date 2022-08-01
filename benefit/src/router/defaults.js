import Homepage from '../components/Landing/Homepage'
import Mission from '../components/Landing/Mission'
import Support from '../components/Landing/Support'
import Blog from '../components/Landing/Blog'
export default [
    {
        name: "Homepage",
        path: '/',
        component: Homepage,
        meta: { layout: 'Homepage' }
    },
    {
        name: "Mission",
        path: '/mission',
        component: Mission,
        meta: { layout: 'Homepage' }
    },
    {
        name: "Support",
        path: '/support',
        component: Support,
        meta: { layout: 'Homepage' }
    },
    {
        name: "Blog",
        path: '/hot-topic',
        component: Blog,
        meta: { layout: 'Homepage' }
    },


  ]