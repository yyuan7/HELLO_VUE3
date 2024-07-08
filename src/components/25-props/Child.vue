<script setup lang='ts'>
    import { defineProps, withDefaults } from 'vue'
    import { type People } from '@/types'

    
    withDefaults(defineProps<{groupList : People}>(), {
        groupList:()=>[{id:"00", name:'admin',age:0}]
    })
    // let props = defineProps<{groupList : People}>()
    // console.log(props.groupList)
</script>

<template>
    <ul>
        <!-- <li v-for="(person, index) in props.groupList" :key="person.id"> {{ person.name }} </li> -->
    </ul>
</template>

<style scoped>

</style>