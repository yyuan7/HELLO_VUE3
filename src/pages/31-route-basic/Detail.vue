<template>
  <ul class="news-list">
    <li>ID - {{query.id}}</li>
    <li>Title</li>
    <li>Content</li>
  </ul>
</template>

<script setup>
  import { ref, toRefs } from 'vue';
  import {useRoute} from 'vue-router'

  const route = useRoute();
  const {query} = toRefs(route);
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