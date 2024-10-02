<!-- <template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template> -->

<template>
  <v-layout class="rounded rounded-md">
    <AppHeader />

    <!-- <v-main
      class="d-flex align-center justify-center"
      style="min-height: 800px"
    > -->
    <v-main class="align-center justify-center">
      APP Layout: Main Content
      <Test />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/header/AppHeader.vue";
import Test from "@/components/Test.vue";
</script>
