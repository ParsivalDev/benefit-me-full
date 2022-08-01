<template>
  <div class="flex flex-col w-[300px] sm:w-[325px] h-[676px] mx-auto items-center justify-center">

    <div>
      <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-purple-800 to-pink-500 relative inline-block">
        <span class="text-3xl font-bold">Login</span>
      </span>
    </div>
    <div class="mt-5 text-center">
      <span class=" text-base font-medium">No account yet? <router-link to="/register"><span class="underline font-bold">Register now!</span></router-link></span>
    </div>


    <div class="flex flex-col mt-7 w-full">
      
        <label for="email_register">
          <div class="flex flex-col justify-start">
            <span class="text-sm font-semibold mb-1">Email:</span>
            <input v-model="email" ref="email" id="email" placeholder="ex.: cheaper.OF@gmail.com" class="border-b-2 border-white pb-1 bg-transparent outline-none text-base" type="email">
          </div>
        </label>

        <label for="password_register">
          <div class="flex flex-col justify-start mt-5">
            <span class="text-sm font-semibold mb-1">Password:</span>
            <input v-model="password" ref="password" id="password" placeholder="°°°°°°°°°°°°" class="border-b-2 border-white pb-1 bg-transparent outline-none text-base" type="password">
          </div>
        </label>

        <input value="Login" @click="login()" type="submit" class=" mt-10 font-bold text-lg bg-gradient-to-r from-purple-800 to-green-600 hover:from-purple-800 hover:to-pink-500 text-white py-2 px-5 rounded cursor-pointer transform transition-all hover:scale-105 duration-300 ease-in-out">

    </div>

  </div>
</template>

<script>
export default {
    name: "Login",
    data(){
      return{
        email: '',
        password: '',
      }
    },
    methods:{
    async login(){

      let data = new FormData();
    
      data.append("email", this.email)
      data.append("password", this.password ) 
    
      this.axios.post('/user/login', data)
     .catch(errors => console.log(errors))
     .finally(()=>{
       this.$router.push({ path: '/homepage' })
     })

     }
    }

}
</script>

<style>

</style>