<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import VideoBox from '@/components/VideoBox.vue';
import HeaderProducts from '@/components/HeaderProducts.vue';
import 'swiper/css/scrollbar';


defineProps({
    title: String,
    videos: Array,
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

})

const components = {
    Swiper,
    SwiperSlide,
    // SwiperWrapper
};

const { modules } = {
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
};
</script>

<template>
    <div class="container" :style="{ height: heightList }">

        <header-products :title="title"  nameLink="YouTube" style="height: 20%; font-size: 30px; margin-bottom:0" />
        <swiper :scrollbar="{
            draggable: true,
            snapOnRelease: true,
            scrollbarClickable: true
        }" :slidesPerView="3.5" :spaceBetween="15" :modules="modules" class="mySwiper">

            <swiper-slide v-for="(item) in videos">
                <video-box :video="item" />
            </swiper-slide>
        </swiper>

        <!-- <div style="background-color: rgb(217, 255, 0);"></div> -->
        <!-- <header-products :title="title" style="height: 10%; font-size: 30px; background-color:aquamarine" />

        <swiper :scrollbar="{
            draggable: true,
            snapOnRelease: true,
            scrollbarClickable: true
        }" :slidesPerView="3.5" :spaceBetween="15" :modules="modules" class="mySwiper">

            <swiper-slide v-for="(item) in videos" style="background-color: rgb(27, 149, 255);">
                <video-box :video="item" />
            </swiper-slide>
        </swiper> -->

    </div>
</template>

<style scoped lang="scss">
.swiper-scrollbar {
    width: 15px !important;
}

.swiper-scrollbar-drag {
    background-color: green !important;
}

.container {
    position: relative;
    // background-color: blueviolet;
    display: flex;
    flex-direction: column;
}


.swiper {
    width: 100%;
    // background-color: aqua;
      height: 70%;
      padding-bottom: 40px;
    //   box-sizing:border-box;

    &-slide {
        font-size: 18px;
        // background-color: var(--background-product);
        // background-color:rebeccapurple;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>