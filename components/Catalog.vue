<script setup>
import PathPage from '@/components/PathPage.vue'; 
import List from '@/components/FiltrCategory/List.vue'; 
import Tile from '@/components/FiltrCategory/Tile.vue'; 
import data from '@/src/getFilters.json';

const items = data.data.options;

const pathTest = 
    {
        path: [{link:"/", name:"Одежда и обувь"},{link:"/", name:"Обувь"},{link:"/", name:"Мужская обувь"}],
        // viewBox: "0 0 24 24",
    }


</script>

<template>

    <div class="content">
        <div class="header-container">
            <div class="header-content">
                <div class="header-text">Мужская обувь</div>
                <path-page :path-props="pathTest"/>
            </div>
        </div>
        <div class="content-data">
            <div class="left-container">
                <List v-for="(item, index) in items" :key="index" :Data="item"></List>
              
                <!-- <List :Data="items[1]"></List>
                <List :Data="items[2]"></List>
                <List :Data="items[4]"></List>
                <List :Data="items.price"></List> -->

            </div>

            <div class="right-container">


                dfdfxtyg uhjkmn  bvgcfdrt yu jk lmnbvcfdxr57uokl;,mnbvgcfdr56t7okl,mn bhjgvfytg                
                dfdfxtyguhjkmn   fdrt yuijk lmn bvcfdxr57 uo kl;,mnbvgc dr56t7okl, mnbhjgvfytg                
                dfdfxtyguhjkmn bvgcf drty uijklmnbvcfdxr57 uokl;,mnbvgcfdr56t7okl,mnbhjgvfytg
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content 
    {
        width: 100%;
        // height: 900px;
        &-data 
        {
            display: flex;
            justify-content: space-between;
        }
    }

    .header 
    {
        &-container
        {
            // background-color:aqua;
            height: 130px;
            width: 100%;
            display: flex;
            align-items:center;
            
            box-sizing:border-box;
            padding-top: 12px;

        }

        &-content 
        {
            width: 100%;
            // background-color:red;
            display: flex;
            justify-content: space-between;
            align-items:flex-end;
        }


        &-text 
        {
            font-size: 30px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    .left
    {
        &-container
        {
            // background-color:violet;
            width: 18%;
            min-width: 200px;
            // height: 1800px;
            // padding-right: 20px;
            margin-right: 25px;
            border-top: 1px solid;
        }
    }

    .right 
    {
        &-container
        {
            background-color:lightblue;
            width: 79%;
            height: auto;
            box-sizing:border-box;
            // padding-left: 15px;

            // width: auto;
            // height: 800px;
            border-top: 1px solid;

        }
    }

</style>