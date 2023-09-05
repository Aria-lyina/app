<script setup>

const props = defineProps({
    image: 
    {   type:String,
        defolt:"img/act1.jpg"
    },
    actionType:
    {
        type:String,
        defolt:'Акция'
    },
    condition:
    {
        type:String,
        defolt:'До 30 мая для заказов<br> от 30$'
    },
    fontSizeLarge:
    {
        type: String,
        default: "40px"
    },
    fontSizeLight:
    {
        type: String,
        default: "17px"
    },
    colorSizeLarge:
    {
        type: String,
        default: "#ffffff"
    },
    colorSizeLight:
    {
        type: String,
        default: "#000000"
    },

})
import { onMounted, ref } from 'vue';

onMounted(() => 
{
    let cond = document.getElementById('condition');
    cond.innerHTML = props.condition;

})
</script>


<template>
    <div class="container">
        <img :src="image" class="img"/>
        <!-- <div class="act">frebx</div> -->
        <div class="act" :style="{fontSize:fontSizeLight, color:colorSizeLight}">{{ actionType }}</div>
        <div class="name" :style="{fontSize:fontSizeLarge, color:colorSizeLarge}"><slot/></div>

        <div id="condition" :style="{fontSize:fontSizeLight, color:colorSizeLight}"></div>

        <NuxtLink class="go-look" :to="link">Узнать больше &nbsp;&nbsp;<img class="icon" src="img/icon/long-arrow.svg"></NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
    .go-look
    {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        position: absolute;

        display: flex;
        align-items: center;
        // margin-left: auto;
        font-weight: lighter;
        color: var(--dark-color-text);
        font-size: var(--fontsize-small-default);
        bottom: var(--margin-slider);
        right: var(--margin-slider);

        // background-color:aqua;
        // width: 300px;
        // font-size: 10px;
    }
    .icon
    {
        height: 20px;
        width: auto;
    }
#condition
{
    position: absolute;
    right: var(--margin-slider);
    top: 50%;
    transform: translateY(-50%);
    text-align:right;
}
.name
{
    position: absolute;
    left: var(--margin-slider);
    top: 50%;
    transform: translateY(-50%);
}
.act
{
    position: absolute;
    left: var(--margin-slider);
    top: var(--margin-slider);
}
.container
{
    // background-color:aqua;
    position: relative;
    // height: 400px;
}
.img
{
    width: 100%;
    // height: 1000px;
}
</style>