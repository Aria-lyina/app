
<!-- import { Slider } from '.nuxt/components'; -->
<script setup>

import Slider from '@vueform/slider'
import Tile from '@/components/FiltrCategory/Tile.vue'; 
import sliderRange from '@/components/FiltrCategory/Slider-range.vue'; 
import sectionList from '@/components/FiltrCategory/Section-list.vue'; 

defineProps ({
    Data: 
    {
        type: Object
    },
  });

//   const min = 59;
//   const max = 400000;
//   const value = ref([min,max]);

  const selected = ref([]);

  const plus = "50,22.5 27.5,22.5 27.5,0 22.5,0 22.5,22.5 0,22.5 0,27.5 22.5,27.5 22.5,50 27.5,50 27.5,27.5 50,27.5";
  const minus = "0,22.5 0,27.5 50,27.5 50,22.5";

  const statusNonHide = {show:true, icon:minus};
  const statusHide = {show:false, icon:plus}; 
  
//   const status = ref(statusNonHide);

    const status = ref(statusHide);

    // const status = ref(minus);
    // const show = ref(true);


    // const status = ref(plus);
    // const show = ref(false);


  const Hide = () => {

        // if (show.value == false)
        // {
        // show.value = true;
        // status.value = minus;
        // } 
        // else 
        // {
        //     show.value = false;
        //     status.value = plus;
        // }

        if (status.value.show == false)
        {
            status.value = statusNonHide;
        } 
        else 
        {
            status.value = statusHide;
        }


        // console.log(show.value);
        // console.log(currentStatus.value);
    }
//v-html=currentStatus
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
                <ul v-if="status.show">
                    <li v-for="(item, index) in Data.option_values" class="li_checkbox">
                        <div class="checkboxSt fontFiltr">
                            <input class="check_1" type="checkbox" :id="item.option_value_id" 
                            :name="item.option_value_name" :value='item.option_value_id' v-model="selected"/>
                            <label class="checkboxSt-lbl" :for="item.option_value_id">  {{ item.option_value_title }}
                                 <span class="fontLightGrey font13">({{ item.products_quantity }})</span> 
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div v-if="Data.special_combobox_view=='tile'" class="tile">
                <tile :show="status.show" :items="Data.option_values"/>
            </div>

            <div v-if="Data.special_combobox_view=='slider'">
                <slider-range :show="status.show" :item="Data"/>
            </div>

            <div v-if="Data.special_combobox_view=='section_list_autocomplete'">
                <sectionList :show="status.show" :items="Data"/>
            </div>

        </div>

</template>

<style src="@vueform/slider/themes/default.scss"></style> 
<style src="@/assets/checkBox.scss"></style> 
<!-- <style src="@/assets/cast-rang.scss"></style> -->

<style lang="scss" scoped>

// .sl-rang
// {

// }

.container
{
    border-bottom: 1px solid var(--light-color-text); 
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
    }
}

// .li_checkbox
// {
//     // padding-top:7px;
//     // padding-bottom:7px;
//     &:hover
//     {
//         background-color: rgba(0, 255, 255, 0.095);

//         >div
//         {   
//             >input 
//             {border: 1px solid black; }

//             >input[type="checkbox"]:checked 
//             {
//             border: 1px solid var(--btn-color2);
//             }
//         }
//     }
// }

// .checkboxSt
// {
//     // background-color:red;
//     display: flex;
//     align-items: center;

//     &-lbl
//     {
//         padding-top:12px;
//         padding-bottom:12px;
//         padding-left: 10px;

//         // background-color:red;
//         width:100%;
//     }
// }

// .check_1
// {
//     height:18px;
//     // width:19px;
//     width:20px;
// }

// input[type="checkbox"] {
//       -webkit-appearance: none;
//       -moz-appearance: none;
//       appearance: none;
//     //   width: 20px;
//     //   height: 20px;
//       border: 1px solid var(--light-color-text); 
//       border-radius: 4px;
//     //   cursor: pointer;

//     }

//     // /* Стилизация отмеченного чекбокса */
//     input[type="checkbox"]:checked 
//     {
//       background-color: var(--btn-color2);
//       border: 1px solid var(--btn-color2);
//     }

//     // input[type="checkbox"]:hover 
//     // {
//     //     border: 1px solid black; 
//     // }

//     input[type="checkbox"]:checked::before {
//     content: '\2713'; /* Юникод символ галочки */
//     font-family:system-ui;
//     display: block;
//     text-align: center;
//     font-size: 13px; /* размер галочки */
//     color: var(--btn-color1); /* цвет галочки */

//     }



</style>