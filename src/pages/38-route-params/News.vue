<template>
    <div class="news">
       <ul v-for="news in newsList" :key="news.id">
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
        <RouterLink :to="{
          name: 'detail',
          // params: {
          //   id: news.id,
          //   title: news.title,
          //   content: news.content,
          // },
          query: {
            id: news.id,
            title: news.title,
            content: news.content,
          },
        }">{{ news.title }}</RouterLink>
       </ul>
       <div class="news-content">
        <router-view></router-view>
       </div>
    </div>
  </template>
  
  <script setup>
    import { reactive } from 'vue';
    import { RouterView, RouterLink } from 'vue-router';
    
    const newsList = reactive([
      {id: 1, title: "News#1", content: "Content#1"},
      {id: 2, title: "News#2", content: "Content#2"},
      {id: 3, title: "News#3", content: "Content#3"},
      {id: 4, title: "News#4", content: "Content#4"},
      {id: 5, title: "News#5", content: "Content#5"},
    ]);
  </script>
  
  <style>
    .news {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      height: 100%;
    }
    .news ul {
      margin-top: 30px;
      list-style: none;
      padding-left: 10px;
    }
    .news li>a {
      font-size: 18px;
      line-height: 40px;
      text-decoration: none;
      color: aqua;
      text-shadow: 0 0 1px aquamarine;
    }
  </style>
  