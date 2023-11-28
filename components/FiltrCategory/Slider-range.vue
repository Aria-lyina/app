
import { mergeProps } from 'nuxt/dist/app/compat/capi';
<script setup>

import Slider from '@vueform/slider'

const props = defineProps ({
        item: 
        {
            type: Object
        },
        show: 
        {
            type: Boolean
        }
  });

// const min = 59;
//   const max = 400000;

  const value = ref([props.item.chosen_values.min,props.item.chosen_values.max]);

  
//   const value = ref(Object.values(item.value.chosen_values));

</script>

<style src="@vueform/slider/themes/default.scss"></style> 

<template>
    <div v-if="show" class="cont">
        <div class="slider-range-numbers">
            <input type="text" name="price-range1" pattern="[1-9]" v-model="value[0]">
            <div class="separator"></div>
            <input type="text" name="price-range1" pattern="[1-9]" v-model="value[1]">
        </div>
       
        <Slider :tooltips="false" :min="item.range_values.min" :max="item.range_values.max" v-model="value"/> 
    </div>
</template>

<style lang="scss" scoped>

    .cont
    {
        padding-bottom: 15px;
        // background-color: red;
    }
    .separator
    {
        position: relative;
        // background-color: red;
        width: 10%;
        height: 17px;
        border-bottom: 1px solid black;
    }

    .slider-range-numbers
    {
        display: flex;
        // background-color: red;
        width: 100%;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 30px;
        position: relative;

        >input 
        {
            width: 37%;
            height: 35px;
            border: 0;
            background-color: var(--background-product);
            border-radius: 2px;
            text-align: center;
        }
    }

</style>