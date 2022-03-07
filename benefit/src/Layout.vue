<template>
    <div class="min-h-screen w-full">

        <Navbar />
        <slot></slot>
        <Footer v-if="$route.path != '/login'" />

    </div>
</template>

<script>
import Navbar from "./components/Default/Navbar.vue";
import Footer from "./components/Default/Footer.vue";
export default {
    components: { Navbar,Footer }
}
</script>

<style>

</style>