<script setup>
// import data from './data.json';

// defineProps({
//     title: String,
//     description: String,
//     items: Array
// })

// import { reactive } from 'vue';

// import data from '@/public/data.json';

// const state = reactive({
//   title: data.title,
//   description: data.description,
//   items: data.items
// });

// console.log(state.title)

// import data from '@/src/full.json';

// const items = reactive({
//     date: data.data
// })

// console.log(items.date)

// for (const prop in items.date) {
//     console.log(prop);
//     for (const prop in items.date) {
//     console.log(prop);
// }
// }

</script>

<template>
    <div class="bt">
        <svg class="header-button-colors btnn" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
        </svg>
    </div>

</template>

<style scoped lang="scss">


.bt
{
    background-color:rgb(201, 255, 85);
    width: 50px;
    height: 20px;

    fill:rgb(0, 255, 157);
    &:hover
    {
        svg 
        {
            fill:rgb(60, 0, 255);
        }
    }
}

.btnn
{   
    // fill:rgb(0, 255, 157);
    // &:hover
    // {
    //     fill:rgb(255, 0, 0);
    // }

    background-color:aqua;
    width: 20px;
    height: 20px;
}
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