<template>
    <nav class="bg-yellow border-gray-200 px-2 sm:px-4 py-2.5 rounded w-full font-big">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
                <img src="../../assets/img/logos/peach_logo.png" class="mr-1 h-8 w-8 sm:w-12 sm:h-12" alt="Logo" />
                <span class="self-center text-xl font-bold whitespace-nowrap text-black">Benefit<sub class="font-bold">.me</sub></span>
            </router-link>
        <div class="justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-4">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium text-center">
            <li>
                <router-link to="/">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-black" :class="this.$route.path == '/' ?'relative text-white' : 'text-black'">Homepage </span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
               <router-link to="/mission">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/mission' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-black"  :class="this.$route.path == '/mission' ?'relative text-white' : 'text-black'">Our missios</span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
                <router-link to="/support">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/support' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-black" :class="this.$route.path == '/support' ?'relative text-white' : 'text-black'">Contact</span>
                </span>
                </a>
                </router-link>
            </li>
            <li>
                <router-link to="/hot-topic">
                <a href="#" class=" block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
                    <span :class="this.$route.path == '/hot-topic' ? 'before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block' : ''">
                    <span class="hover:border-b-2 hover:border-black" :class="this.$route.path == '/hot-topic' ?'relative text-white' : ' text-red-600'">Hot News!🔥</span>
                </span>
                </a>
                </router-link>
            </li>
            </ul>
        </div>
        <div class="flex flex-col sm:flex-row space-x-5 w-auto items-center">
            <router-link to="/login">
                <input :class="this.$route.path == '/login' ? 'bg-yellow text-slate-900': ''" value="Login" type="button" class="hover:bg-yellow hover:text-black transition duration-300 ease-out  border-2 border-blue text-center mt-3 sm:mt-0 rounded-md bg-blue text-white font-medium px-5 py-1 cursor-pointer">
            </router-link>
            <span class="hidden sm:block">or</span>
            <router-link to="/register">
                <input :class="this.$route.path == '/register' ? 'bg-yellow text-slate-900': ''" value="Sign up!" type="button" class="hover:bg-yellow hover:text-black transition duration-300 ease-out  border-2 border-blue text-center mt-3 sm:mt-0 rounded-md bg-blue text-white font-medium px-5 py-1 cursor-pointer">
            </router-link>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",

}
</script>

<style>

</style>