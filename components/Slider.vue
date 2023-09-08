<script setup>

const props = defineProps({
    title: String,
    products: Array,
    key: Number,
    link:
    {
        type: String,
        default: '/'
    },
    heightGrid:
    {
        type: String,
        default: '400px'
    },
    timerSlide:
    {
        type: String,
        default: '5000'
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
    countAction:
    {
        type: String,
        default: "400"
    }

})

import { onMounted, ref } from 'vue';

onMounted(() => 
{
    let slider = document.getElementById('slider');
    let height = slider.offsetHeight;

    let status = document.getElementById('status');
    let countCarts = props.products.length;
    console.log(countCarts);

    // console.log('VALUE!!');
    // console.log(status.innerHTML);

    let current = 0;
    let carts = [];
    carts.push("<span class='current-cart'>●</span>");
    for (let i = 1; i < countCarts; i++) carts.push('◯');
    status.innerHTML = carts.join(" ");

    // console.log('VALUE!!');
    // console.log(status.innerHTML);

    let action = document.getElementById('action');
    let nameAction = document.getElementById('name');
    let period = document.getElementById('period');
    let price = document.getElementById('price');

    let dRight = document.getElementById('content-right');
    dRight.style.transition = 'transform 1s ease';
    dRight.style.transformOrigin = `bottom left`;


    let dLeft = document.getElementById('content-left');
    dLeft.style.transition = 'transform 1s ease';
    dLeft.style.transformOrigin = `bottom right`;

    SetData();

    slider.addEventListener("scroll", () => {
        
        const scrolled = slider.scrollTop;

        let numberCart = Math.round(scrolled / height);

        if (numberCart != current) 
        {
            List(numberCart);
        }
    })
    
    
    function List(number) 
    {
            // console.log('Listing!')
            // console.log('old curr = ' + current)

            carts[current] = '◯';
            carts[number] = "<span class='current-cart'>●</span>";

            current = number;
            console.log('new curr = ' + current)

            status.innerHTML = carts.join(" ");
            AnimationText();
    }

    function SetData()
    {
        action.innerHTML=props.products[current].action;
        nameAction.innerHTML=props.products[current].nameAction;
        period.innerHTML="Период проведения акции:<br>"+props.products[current].period;
        price.innerHTML=props.products[current].price+"&ensp;"+props.products[current].valuta;
    }

    function AnimationText()
    {
        dLeft.style.transform = '';
        dLeft.style.transform += `rotate(${45}deg)`;
        dLeft.style.transform += `translateX(-500px)`;
        dLeft.style.transform += `translateY(500px)`;

        dRight.style.transform = '';
        dRight.style.transform += `rotate(${-45}deg)`;
        dRight.style.transform += `translateX(+500px)`;
        dRight.style.transform += `translateY(500px)`;

        setTimeout(() => {
                        // dLeft.style.top = props.products[current].topLeft;
                        // dRight.style.top = props.products[current].topRight;

                        dLeft.style.transform = '';
                        dRight.style.transform = '';
                        SetData();

                }, 1000);
    }

    setInterval(
            () => {
                console.log('TIMER '+props.timerSlide)
                console.log('curr '+current);
                if (current != countCarts-1) 
                {
                    console.log('tick1')
                    slider.scroll(0, height * (current + 1));

                }
                else {
                    console.log('tick2')
                    slider.scroll(0, 0);
                }
            },
            props.timerSlide
    );

});

</script>



<template>
    <div class="holster">

        <!-- <div class="status" id="status"><span style='color:red'>⬤</span> ◯ ◯ ◯ ◯ ◯ </div>● -->
        <!-- 
    :id="'star-'+i"
    -->
        
        <!-- 
        <div class="period">Период проведения акции:<br> с 29 мая 2022 по 18 июня 2022</div>
        <div class="price" id="action-">от 21 999 $</div> -->
        <div class="status" id="status"></div>
        <NuxtLink class="go-look" :to="link">Все акции ({{countAction }})&nbsp;&nbsp;<img class="icon" src="img/icon/long-arrow.svg"></NuxtLink>

        <div id="content-left">
                <div id="action" :style="{fontSize:fontSizeLight}"></div>
                <div id="name" :style="{fontSize:fontSizeLarge}" style="margin-top: 10%;"></div>
            </div>

            <div id="content-right">
                <div id="period" :style="{fontSize:fontSizeLight}"></div>
                <div id="price" :style="{fontSize:fontSizeLarge}" style="margin-top: 10%;"></div>
            </div>


        <div class="slider" id="slider" dir="ltr">

            <div v-for="(item, index) in products"  class="slide" :style="{backgroundColor:item.ColorSlide}">
                <img :src="item.image" :style="{height: item.sizeImage}">
            </div>

            <div style="background-color: #edfffd;"><img src="img/headphones_PNG7638.png"></div>
            <div style="background-color: #c4fff8;">2</div>
            <div style="background-color: #abffed;">3</div>
            <div style="background-color: #eeb6ff;">4</div>
            <div style="background-color: #ff579a;">5</div> -->
        </div>
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

        bottom: var(--margin-slider);
        right: var(--margin-slider);

        // background-color:aqua;
        // width: 300px;
        font-size: var(--fontsize-small-default);
    }
    .icon
    {
        height: 20px;
        width: auto;
    }
    .holster {
        height: 680px;
        width: 100%;
        display: flex;

        align-items: center;
        justify-content: space-between;

        flex-flow: column nowrap;
        font-family: monospace;
        background-color: aqua;
        margin: auto;
        position: relative;

        -webkit-user-select: none; /* для Safari */
        -moz-user-select: none; /* для Firefox */
        -ms-user-select: none; /* для IE и Edge */
        user-select: none;
        overflow: hidden;
    }

    #content-left
    {
        position: absolute;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        // background-color: blueviolet;
        // top: 35%;
        top: 50%;
        transform: translateY(-50%);

        left: var(--margin-slider);
        width: 370px;
    }

    #content-right
    {
        position: absolute;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        // background-color: blueviolet;
        top: 50%;
        transform: translateY(-50%);;

        right: var(--margin-slider);
        width: 370px;
        text-align: right;
    }

    .slider {
        // background-color: blueviolet;

        display: flex;
        overflow: auto;
        // outline: 1px dashed lightgray;
        flex: none;

        width: 100%;
        height: 100%;
        flex-flow: column nowrap;

        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        scroll-snap-type: y mandatory;

        &::-webkit-scrollbar 
        {
            height: 0px;
            width: 0px;
        }
    }

    .slide {

        display: flex;
        // text-align: center;

        justify-content:center;
        align-items: center;

        scroll-snap-align: center;
        // flex: none;
        // line-height: 256px;
        // font-size: 128px;

        width: 100%;
        height: 100%;
        background-color: rgb(229, 255, 250);
    }

    .status {
        position: absolute;
        bottom: var(--margin-slider);
        left: var(--margin-slider);
        font-size: 10px;
    }

    .current-cart {
        color: #001b5c;
        font-size: 10px;
        display: inline-block;
    }

    .action {
        position: absolute;
        font-size: 17px;
    }

    .name {
        position: absolute;
        top: 48%;
        left: var(--margin-slider);
        font-size: 40px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 400px;
        /* font-weight: bold; */
    }

    .period {
        position: absolute;
        top: 42%;
        right: var(--margin-slider);
        font-size: 17px;
        text-align: right;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .price {
        position: absolute;
        top: 55%;
        right: var(--margin-slider);
        font-size: 30px;
        text-align: right;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 500px;
        /* font-weight: bold; */
    }

    img {
        width: auto;
        height: 70%;
        // margin-top: 100px;
        /* background-color:aqua; */
        object-fit: contain;

    }

</style>