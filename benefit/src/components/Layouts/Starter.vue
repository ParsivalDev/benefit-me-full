<template>
    <div class="flex flex-col items-center min-h-screen w-full h-full mx-auto bg-cover bg-fixed img-background">

        <Navbar />
            <slot class=""></slot>
        <!-- <Footer /> -->

    </div>
    
</template>

<script>
import Navbar from "../Default/Navbar.vue";
// import Footer from "../Default/Footer.vue";
export default {

    components: { Navbar }
}
</script>

<style>

</style>