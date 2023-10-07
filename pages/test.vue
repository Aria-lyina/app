<script setup>
// import data from './data.json';

// defineProps({
//     title: String,
//     description: String,
//     items: Array
// })

import { reactive } from 'vue';

// import data from '@/public/data.json';

// const state = reactive({
//   title: data.title,
//   description: data.description,
//   items: data.items
// });

// console.log(state.title)

import data from '@/src/full.json';

const items = reactive({
    date: data.data
})

console.log(items.date)

for (const prop in items.date) {
    console.log(prop);
    for (const prop in items.date) {
    console.log(prop);
}
}

</script>

<template>
   <!--<div class="container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="container-left">
        <ul>
            <li v-for="item in items.date" :key="item.title">
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
            </li>
        </ul> 
    </div>
    <div class="container-right">
        <ul>
            <li v-for="item in items.date" :key="item.title">
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
            </li>
        </ul> 
    </div>

    <div>

    </div>

  </div>-->
</template>

<style scoped lang="scss">

.container
{
    position: fixed;
    display: flex;
    width: 100%;
    background-color:rgba(255, 0, 68, 0.352);

    &-right
    {
        background-color:rgba(4, 0, 255, 0.352);
        width: 75%;
        height: 700px;
        display: flex;
        // position: fixed;
        overflow-y: scroll;
    }

    &-left
    {
        background-color:rgba(0, 255, 255, 0.352);
        width: 20%;
        height: 700px;
        display: flex;
        // position: fixed;
        overflow-y: scroll;
    }
}


</style>