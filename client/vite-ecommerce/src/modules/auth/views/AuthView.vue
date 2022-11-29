<template>
  <BasicLayout>
    <div class="welcome text-center py-5">
      <p>Welcome</p>
      <v-sheet class="auth-view">

        <div v-if="showLogin">
          <h2>Login</h2>
          <LoginForm @loginEmit="redirectHome" />

          <p>No account yet? 
            <span class="pointer fw-bold" @click="showLogin = false">Register</span> instead
          </p>
        </div>

        <div v-else>
          <h2>Register</h2>
          <RegisterForm @registerEmit="changeForm" />

          <p>Already registered? 
            <span class="pointer fw-bold" @click="showLogin = true">Login</span> instead
          </p>
        </div>
      </v-sheet>
    </div>
  </BasicLayout>
</template>

<script setup>
  import { defineAsyncComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import BasicLayout from '@/layouts/BasicLayout.vue'

  const router = useRouter()

  const LoginForm = defineAsyncComponent(() => import('../components/LoginForm.vue'))
  const RegisterForm = defineAsyncComponent(() => import('../components/RegisterForm.vue'))

  const showLogin = ref(true)

  const changeForm = () => showLogin.value = !showLogin.value
  const redirectHome = () => router.push({ name: 'Home' })


</script>


<style lang="css" scoped>

span:hover {
  opacity: 0.6;
}

</style>