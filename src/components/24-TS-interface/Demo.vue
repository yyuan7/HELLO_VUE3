<script setup lang='ts' name="Person">
    import { ref, reactive } from 'vue'
    import { type PersonInterface, type People } from '@/types'

    let person : PersonInterface = {
        name: 'yy', 
        id: '01', 
        age: 99
    }

    let personList = reactive<People>([
        { name: 'y1', id: '01', age: 99}, 
        { name: 'y2', id: '02'}, 
        { name: 'y3', id: '03', age: 97}, 
    ])

</script>

<template>
    <div class="person">
        ???
    </div>
</template>

<style scoped>

</style>