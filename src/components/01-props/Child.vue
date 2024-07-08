<script setup lang="ts">
import { ref } from 'vue'
defineProps(['title', 'value'])
</script>

<template>
    <div class="child">{{ title }} - {{ value }}</div>
</template>

<style>
.child{
    width: 400px;
    height: 200px;
    background-color: greenyellow;
}
</style>