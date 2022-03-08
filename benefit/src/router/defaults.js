import Homepage from '../components/Homepage/Homepage'
import Mission from '../components/Homepage/Mission'
import Support from '../components/Homepage/Support'
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


  ]