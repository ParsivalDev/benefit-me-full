import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'


// AND HOMEPAGE

export default [
    {
        name: "Login",
        path: '/login',
        component: Login,
        meta: { layout: 'Blank' }
    },
    {
        name: "Homepage",
        path: '/homepage',
        component: Login,
        meta: { layout: 'Blank' }
        },
    {
        name: "Register",
        path: '/register',
        component: Register,
        meta: { layout: 'Blank' }
    },

  ]