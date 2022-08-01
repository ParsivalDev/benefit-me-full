<template>
<nav class="bg-transparent px-2 py-6 mb-10 rounded w-full font-big">
    <div class="container hidden lg:flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
                <!-- <img src="../../assets/img/logos/peach_logo.png" class="mr-1 h-8 w-8 sm:w-12 sm:h-12" alt="Logo" /> -->
                <span class="self-center text-xl font-bold whitespace-nowrap text-white opacity-90">Benefit<sub class="font-bold">.me</sub></span>
            </router-link>
        <div class="justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-4">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium text-center">
            <li>
                <router-link to="/">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-purple-800 to-pink-500 relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-white transition-all duration-150" :class="this.$route.path == '/' ?'relative text-white' : 'text-white opacity-90'">Homepage </span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
               <router-link to="/mission">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/mission' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-purple-800 to-pink-500 relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-white transition-all duration-150"  :class="this.$route.path == '/mission' ?'relative text-white' : 'text-white opacity-90'">Our missios</span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
                <router-link to="/support">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/support' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-purple-800 to-pink-500 relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-white transition-all duration-150" :class="this.$route.path == '/support' ?'relative text-white' : 'text-white opacity-90'">Contact</span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
                <router-link to="/hot-topic">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/hot-topic' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-purple-800 to-pink-500 relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-white transition-all duration-150" :class="this.$route.path == '/hot-topic' ?'relative text-white' : ' text-red-600 opacity-90'">Hot News!🔥</span>
                </span>
                </a>
                </router-link>
            </li>
            </ul>
        </div>
        <div class="flex flex-col sm:flex-row space-x-5 w-auto items-center">
            <router-link to="/login">
                <input :class="this.$route.path == '/login' ? 'from-purple-800 to-pink-500': 'from-purple-800 to-green-600'" value="Log in" type="button" class="bg-gradient-to-r  hover:from-purple-800 hover:to-pink-500 text-white py-2 px-5 rounded cursor-pointer transform transition-all hover:scale-105 duration-300 ease-in-out">
            </router-link>
            <span class="hidden sm:block text-white">or</span>
            <router-link to="/register">
                <input :class="this.$route.path == '/register' ? ' from-purple-800 to-pink-500': 'from-purple-800 to-green-600'" value="Sign up" type="button" class="bg-gradient-to-r  hover:from-purple-800 hover:to-pink-500 text-white py-2 px-5 rounded cursor-pointer transform transition-all hover:scale-105 duration-300 ease-in-out">
            </router-link>
        </div>
    </div>

    <MobileMenu />
    
</nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
export default {
    name: "Navbar",
    components: { MobileMenu }
}
</script>

<style>

</style>