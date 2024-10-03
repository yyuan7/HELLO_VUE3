<template>
  <v-snackbar
    v-model="snackbar.visible"
    timeout="5000"
  >
    {{ snackbar.message }}
    <v-btn color="pink" flat @click="snackbar.visible = false"> Close </v-btn>
  </v-snackbar>
</template>

<!-- <script lang="ts" > -->
<script lang="ts" setup>
import { ref } from 'vue';

interface Snackbar {
  visible: boolean;
  message: string;
  type: string; 
}

const snackbar = ref<Snackbar>({
  visible: true,
  message: "Error Message",
  type: "error", // 'success', 'info', 'warning', 'error'
});

// function pop(message: string, type: string = 'error') {
//   snackbar.value.message = message;
//   snackbar.value.type = type;
//   snackbar.value.visible = true;
// };

// defineExpose({ snackbar, pop })
</script>