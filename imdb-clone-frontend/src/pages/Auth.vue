<script setup lang="ts">
import { ref } from "vue";
import RegisterCard from "@/components/auth/RegisterCard.vue";
import LoginCard from "@/components/auth/LoginCard.vue";

const isLoginMode = ref(true);
const toggleAuthMode = () => {
  isLoginMode.value = !isLoginMode.value;
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-background p-4">
    <LoginCard v-if="isLoginMode" @toggle-mode="toggleAuthMode" />

    <RegisterCard v-else @toggle-mode="toggleAuthMode" />
  </div>
</template>
