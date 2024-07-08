<script setup lang="ts">
// import demo from '@/components/31-route-basic/Demo.vue'
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="app">
    <h1 class="title">Hello Router</h1>
    <!-- <demo type="module"></demo> -->
     <div class="navigate">
      <RouterLink :to="{path: '/home'}">Home</RouterLink>
      <RouterLink :to="{name: '/newsPage'}">News</RouterLink>
      <RouterLink :to="{path: '/about'}">About</RouterLink>
     </div>
     <div class="main-content">
      <router-view></router-view>
     </div>
  </div>
</template>

<style>
/* .app {
  background-color: #5dc6f4;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
} */
 .title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, #94dcf4, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
 }
 .navigate{
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
 }
 .navigate a{
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: #94dcf4;
  text-decoration: none;
  color: white;
  font: 18px;
  letter-spacing: 5px;
 }
 .navigate a.router-link-active {
  background-color: rgb(99, 99, 248);
  color: #94dcf4;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 'Times New Roman', Times, serif;
 }
 .main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
 }
</style>
