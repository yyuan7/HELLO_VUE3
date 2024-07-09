<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import {nanoid} from 'nanoid'

let dogImgList = reactive([]);

onMounted(() => {
    handleMore();
})

async function handleMore() {

    try {
        await axios.get('https://dog.ceo/api/breeds/image/random')
            .then(
                (response) => {
                    const {data:{message}} = response;
                    let obj = {
                        id: nanoid(),
                        message,
                    };
                    dogImgList.unshift(obj);
                }
            )
    } catch (error) {
        alert(error);
    }
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