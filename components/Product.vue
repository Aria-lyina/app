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
            <img class="image2"  :class="{ zoom: sizeImage > '200px'}" :src="item.image" :style="{height: sizeImage, maxWidth: sizeImage}">
            <img  v-if="item.statusIcon" :src="item.statusIcon" class="status"/>
        </div>

        <div class="container-text" :style="{fontSize: fontSizeLarge}">

            <div class="container-class" :style="{fontSize: fontSizeLight}" style="height: 15%;">{{ item.classification }}</div>
            <div style="height: 40%; display: flex; align-items: center;">{{ item.nameProduct }} </div>
            <div v-if="item.rating" style="height: 25%;" class="container-rating" :style="{fontSize: fontSizeLight}">
                <rating :stars="item.rating" color-active='#00ffff'/> &ensp; {{ item.countRevievs }}  отзывов</div>

            <div v-else style=""></div>
            <div class="container-price" style="height: 10%; margin-top: auto; ">{{ item.price }}&nbsp;{{ item.valuta }}
                <NuxtLink v-if="sizeImage > '250px'" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="/img/icon/long-arrow.svg"></NuxtLink>
            </div>
        </div>
<!-- <NuxtLink v-if="!item.rating" class="go-buy" :style="{fontSize: fontSizeLight}" :to="link">Купить&nbsp;&nbsp;<img class="icon-in-text2" src="img/icon/long-arrow.svg"></NuxtLink> -->
    </div>
</template>

<style lang="scss" scoped>

.container
    {
        box-sizing:border-box;
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        align-items:center;
        position: relative;
        width: 100%;
        height: 100%;

        // background-color:aqua;

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
            // width: 80%;
        }

        &-class
        {
            color: var(--light-color-text);
            text-transform: uppercase;
        }

        &-text
        {
            // background-color:violet;
            display: flex;
            flex-direction: column;
            // position: relative;
            // display:grid;
            // grid-template-rows: 1fr 3fr 1fr 1fr;
            // grid-row-gap: 10%;
            height: 33%;
            width: 80%;
        }
    }

    .status
        {
            position: absolute;
            top: 0%;
            left: 0%;

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
        height: 60%;
        width: 80%;
        display: flex;
        position: relative;
        // background-color:beige;
        &2
        {
            object-fit: contain;
            margin: auto;
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
