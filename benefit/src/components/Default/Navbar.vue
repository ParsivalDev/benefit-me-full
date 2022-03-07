<template>
    <!-- <div class="flex flex-row gap-6">
        <router-link to="/"><p>Home</p></router-link>
        <router-link to="/login"><p>Login</p></router-link>
        <router-link to="/register"><p>Register</p></router-link>
    </div> -->
    <nav class="bg-yellow border-gray-200 px-2 sm:px-4 py-2.5 rounded w-full">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
            <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Logo" />
            <span class="self-center text-xl font-bold whitespace-nowrap text-black">Benefit.me</span>
        </a>
        <div class="justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-4">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
                <router-link to="/">
                <a href="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Homepage</a>
                </router-link>
            </li>
            <li>
                <a href="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Contact</a>
            </li>
            <li>
                <a href="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Homepage</a>
            </li>
            </ul>
        </div>
        <div class="flex flex-row space-x-3 items-center">
                <router-link to="/login">
                    <input value="Login" type="submit" class=" rounded-md bg-blue text-white font-medium px-5 py-2 cursor-pointer">
                </router-link>
                <span>or</span>
                <router-link to="/register">
                    <input value="Sign up!" type="submit" class=" rounded-md bg-blue text-white font-medium px-5 py-2 cursor-pointer">
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