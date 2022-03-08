<template>
   <div>
       <div v-if="this.$route.path == '/' || this.$route.path == '/login' || this.$route.path == '/register' || this.$route.path == '/mission'|| this.$route.path == '/support'">
            <Starter>
                <router-view />
            </Starter>
       </div>

        <div v-else>
            <Portal>
                <router-view/>
            </Portal>
        </div>

    </div>
</template>

<script>
import Portal from "./components/Layouts/Portal.vue";
import Starter from "./components/Layouts/Starter.vue";

export default {
    name: "App",
    components:{
    Portal,
    Starter
},
}
</script>

<style>
@import './assets/base.css';


</style>
