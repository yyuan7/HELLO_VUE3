<script setup lang='ts'>
import { ref, toRefs } from 'vue'
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'

const countStore = useCountStore();
// console.log(countStore);
const n = ref(1);
// const {sum} = storeToRefs(countStore);

function handleAdd() {
    // countStore.sum += n.value;
    countStore.incrementAction(n.value);
}
function handleMinus() {
    // preferred for multiple data change
    countStore.$patch({
        sum: countStore.sum - n.value
    })
    // countStore.sum -= n.value
}
</script>

<template>
    <div class="count">
        <h2>Sum: {{ countStore.sum }}</h2>
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