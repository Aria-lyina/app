<script setup>

import { onMounted, ref } from 'vue';
// @TODO import всегда сверху
//    @TODO defolt -> default
const props = defineProps({
    
    image:
    {   type:String,
        default:"/img/act1.jpg"
    },
    actionType:
    {
        type:String,
        default:'Акция'
    },
    condition:
    {
        type:String,
        default:'До 30 мая для заказов<br> от 30$'
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

onMounted(() =>
{
    // @TODO bad
    // let cond = document.getElementById('condition');
    // cond.innerHTML = props.condition;
    //Если нужно вставить html блок в используй v-html
})

/*
    @TODO
    fontSize:fontSizeLight, color:colorSizeLight - это нужно убрать, переведи в классы, а через прос ты можешь редактировать
    Например - type -> default, min, max etc. и менять класс type-default, type-min, type-max
 */
</script>


<template>
    <div class="container">
        <img :src="image" class="img"/>
        <!-- <div class="act">frebx</div> -->
        <div class="act" :style="{fontSize:fontSizeLight, color:colorSizeLight}">{{ actionType }}</div>
        <div class="name" :style="{fontSize:fontSizeLarge, color:colorSizeLarge}"><slot/></div>
        <div id="condition" :style="{fontSize:fontSizeLight, color:colorSizeLight}" v-html="condition"></div>
        <!--        @TODO NuxtLink -> nuxt-link-->
        <NuxtLink class="go-look" :to="link">Узнать больше &nbsp;&nbsp;<img class="icon" src="/img/icon/long-arrow.svg"></NuxtLink>
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
