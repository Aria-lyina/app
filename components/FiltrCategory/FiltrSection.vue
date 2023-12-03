
<!-- import { Slider } from '.nuxt/components'; -->
<script setup>

import List from '@/components/FiltrCategory/List.vue'; 
import Tile from '@/components/FiltrCategory/Tile.vue'; 
import sliderRange from '@/components/FiltrCategory/Slider-range.vue'; 
import sectionList from '@/components/FiltrCategory/Section-list.vue'; 

defineProps ({
    Data: 
    {
        type: Object
    },
  });

//   const selected = ref([]);

  const plus = "50,22.5 27.5,22.5 27.5,0 22.5,0 22.5,22.5 0,22.5 0,27.5 22.5,27.5 22.5,50 27.5,50 27.5,27.5 50,27.5";
  const minus = "0,22.5 0,27.5 50,27.5 50,22.5";

  const statusNonHide = {show:true, icon:minus};
  const statusHide = {show:false, icon:plus}; 
  
  const status = ref(statusHide);


  const Hide = () => {

        if (status.value.show == false)
        {
            status.value = statusNonHide;
        } 
        else 
        {
            status.value = statusHide;
        }
    }
</script>

<template>
    <div class="container">

            <div class="name-list fontFiltrName" @click="Hide">
                <div class="name-list-text">
                    {{ Data.option_title }} <span class="fontLightGrey"> &nbsp; {{Data.total_filtered}}</span> 
                </div>
                <div class="status-hide" >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 50 50" width="15px" heigh="15px">
                    <polygon :points="status.icon" /> </svg>
                </div>
            </div>

            <div v-if="Data.special_combobox_view=='list'" class="list">
                <list :show="status.show" :items="Data"/>
            </div>
            
            <div v-if="Data.special_combobox_view=='tile'" class="tile">
                <tile :show="status.show" :items="Data"/>
            </div>

            <div v-if="Data.special_combobox_view=='slider'">
                <slider-range :show="status.show" :item="Data"/>
            </div>

            <div v-if="Data.special_combobox_view=='section_list_autocomplete'">
                <sectionList :show="status.show" :items="Data"/>
            </div>

        </div>

</template>

<style lang="scss" scoped>

    .container
    {
        border-bottom: 1px solid var(--light-color-text); //!!!!!
        padding-top: 15px;
        // background-color: aqua;
        padding-bottom: 15px;
        // >ul 
        // {
        //     padding-bottom: 15px;
        // }
    }

    .status-hide
    {
        // background-color:red;
        display: flex;
        align-items: center;
    }

    .name-list
    {
        // background-color: violet;
        padding-top:12px;
        padding-bottom:12px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        color: var(--link-color);

        &:hover
        {
            .name-list-text
            {
                color: var(--link-color-hover);
            }
            
        }

        &-text 
        {
            // background-color: aqua;
            max-width: 80%;
        }
    }

</style>
