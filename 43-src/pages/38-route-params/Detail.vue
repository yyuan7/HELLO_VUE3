<template>
  <ul class="news-list">
    <li>ID - {{id}}</li>
    <li>Title - {{title}}</li>
    <li>Content - {{content}}</li>
  </ul>
</template>

<script setup>
// import { defineProps } from 'vue'

defineProps(['id', 'title', 'content'])

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>