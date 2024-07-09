<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { usePetStore } from '@/store/pet'
import { storeToRefs } from 'pinia'

// let dogImgList = reactive([]);
const petStore = usePetStore();
// console.log(petStore)
const {dogImgList} = storeToRefs(petStore);

onMounted(() => {
    handleMore();
})

async function handleMore() {
    petStore.addDogImgAction();
}
</script>

<template>
    <div class="pet">
        <h3>wolf wow</h3>
        <button @click="handleMore">more</button>
        <ul>
            <li v-for="img in dogImgList" :key="img.id">
                <img :src="img.message" alt="oops">
            </li>
        </ul>
    </div>
</template>

<style scoped>
.pet {
    background-color: rgba(137, 235, 218, 0.774);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0  10px;
}
select, button {
    margin-right: 10px; 
    height: 25px;
}
img {
    height: 50px;
    width: auto;
}
</style>