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

    <button style="width: 200px;">
        
            <div>
                а тут работает...
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 300 300" width="20px" heigh="20px">

        <path class="st0" d="M60.88,288.56C60.88,288.56,60.88,288.56,60.88,288.56l88.79-131.58c3.36-5.82,3.04-8.58,1.3-13.56L62.19,11.84
            c0,0,0,0,0,0C52.5,0.5,40.5,3.5,40.5,16.42l1,3.08c0,0.71,1.6,3.42,2,4l85.1,122.52c0.82,1.19,0.82,2.76,0,3.95L41.12,277.16
            c-0.49,0.61-0.99,1.31-1.46,2.12c-1.35,2.33-1.91,4.57-2.16,6.22c-0.03,0.89-0.07,5.06,3,8c3.85,3.69,9.42,2.37,11,2
            C57.22,294.15,60.19,289.68,60.88,288.56z"/>
        </svg>

            </div>

    </button>
    

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