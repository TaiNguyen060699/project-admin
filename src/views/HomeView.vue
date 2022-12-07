<template>
  <div class="page-login">
    <FormLogin />
  </div>
</template>

<script setup>
import FormLogin from "@/components/stateful/FormLogin/FormLogin.vue";
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Login',
  htmlAttrs: { lang: 'en', amp: true }
})


</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  background-image: url('@/assets/img/bg-login.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
