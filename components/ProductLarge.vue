<script setup>
 import Rating from '@/components/SupComp/Rating.vue';
 defineProps({
    item: Object,
    fontSizeLarge:
    {
        type: String,
        default: "45px"
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

            <img class="image2 zoom" :src="item.image" :style="{height: sizeImage, maxWidth: sizeImage}"> 
            <img  v-if="item.statusIcon" :src="item.statusIcon" class="status">

        </div>

        <div class="container-text">

            <div class="container-class" :style="{fontSize: fontSizeLight}">{{ item.classification }}</div>
            <div style="display: flex; align-items: center;">
                <p style="margin: -5% 0px 0px 0px;" :style="{fontSize: fontSizeLarge}">
                     {{ item.nameProduct }}
                </p>
            </div>
            <div v-if="item.rating" class="container-rating" :style="{fontSize: fontSizeLight}"><rating :stars="item.rating" color-active='#00ffff'/> &ensp; {{ item.countRevievs }}  отзывов</div>
            <div v-else style=""></div>
            <div class="container-price" style="font-size: 20px;">{{ item.price }}&nbsp;{{ item.valuta }}
                <!-- <NuxtLink v-if="!item.rating" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="/img/icon/long-arrow.svg"></NuxtLink> -->
                <NuxtLink v-if="sizeImage > '200px'" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="/img/icon/long-arrow.svg"></NuxtLink>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .status
    {
        position: absolute;
        top: 10%;
        left: 10%;
        
        height: 30px;
        width: auto;
    }

    .go-buy
    {
        display: flex;
        align-items: center;
        margin-left: auto;
        font-weight: lighter;
        color: var(--dark-color-text);
    }

    .image
    {
        height: 100%;
        width: 50%;
        display: flex;
        position: relative;
        
        &2
        {
            object-fit: contain;
            margin: auto;
        }
    }

    .container
    {
        display: flex;
        flex-direction: row;
        align-items:center;

        width: 100%;
        height: 100%;

        &-rating
        {
            display: flex;
            align-items:center;
            height: 50%;
            color: var(--light-color-text);
        }

        &-price
        {
            font-weight: bold;
            display: flex;
            align-items: center;
            width: 80%;
        }

        &-class
        {
            color: var(--light-color-text);
            text-transform: uppercase;
        }

        &-text
        {
            display:grid;
            grid-template-rows: 1fr 2fr 2fr 1fr;
            grid-row-gap: 10%;
            height: 55%;
            width: 37%;
            margin-left: 3%;
        }
    }

    .zoom
    {
        transition: transform 0.5s;
        &:hover 
        {
             transform: scale(1.1);
        }
    }

</style>
