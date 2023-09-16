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
  <div class="container">
    <!-- <h1>{{ title }}</h1>
    <p>{{ description }}</p>-->
     <div class="container-left">
        <div class="container-left-content">
        <ul>
            <li class="li-left" v-for="item in items.date" :key="item.title">
                {{ item.title }}
            </li>
        </ul> 
        </div>
    </div>
    <!-- <div class="container-right">
        <ul>
            <li v-for="item in items.date" :key="item.title">
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
            </li>
            <li v-for="item in items.date" :key="item.title">
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
            </li>
            <li v-for="item in items.date" :key="item.title">
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
                {{ item.title }}
            </li>
        </ul> 
    </div>  -->

    <div>

    </div>

  </div>
</template>

<style scoped lang="scss">

ul {
  padding-left: 25px;
//   background-color:aqua; 
  width: 100%; 
  height: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
}

li 
{
    list-style-type: none;
    // padding-bottom: 15px;
    // padding-top: 15px;
    // background-color:bisque;
    // width: 700px;
    // padding-left: 0px;
}

.li-left
{
    // background-color:bisque;
    // width: 100%;
    padding-bottom: 12px;
    padding-top: 12px;
    font-size: var(--fontsize-small-default);
    padding-left: 15px;
    &:hover
    {
        background-color:white;
    }
}

.li-right
{
    // background-color:rgb(0, 204, 255);
    width: 100%;
}
.container
{  
    position: fixed;
    width: 95%;
    box-sizing:border-box;

    // position: sticky;

    display: flex;
    // 
    background-color:rgba(255, 0, 68, 0.352);
    flex-direction: row;
    margin-left: 1.9%;
    margin-top: -0.6%;

    z-index: 9;
    height: 740px;


    &-right
    {
        background-color:rgb(195, 194, 255);
        width: 80%;
        height: 100%;
        display: flex;
        position: relative;
        overflow-y: scroll;
    }

    &-left
    {
        box-sizing:border-box;
        padding-top: 35px;
        padding-bottom: 30px;
        background-color:var(--background-product);
        width: 20%;
        height: 100%;
        display: flex;
        // position: fixed;
  

        &-content
        {
            // background-color:rgb(0, 255, 26);
            overflow-y: scroll;
            display: flex;
            width: 100%;
            height: 100%;
        }
    }
}


</style>