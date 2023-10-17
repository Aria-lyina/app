<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Product from '@/components/Product.vue';
import HeaderProducts from '@/components/HeaderProducts.vue';
import 'swiper/css/scrollbar';


defineProps({
    title: String,
    products: Array,
    key: Number,
    link:
    {
        type: String,
        default: '/'
    },
    heightList:
    {
        type: String,
        default: '400px'
    },
    widthItem:
    {
        type: String,
        default: '300px'
    },
    fontSizeLarge:
    {
        type: String,
        default: "25px"
    },
    fontSizeLight:
    {
        type: String,
        default: "15px"
    },
    sizeImage:
    {
        type: String,
        default: "250px"
    }

})

const components = {
  Swiper,
  SwiperSlide,
};

const { modules } = {
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
};

const Swip = ref(null);
const slideCount = ref(3.3);


onMounted(()=>
{

    window.onresize = function()
    {
        if (window.innerWidth < 768) 
        {
            slideCount.value = 1.3; 
        } else if (window.innerWidth < 992) {
            slideCount.value = 2.3;
        } else {
            slideCount.value = 3.3;
            
        }
    }
})



</script>

<template>

    <div class="container" :style="{height: heightList}">

        <header-products :title="title" style="height: 7%; font-size: 30px;"/>

        <swiper
        :scrollbar="{
            draggable: true,
            snapOnRelease: true,
            scrollbarClickable: true
        }"
        :slidesPerView="slideCount"
        :spaceBetween="15"
        :modules="modules"
        class="mySwiper"
        ref="Swip"
        >

        <swiper-slide v-for="(item, index) in products" >
                <product :key="index" :font-size-large="fontSizeLarge" :font-size-light="fontSizeLight" :size-image="sizeImage"
                :item="item"/>
        </swiper-slide>
        </swiper>
    </div>

  </template>

<style scoped lang="scss">

.container
{
    position: relative;
    // background-color:blueviolet;  
}

.swiper {
  width: 100%;
//   background-color:red;  
  height: 90%;
  padding-bottom: 40px;

  &-slide {
    font-size: 18px;
    background-color: var(--background-product);
    display: flex;
    justify-content: center;
    align-items: center;
    }
}

// @media screen and (max-width: 950px) 
// {
//     .swiper:slidesPerView:1.5;
// }

</style>