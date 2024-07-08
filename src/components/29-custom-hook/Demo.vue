<template>
  <div>
    {{ sum }} - 10x: {{ sumTenTime }}
  </div>
  <button @click="handleSum">+1</button>
  <hr>

  <div><img v-for="(img, index) in dogImgList" :key="index" :src="img"></div>
  <button @click="addDogImgList">re-new</button>
</template>

<script setup>
 import useSum from '@/hook/useSum';
 import useDogImg from '@/hook/useDogImg';

 const {sum, handleSum, sumTenTime} = useSum();
 const {dogImgList, addDogImgList} = useDogImg();
</script>

<style>
img{
  height: 100px;
  width: auto;
  margin-right: 10px;
}
</style>
