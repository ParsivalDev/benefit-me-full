<template>
  <div class="flex flex-col w-[300px] sm:w-[325px] h-[676px] mx-auto items-center justify-center">

    <div>
      <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block">
        <span class="text-yellow text-3xl font-bold">Login</span>
      </span>
    </div>
    <div class="mt-5 text-center">
      <span class=" text-base">No account yet? <router-link to="/register"><span class="underline text-blue font-bold">Register now!</span></router-link></span>
    </div>


    <div class="flex flex-col mt-7 w-full">
      
        <label for="email_register">
          <div class="flex flex-col justify-start">
            <span class="text-sm font-semibold text-black mb-1">Email:</span>
            <input v-model="email" ref="email_register" id="email_register" placeholder="ex. cheaper.OF@gmail.com" class="border-b-2 border-black outline-none text-base" type="email">
          </div>
        </label>

        <label for="password_register">
          <div class="flex flex-col justify-start mt-5">
            <span class="text-sm font-semibold text-black mb-1">Password:</span>
            <input v-model="password" ref="password_register" id="password_register" placeholder="°°°°°°°°" class="border-b-2 border-black outline-none text-base" type="password">
          </div>
        </label>

        <input value="Login" @click="login()" type="submit" class=" text-lg mt-10 w-full hover:bg-yellow hover:text-black transition duration-300 ease-out border-2 border-blue text-center rounded-md bg-blue text-white font-medium px-5 py-1 cursor-pointer">

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