<!-- <script setup>
 import Rating from '@/components/Rating.vue';
 defineProps({
  image: String,
  statusIcon: String,
  classification: String,
  name: String,
  rating: String,
  price: String,
  countRevievs: String,
  valuta: String
}) -->

<script setup>
 import Rating from '@/components/Rating.vue';
 defineProps({ 
    item: Object,
    fontSizeLarge:
    {
        type: String,
        default: "13px"
    },
    fontSizeLight:
    {
        type: String,
        default: "11px"
    },
    sizeImage:
    {
        type: String,
        default: "160px"
    },
    link:
    {
        type: String,
        default: "/"
    }
    })
</script>

<template>
    <div class="container">

        <div class="image">

            <img class="image2" :src="item.image" :style="{height: sizeImage, maxWidth: sizeImage}"> 
            <img  v-if="item.statusIcon" :src="item.statusIcon" class="status">

        </div>
    
        <div class="text" :style="{fontSize: fontSizeLarge}">

            <div class="class-container" :style="{fontSize: fontSizeLight}">{{ item.classification }}</div>
            <div style="display: flex; align-items: center;">
                <p style="margin: -5% 0px 0px 0px;">
                     {{ item.nameProduct }}
                </p>
            </div>
            <div v-if="item.rating" class="rating-container" :style="{fontSize: fontSizeLight}"><rating :stars="item.rating" color-active='#00ffff'/> &ensp; {{ item.countRevievs }}  отзывов</div>
            <div v-else style=""></div>
            <div class="price-container">{{ item.price }}&nbsp;{{ item.valuta }}
                <!-- <NuxtLink v-if="!item.rating" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="img/icon/long-arrow.svg"></NuxtLink> -->
                <NuxtLink v-if="sizeImage > '200px'" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="img/icon/long-arrow.svg"></NuxtLink>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .status
    {
        position: absolute;
        top: 0%;
        left: 0%;
        
        height: 25px;
        width: auto;
        // background-color:blue;
    }

    .text
    {
        display:grid;
        grid-template-rows: 1fr 2fr 1fr 1fr;
        grid-row-gap: 10%;
        // background-color:bisque;
        margin-top: 10%;
        height: 35%;
    }
    .class-container
        {
            color: var(--light-color-text);
            text-transform: uppercase;
            // font-variant: ;
        }

    .go-buy
    {
        display: flex;
        align-items: center;
        margin-left: auto;
        font-weight: lighter;
        color: var(--dark-color-text);
    }

    .price-container
    {
        font-weight: bold;
        display: flex;
        align-items: center
    }
    .rating-container
    {
        display: flex;
        // justify-content: center;
        align-items:center;
        height: 50%;
        color: var(--light-color-text);
    }

    .image
    {
        height: 60%;
        width: 100%;

        // max-height: 60%;

        display: flex;
        justify-content: center;
        position: relative;
        // background-color:aqua;
        margin-left: auto;
        margin-right: auto;
    }

    .image2
    {
        // width: 160px;
        // height: 160px;

        // background-color:blue; 
        margin: 10% 10% 10% 10%;

        width: 100%;
        height: 100;
        object-fit: contain;

    }
    .container
    {
        background-color:#f4f4f4;
        // border: medium dashed green;
        padding: 10% 10% 10% 10%;
        display: flex;
        flex-direction: column;
        // width: 200px;
    }

</style>
