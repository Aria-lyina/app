<script setup>
// import data from './data.json';

// defineProps({
//     title: String,
//     description: String,
//     items: Array
// })

const currAct = ref("2416");

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

// console.log(items.date)

// for (const prop in items.date) {
//     console.log(prop);
//     // for (const prop in items.date) {
//     // console.log(prop);
//     // }
// }

const hov = ref(false);

const listItems = ref([]);

// const listCategory = ref([])

const items_links = reactive({
    // // date: data.data[currAct.value].children.one
    // date: data.data["10515"].children.one,
    // // children: data.data["2416"].children.one.map(child => child) // получаем массив "children"
    // children: data.data[currAct.value].children.one.map(child => child) // получаем массив "children"

    childrenOne: data.data[currAct.value].children.one.map(child => child),
    childrenTwo: data.data[currAct.value].children.two.map(child => child),
    childrenThree: data.data[currAct.value].children.three.map(child => child)
})

const activateItem = (index) => 
{
  
  //console.log(index);

  let listItemOld = document.getElementById(currAct.value);
  listItemOld.classList.remove('IsActive');

  currAct.value = index;

  let listItemNew = document.getElementById(index);
  //console.log(listItemNew);
  listItemNew.classList.add('IsActive');

//   currDate.children = items.date[currAct.value].children.one.map(child => child);

    items_links.childrenOne = items.date[currAct.value].children.one.map(child => child);
    items_links.childrenTwo = items.date[currAct.value].children.two.map(child => child);
    items_links.childrenThree = items.date[currAct.value].children.three.map(child => child);

//   const listItem = listItems.value[index];
// const listItem = listItems.value[1];
};

onMounted(() => 
{
    //   listItems.value = $refs.listItem;
    listItems.value = document.querySelector('.left-li');
    console.log(listItems.value)
    currAct.value = listItems.value.id;
    console.log("curr=",currAct.value);
    
});


</script>

<template>
  <div class="container">
    <!-- <h1>{{ title }}</h1>
    <p>{{ description }}</p>-->
                
    <!-- @mouseover="console.log(index)"   
            @mouseout="deactivateItem(index)"@mouseout="deactivateItem(index)"
        @mouseover="activateItem(index)"
        ref="listItem" ref="listItems"
        @click = "$refs.index.classList.toggle('IsActive')"
        :ref="item.id"
        -->
        <div class="left-container">
            <div class="left-container-content">
                <ul ul class="left-ul">
                    <li class="left-li" :id="item.id" 
                    v-for="(item, index) in items.date" :key="item.title" 
                    @mouseover="activateItem(index)"
                    >
                        {{ item.title }}<img class="icon-in-text arrow-in-ul" src="/img/icon/arrow-2.svg">
                    </li>
                </ul>
            </div>
        </div>

        <div class="right-container">

            <div class="right-column" v-for="(itemLinks, index) in items_links">
                <!-- vvvv -->
                <div class="right-links-container">
                     <ul>
                        <li class="right-li2" :id="item.id" 
                        v-for="(item) in itemLinks" 
                        :key="item.title">
                            <div class="right-category">
                                <NuxtLink :to="item.manual_url" class="right-category-link" >
                                    {{ item.title }}
                                </NuxtLink>
                            </div>

                            <ul>
                                <li class="right-li"
                                :id="item1.id" 
                                v-for="(item1) in item.children" 
                                :key="item.title" >
                                    <NuxtLink class="right-link" :to="item1.manual_url">{{ item1.title }}</NuxtLink>
                                </li>
                            </ul>
                            <hr>
                        </li>

                    </ul>
                </div>
            </div>

            


        </div>
  </div>
</template>

<style scoped lang="scss">

ul 
{
  padding-left: 0px;
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

.left
{
    &-container
    {
        box-sizing:border-box;
        padding-top: 35px;
        padding-bottom: 30px;
        background-color:var(--background-product);
        width: 21%;
        height: 90%;
        height: auto;
        display: flex;

        &-content
        {
            // background-color:rgb(0, 255, 26);
            // overflow-y: scroll;
            overflow-y: auto;
            display: flex;
            width: 100%;
            height: 100%;
        }
    }

    &-ul
    {
        padding-left: 25px;
    }

    &-li 
    {
        padding-bottom: 12px;
        padding-top: 12px;
        font-size: var(--fontsize-small-default);
        padding-left: 15px;
    }
}

.right
{
    &-link
    {
        // background-color:bisque;
        &:hover
        {
            // background-color:bisque;
            color:aqua;
        }
    }

    &-container
    {
        // background-color:rgb(255, 255, 255);
        // background-color:rgb(255, 178, 178);
        // width: 78%;
        // width: 72%;
        width: 75%;
        margin-left: 3%;
        // padding-right: 90px;

        height: 100%;
        // display: flex;
        
        position: relative;
        overflow-y: auto;
    }

    &-column 
    {
        width: 25%;
        // height: 150%;
        height: auto;

        float: left;

        box-sizing:border-box;
       
        display:flex;

        flex-direction: column;

        // background-color:rgb(205, 255, 255);
        
        overflow-wrap: break-word;
        // word-break: break-all; 
        // overflow: hidden;
    }

    &-li 
    {
        // margin-bottom: 10px;
        padding-bottom: 10px;
        // background-color:bisque;
    }

    &-li2
    {
        margin-bottom: -10px;
        // margin-top: -10px;
        // background-color:bisque;
    }

    &-category
    {
        padding-top: 20px;
        margin-bottom: 20px;
        // height: 30px;
        &-link
        {
            color: black;
            font-weight: bold;
            font-size: var(--fontsize-medium);
        }
    }

    &-links
    {
        font-size: var(--fontsize-small-default);
        font-weight: normal;
        padding-bottom: 10px;
        // margin-left: -25px;
        // color: black;

        &-container
        {
            // background-color:rgb(255, 181, 255);
            width: 100%;
            // padding-left: 0px;
            box-sizing:border-box;
            margin-top: 15px;
            margin-bottom: 30px;
            padding-right: 35px;
            &2
            {
                background-color:blue;
            }
        }
    }
}

.IsActive
{
    background-color:rgb(255, 255, 255);
}

.arrow-in-ul
{
    float: right;

    display: block;
    margin: 0 auto;  
    margin-right: 25px;
    // margin-top: 4px;
}

.container
{  
    // //стили для контейнера с полями
    // width: 95%;
    // margin-left: 1.9%;
    // margin-top: -0.6%;

    //стили для полного заполнения
    width: 101vw;
    margin-left: -0.5%;


    //обязательные стили
    position: fixed;
    box-sizing:border-box;
    display: flex;
    flex-direction: row;
    height: 93vh;
    z-index: 9;


    // width: 95%;

    // position: sticky;

    background-color:rgb(255, 255, 255);

    
    // height: 740px;
    // overflow-y: scroll;
}


</style>