<template>
  <router-view />
</template>

<script setup lang="ts">
// import AppLayout from "./layouts/AppLayout.vue";

// test-only
import { onMounted } from "vue";
import { reqLogin } from "./api/user";

onMounted(() => {
  reqLogin({
    username: "cat",
      password: "dog",
  });
});
</script>

<style lang="scss" scoped></style>
