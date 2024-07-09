<template>
  <div>
    Home
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/news')
  }, 3000)
});

</script>

<style></style>
