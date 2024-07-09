<script setup lang='ts'>
import { ref } from 'vue'

const sum = ref(1);
const n = ref(1);

function handleAdd() {
    sum.value += n.value
}
function handleMinus() {
    sum.value -= n.value
}
</script>

<template>
    <div class="count">
        <h2>Sum: {{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="handleAdd">+</button>
        <button @click="handleMinus">-</button>
    </div>
</template>

<style scoped>
.count {
    background-color: rgba(167, 213, 231, 0.774);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0  10px;
}
select, button {
    margin-right: 10px; 
    height: 25px;
}
</style>