<script setup lang='ts'>
    import { ref, reactive } from 'vue'
    import {type People} from '@/types'
    import child from './Child.vue'

    let peopleList = reactive<People>([
        { name: 'y1', id: '01', age: 99}, 
        { name: 'y2', id: '02'}, 
        { name: 'y3', id: '03', age: 97}, 
    ]);

    // const tt = ref('title-PP');

</script>

<template>
    <div>
        <!-- <child :test="tt"/> -->
        <child :groupList="peopleList"/>
    </div>
</template>

<style scoped>

</style>