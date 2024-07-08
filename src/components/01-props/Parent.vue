<script setup lang="ts">
import { ref } from 'vue'
import child from './Child.vue'

const title = ref('TITLE');
const value = ref(100);

</script>

<template>
    <div class="parent">
        <child :title="title" :value="value"></child>
    </div>
</template>

<style>
.parent{
    width: 600px;
    height: 400px;
    background-color: green;
}
</style>