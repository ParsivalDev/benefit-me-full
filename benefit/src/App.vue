<template>
   <div>
        <Login v-if="this.$route.path !== '/register' && this.$route.path !== '/homepage'"/>

        <component v-else :is="layout">
            <router-view/>
        </component>

    </div>
</template>

<script>
import Login from "./components/Auth/Login.vue"

export default {
    name: "App",
    components:{
      Login,
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || "Portal") + "Layout";
        }
    }
}
</script>

<style>
@import './assets/base.css';


</style>
