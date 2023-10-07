<script setup>

import data from '@/src/full.json';

const items = data.data;

const currAct = ref(Object.keys(items)[0]);
const currOldAct = ref(Object.keys(items)[0]);

const items_links = computed(()=>
{
    if(!currAct.value)
    {
        return {
            childrenOne: [],
            childrenTwo: [],
            childrenThree: []
        }
    }

    let CategoryActiveChildren = data.data[currAct.value].children;

    
    if(CategoryActiveChildren===undefined) CategoryActiveChildren = data.data[currOldAct.value].children;
    else currOldAct.value = currAct.value;

    return {
        childrenOne: CategoryActiveChildren.one.map(child=>child),
        childrenTwo: CategoryActiveChildren.two.map(child=>child),
        childrenThree: CategoryActiveChildren.three.map(child=>child)
    }
})

const activateItem = (index) => 
{ 
    currAct.value = index;
};

</script>

<template>
  <div class="container">

        <div class="left-container">
            <div class="left-container-content">
                <ul ul class="left-ul">
                    <li class="left-li" :id="item.id" 
                    v-for="(item, index) in items" :key="item.title" 
                    :class="{IsActive: index===currAct}"

                    @mouseover="activateItem(index)"
                    >
                        <NuxtLink :to="item.manual_url" class="left-link">
                            {{ item.title }}<img class="icon-in-text arrow-in-ul" src="/img/icon/arrow-2.svg">
                        </NuxtLink>
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
    &-link 
    {
        color:black;
    }

    &-container
    {
        box-sizing:border-box;
        padding-top: 30px;
        padding-bottom: 35px;
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
        margin-bottom: -7px;
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
    margin-top: 4px;
}

.container
{  
    // //стили для контейнера с полями
    // width: 95%;
    // margin-left: 1.9%;
    // margin-top: -0.6%;

    //стили для полного заполнения
    width: 101vw;
    left: 0;
    // margin-left: -0.5%;

    //обязательные стили
    position: fixed;
    box-sizing:border-box;
    display: flex;
    flex-direction: row;
    height: 93vh;
    z-index: 9;

    // background-color:rgb(255, 65, 65);
    background-color:rgb(255, 255, 255);
}


</style>