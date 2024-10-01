<template>
  <v-app-bar :elevation="2">
    <template #prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>CLYNK APP Header</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn stacked variant="tonal">
      <v-icon icon="mdi-login"></v-icon>
      Login
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup></script>
