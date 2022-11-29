<template>
  <v-sheet color="#fff">
    <v-form class="mt-5 mx-auto"
      :class="mdAndUp ? 'w-50' : 'w-75'"
      @submit.prevent="onRegister" 
      lazy-validation
    >
      <v-text-field class="my-4 text-#999"
        :append-inner-icon="'mdi-account-circle'"
        :error="formError.username"
        :rules="[rules.minimum, rules.required]"
        autofocus
        color="secondary-darken-1"
        hide-details="auto"
        label="Username"
        placeholder="Enter your name"
        required
        type="text"
        v-model="formData.username"
        variant="filled"
      />

      <v-text-field class="my-4 text-#999"
        :append-inner-icon="'mdi-email'"
        :error="formError.email"
        :rules="[rules.email, rules.required]"
        color="secondary-darken-1"
        hide-details="auto"
        label="Email"
        placeholder="example@example.com"
        required
        type="email"
        v-model="formData.email"
        variant="filled"
      />

      <v-text-field class="my-4 text-#999"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :error="formError.password"
        :rules="[rules.required, rules.length(6)]"
        :type="showPassword ? 'text' : 'password'"
        @click:append-inner="showPassword = !showPassword"
        color="secondary-darken-1"
        counter="6"
        hide-details="auto"
        label="Password"
        placeholder="Enter your password"
        required
        v-model="formData.password"
        variant="filled"
      />

      <v-btn class="pointer text-white text-decoration-none my-4 mx-auto"
        :disabled="inSubmission || !formData.username || !formData.email || !formData.password"
        :loading="isLoading"
        color="#5ae4ca"
        rounded
        type="submit"
      >Sign up</v-btn>

    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive } from 'vue'
  import { useDisplay } from 'vuetify'
  import { registerApi, loginApi } from '@/apis/strapi'
  import * as Yup from "yup"

  const { mdAndUp } = useDisplay()

  let formData = ref<object>({})
  let formError = ref<object>({})
  let showPassword = ref(false)
  let isLoading = ref(false)
  let inSubmission = ref(false)

  const rules = reactive({
    email: v => /^\S+@\S+\.\S+$/.test(v) || 'Please enter a valid email',
    length: len => v => (v || '').length >= len || `At least ${len} characters is required`,
    minimum: v => (v && v.length >= 3) || 'Min 3 characters',
    required: v => !!v || 'Required.'
  })

  const emit = defineEmits<{ (event: 'registerEmit'): void }>()

  const schemaForm = Yup.object().shape({
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  })

  const onRegister = async () => {
    formError.value = {}
    inSubmission.value = true
    isLoading.value = true

    try {
      await schemaForm.validate(formData.value, { abortEarly: false })

      try {
        const response = await registerApi(formData.value)
        emit('registerEmit') // emit to redirect user to login
      } catch (error) {
        console.log('error', error)
      }

    } catch (yupError) {
      inSubmission.value = false
      yupError.inner.forEach((error) => {
        formError.value[error.path] = error.message
      })
    }

    inSubmission.value = false
    isLoading.value = false
    formData.value = {}
  }

</script>