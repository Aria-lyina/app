<script setup>
    import 'swiper/css';
    import 'swiper/css/pagination';

    import Rating from '@/components/SupComp/Rating.vue';
    import Comment from '@/components/Comment.vue';
    import cross from '@/components/icons/cross.vue'; 

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';
    
    import Back from '@/components/SupComp/LinkBack.vue';
    import LinkGo from '@/components/SupComp/LinkGo.vue';

    const nameLink = "Мужские кроссовки Nike"
    const nameProduct = "Кроссовки Nike Air Jordan 1 Mid Green"

    const icRefresh = {
        // d: ["M 20 4 C 15.054545 4 11 8.0545455 11 13 L 11 35.585938 L 5.7070312 30.292969 L 4.2929688 31.707031 L 12 39.414062 L 19.707031 31.707031 L 18.292969 30.292969 L 13 35.585938 L 13 13 C 13 12.759091 13.01313 12.521884 13.037109 12.287109 C 13.396795 8.7654918 16.386364 6 20 6 L 30 6 L 30.5 6 L 30.5 4 L 30 4 L 20 4 z M 38 10.585938 L 30.292969 18.292969 L 31.707031 19.707031 L 37 14.414062 L 37 37 C 37 40.613636 34.234508 43.603205 30.712891 43.962891 C 30.478116 43.98687 30.240909 44 30 44 L 20 44 L 19.5 44 L 19.5 46 L 20 46 L 30 46 C 30.309091 46 30.614657 45.984029 30.916016 45.953125 C 35.436391 45.489569 39 41.636364 39 37 L 39 14.414062 L 44.292969 19.707031 L 45.707031 18.292969 L 38 10.585938 z"],
        d: ["M 20 3 C 14.486 3 10 7.486 10 13 L 10 33.171875 L 6.4140625 29.585938 A 2.0002 2.0002 0 0 0 4.9785156 28.980469 A 2.0002 2.0002 0 0 0 3.5859375 32.414062 L 10.585938 39.414062 A 2.0002 2.0002 0 0 0 13.414062 39.414062 L 20.414062 32.414062 A 2.0002 2.0002 0 1 0 17.585938 29.585938 L 14 33.171875 L 14 13 C 14 9.691 16.691 7 20 7 L 30.46875 7 L 30.734375 3 L 20 3 z M 37.970703 10 A 2.0002 2.0002 0 0 0 36.585938 10.585938 L 29.585938 17.585938 A 2.0002 2.0002 0 1 0 32.414062 20.414062 L 36 16.828125 L 36 37 C 36 40.309 33.309 43 30 43 L 19.509766 43 L 19.255859 47 L 30 47 C 35.514 47 40 42.514 40 37 L 40 16.828125 L 43.585938 20.414062 A 2.0002 2.0002 0 1 0 46.414062 17.585938 L 39.414062 10.585938 A 2.0002 2.0002 0 0 0 37.970703 10 z"],
        viewBox: "0 0 50 50",
    }

    const Like = ref(false);

    const availability = ref("Есть в наличии");

    const Size = ref(['41','41.5','42','43.5','43'])

    const selSize = ref('41');

    const description = "Кроссовки Nike Air Jordan 1 Mid созданы на основе первой модели AJ1 с дизайном, напоминающим фанатам оригинальной модели о пути бренда Jordan с 1985 года";

    const nameSeller = "Rozetka";

    const Logo = "/img/logo/rozetka-logo.png";

    const links = ['Всё о товаре','Характеристики','Отзывы(58)','Обзор и видео','Фото','Покупают вместе'];

    const delivery  = [
        {img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из наших магазинов", date: "Забрать с 4 июня с 12:00", price:"Бесплатно"},
        {img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Новой Почты", date: "Отправим завтра", price:"Бесплатно"},
        {img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Justin", date: "Отправим завтра", price:"Бесплатно"},
        {img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Украины", date: "Отправим завтра", price:"Бесплатно"},
        {img: "/img/logo/rozetka-logo-bw.png", name: "Курьер Новая почта", date: "Отправим завтра", price:"60 ₴"}
    ];

    const attributes = [
        {name: "Подошва", value: "Резина 100%"},
        {name: "Наружный материал", value: "Кожа 100%, Нейлон 100%"},
        {name: "Подкладка", value: "Полиэстер 100%"},
        {name: "Артикул", value: "123345673"},
    ];

    const zoom = ref(false);

    const show_delivery = ref(false);

    const pay = "Наличная, Картой онлайн, Google Play, Оплата через Masterpass, Безналичными для юридических лиц, Безналичными для физических лиц, PrivatPay, Кредит, Оплата частями";

    const exchange = "Обмен/возврат товара в течение 14 дней. Продавец гарантирует упаковку заказанного товара, которая обеспечит целостность и сохранность его товарного вида.";

</script>

<template>
<div class="container">


    <div class="delivery" v-if="show_delivery"> 
        
        <div class="delivery-space"  @click="show_delivery=false"/>

        
        <div class="delivery-content">
            <div class="div-exit">
                <button class="button-exit" @click="show_delivery = false">
                    <img class="icon-large" src="/img/icon/fi-rr-cross.svg"/>
                    <!-- <cross color="black" height="20px"/>  -->
                </button>
            </div>

            <div class="mid">
                <div class="top-text"> <div>Доставка в Одессу</div><LinkGo class="go-look" color="black" nameLink="Выбрать другой город"/></div>
                
                <div v-for="item in delivery" class="item fontSmall">
                    <div class="three" ><img class="icon-large" :src="item.img"/> {{ item.name }}:</div>
                    <div class="three" >{{ item.date }}</div>
                    <div class="three" >{{ item.price }}</div>
                </div>
                
                <div class="txt">
                    <div class="text">
                        <div>Оплата</div>  
                        <div>{{ pay }}</div>
                    </div>
                    
                    <div class="text">
                        <div>Гарантия</div>  
                        <div>{{ exchange }}</div>
                    </div>
                </div>


            </div>

        </div>
        
    </div>

    <div class="content-first">

        <div class="left">
            <div v-if="zoom" class="IsZoom-header">
                {{ nameProduct }}
                
                <div class="div-exit">
                <button class="button-exit" @click="zoom = false">
                    <img class="icon-large" src="/img/icon/fi-rr-cross.svg"/>
                </button>
            </div>
            </div>
            <swiper :pagination="true" :modules="modules" 
            @click="zoom = !zoom; console.log(zoom)" class="mySwiper" :class="{IsZoom: zoom}" >
                <swiper-slide v-for="i in 5"><img class="image2" src="/img/puma-rs-x3.png"/></swiper-slide>
            </swiper>
        </div>

        <div class="right">
            <Back :nameLink="nameLink" color="black"/>
            <div class="product-name">
                <div class="fontBigName text">{{ nameProduct }}</div>
                <div class="status">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon2" :viewBox="icRefresh.viewBox">
                        <path v-for="item in icRefresh.d" :d="item"/>  
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" @click="Like=!Like" :class="{IsLike: Like}" viewBox="0 0 50 50">
                        <path d="M43.94,27.63L24.99,46.58L6.04,27.63c-13.1-16.45,8.94-31.46,18.94-15.32C34.04-4.43,57.34,11.17,43.94,27.63z" />  
                    </svg>
                </div>
            </div>
            <div class="fontSmall ">
                {{ availability }}
            </div>

            <div class="short-info fontSmall">
                <div class="item">
                    Цвет
                </div>
                <div class="item">
                    Размер 
                    <div class="size">
                        <div class="btn-filtr grayDivBtn size-item" v-for="item in Size" @click="selSize = item" :class="{whiteDivBtn: item==selSize}">{{ item }} </div>
                    </div>
                </div>
                <div class="pay-info">
                    <div class="pay">
                        <div class="item" @click="show_delivery=true">
                            Доставка и оплата
                            <LinkGo link="" nameLink="" color="black"/>
                        </div>
                        <div class="seller">
                            Продавец товара:
                            <div class="seller-name">
                                {{ nameSeller }} <img class="icon-large" :src="Logo"/>
                            </div>
                        </div>
                    </div>

                    <div class="info">
                        {{ description }}
                    </div>

                </div>

            </div>

            <div class="to-shop">
                <div class="left2">
                    <div class="price">3 065 ₴</div>
                    <button class="btn-1">В корзину</button>
                </div>
                <div class="right2 fontSmall">
                    <div class="right2-1 two">
                        <div>
                            <span class="bold">от 468 ₴ / месяц </span>при покупке товара в кредит или оплате частями
                        </div> 
                    </div>
                    <div class="right2-2 two bold">Купить в кредит</div>
                </div>
            </div>

        </div>
        
    </div>

    <div class="link-line fontSmall">
        <div v-for="item in links" class="item">
            <div> {{ item }}</div>
            <div> {{ item }}</div>
        </div>
    </div>

    <div class="content-second">

        <div class="left">
            <div class="content">
                <div class="cont-img" v-for="i in 5">
                    <img class="image" src="/img/puma-rs-x3.png"/>
                </div>
            </div>
        </div>

        <div class="right">
                <div class="top-text"> <div>Характеристики</div>  <LinkGo class="go-look" color="black" nameLink="Смотреть все"/></div>

                <div class="attributs">
                    <div v-for="item in attributes" class="item fontSmall">
                        <div>{{ item.name }}:</div>
                        <div>{{ item.value }}</div>
                    </div>
                </div>

                <div class="text">
                    <div>Описание</div>  
                    <div>{{ description }}</div>
                </div>

                <div class="comments">
                    <div class="top-text"> 
                        <div>Отзывы 58</div>  
                        <div><rating class="rating" :stars="4" color-active='#00ffff'/></div>
                        <LinkGo class="go-look" color="black" nameLink="Смотреть все"/>
                    </div>

                    <Comment class="comment" v-for="i in 3"/>
                </div>


            </div>
        </div>
    <!-- <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper> -->

</div>
</template>

<style lang="scss" scoped>

.delivery
{
    position: fixed;

    bottom: 0;
    left: 0;

    // width: 100dvw;
    // height: 91vh;
    width: 100%;

    height: 100%;
    // z-index: 9;
    z-index: 12;
    background-color: #0000008f;
    display: flex;

    &-space
    {
        height: 100%;
        // background-color: #ff00008f;
        width: 49.5%;
    }

    &-content
    {
        // background-color: #ffffff;
        // padding-top: 9vh;

        background-color: #ffffff;
        height: 100%;
        // width: 710px;
        width: 50.5%;

        position: absolute;
        // display: flex;
        right: 0;

        .mid
        {
            position: relative;
            // display: flex;
            // background-color: #fff;

            margin-top: 5%;
            margin-right: 5%;
            margin-left: 5%;

            // width: 100%;

            // .top-text
            // {
            //     // background-color: blue;
            //     // width: 100%;
            // }

            .item 
            {
                height: 60px;
                border-bottom: 1px solid black;
                display: flex;
                justify-content: space-between;
                align-items: center;
                // background-color: aqua;

                .three
                {
                    // background-color: red;
                    &:nth-child(1) 
                    {
                        width: 45%;

                        // background: rgb(38, 0, 255);

                        display: flex;

                        img 
                        {
                            margin-right: 15px;
                        }
                        //align-content: center;
                        // text-align: center; 
                    }

                    &:nth-child(2) 
                    {
                        // background: rgb(174, 160, 255);
                        //align-content: center;
                        // text-align: center; 
                         width: 30%;

                    }

                    &:nth-child(3) 
                    {
                        // background: rgb(47, 255, 0);
                        //align-content: center;
                        width: 25%;
                        text-align: end; 
                    }
                }
            }

            .txt 
            {
                // background-color: aqua;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }


            .text 
            {
                min-height: 250px;
                // background-color: red;
                width: 48%;


                >div:first-child
                {
                    font-size: var(--fontsize-big-default);
                    display: flex;
                    align-items: center;
                    padding-bottom: 30px;
                    margin-top: 30px;
                    // background-color: violet;

                }

                >div
                {
                    font-size: var(--fontsize-small-default);
                    line-height: 1.5em;                
                }
            }

        }
        .div-exit
        {
            height: 9vh;
            // background-color: rgba(98, 255, 255, 0.257);
            position: relative;
            width: 100%;

            .button-exit
            {
                position: absolute;
                // background-color:rgba(255, 74, 74, 0.086);

                margin-right: 5%;
                // width: 30px;
                // height: 30px;
                // // display: flex;
                // // align-items:center;
                // // margin-right: 20px;

                // // top: 30px;
                // // right: 20px;

                // top: var(--marg-show-comp);
                // right: var(--marg-show-comp);

                // // right: var(--marg-hor-show-comp);

                // z-index: 13;
                bottom: 0;
                right: 0;
            }


        }
    }
}

.IsZoom 
{ 
    background-color: var(--background-product);

    position:fixed;

    bottom: 0;
    left: 0;
    // width: 100vw;
    // height: 100vh;

    // width: 100vw !important;
    // height: 91vh !important;
    
    z-index: 14;

    padding-top: 2%;

    // padding-bottom: -5%;

    box-sizing: border-box;

        // margin-left: -0.5%;

        //обязательные стили
        // position: fixed;
        // box-sizing:border-box;
        // display: flex;
        // flex-direction: row;
        // height: 100vh;
        // z-index: 9;

        // width: 100%;

        &-header
        {
            position: fixed;
            z-index: 16;
            width: 95%;
            top: 0;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            // background-color: red;
            height: 9vh;
        }
}

.comment 
{
    border-bottom: 1px solid black;
    padding-top: 20px;
    padding-bottom: 10px;

}
.rating 
{
    font-size: var(--fontsize-small-default);
    // background-color: green;
    width: 155px;
    display: flex;
    align-items: center;
    height: 100%;
}
.image
    {
        height: 85%;
        // width: 80%;
        display: flex;
        position: relative;
        object-fit: contain;
    }

.top-text
    {
        font-size: var(--fontsize-big-default);
        display: flex;
        // align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid black;
        justify-content: space-between;
        // background-color: red;

        .go-look
        {
            display: flex;
            align-items: center;
            // background-color: blueviolet;
            // margin-left: auto;
        }
    }

.content-second
{
    display: flex;
    width: 100%;
    position: relative;
    // height:1600px; 

    .left
    {
        // background-color: violet;
        // display: flex;
        // flex-wrap:wrap;
        // // align-items:flex-start;
        // justify-content: space-between;

        .content
        {
            display: flex;
            flex-wrap:wrap;
            margin-left: -47px;
            // align-items:flex-start;
            // justify-content: space-between;
        }
     
        .cont-img
        {
            width: 310px;
            height: 310px;

            // width: 210px;
            // height: 210px;

            background-color: var(--background-product);
            margin-bottom: 47px;
            margin-left: 47px;
            

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .right
    {
        padding-top: 50px;

        .attributs
        {
            min-height: 300px;
        }

        .text 
        {
            min-height: 250px;

            >div:first-child
            {
                font-size: var(--fontsize-big-default);
                display: flex;
                align-items: center;
                padding-bottom: 30px;
                margin-top: 30px;
            }

            >div
            {
                width: 50%;
                font-size: var(--fontsize-small-default);
            }
        }

        .item 
        {
            height: 60px;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // background-color: aqua;
        }
    }

}

.link-line
    {
        display: flex;
        background-color: var(--background-product);
        position: sticky;
        top:0px;
        margin-top: 35px;
        height: 45px;
        margin-bottom: 35px;
        width: 100%;

        .item
        {
            // background-color:red;
            padding-top: 3px;
            display: flex;
            align-items: center;
            padding-right: 20px;
            padding-left: 20px;
            justify-content: center;
            border-bottom: 2px solid var(--background-product);
            cursor: pointer;
            // transition: all 0.3s ease; 

            >div:first-child 
            {
                font-weight: bold;
                margin-left: 2px;
                opacity: 0;
            }

            >div:nth-child(2) 
            {
                position: absolute;            
            }

            &:hover 
            {
                border-color: var(--btn-color2);
                color:var(--link-color);

                >div:first-child 
                {
                    opacity: 1;
                }

                >div:nth-child(2) 
                {
                    opacity: 0;
                }
                
                // font-weight: bold;
                // transform: scale(0.9);
            }
        }

    }
.to-shop 
{
    // background-color:red;
    height: 140px;
    border-top: 1px solid black;
    justify-content: space-between;
    display: flex;
    position: absolute;
    width: 47%;
    bottom: 0;

    .left2
    {
        width: 46%;
        // background-color: wheat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        >button
        {
            width: 100%;
        }

        .price
        {
            padding: 25px 0px 25px 0px;
            font-size: var(--fontsize-big-default);
            font-weight: bold;
        }
    }
    .right2
    {
        width: 46%;
        // background-color: rgb(192, 179, 245);

        &-1 
        {
            height: 60%;
        }

        &-2
        {
            height: 40%;
        }

        .two 
        {
            display: flex;
            align-items: center;
        }

        .bold 
        {
            font-weight: bold;
        }

    }
}

.short-info
{
    margin-top: 50px;
    // background-color: white;

    .item 
    {
        height: 60px;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pay-info
    {
        display: flex;
        position: relative;
        justify-content: space-between;
        height: 120px;

        .seller
        {
            height: 60px;
            display: flex;
            align-items: center;
            color: var(--light-color-text);
            justify-content: space-between;

            &-name 
            {
                color: #000;
                display: flex;
                align-items: center; 
                width: 80px;
                justify-content: space-between;
            }
        }

        .pay
        {
            width: 46%;
        }

        .info
        {
            width: 46%;
            // height: 120px;
            display: flex;
            align-items: center;
            color: var(--light-color-text);
            line-height: 22px;


        }

    }
    .size
    {
        display: flex;
        flex-wrap: wrap;

        &-item 
        {
            height: 25px;
            min-width: 30px;
            margin-right: 5px;

            // .pay
            // {

            // }
        }
    }
}

.product 
{
    &-name
    {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 20px;

        // .text 
        // {
        //     background-color:red;
        // }

        .status
        {
            padding-top: 15px;
            position: relative;
            display: flex;
            width: 50px;
            flex-direction: row;
            // background-color: red;
            justify-content: space-between;

            .icon
            {
                height:20px;
                fill:none;
                stroke-width:4;
                stroke:black;

                &:hover
                {
                    stroke: none;
                    fill: var(--btn-color2-hover) !important;
                }
            }

            .icon2
            {
                height:20px;
                &:hover
                {
                    fill: var(--btn-color2-hover) !important;
                }
            }
        }

    }
}

.IsLike
{
    fill: var(--btn-color2) !important;
    stroke: none !important;
}

.back
{
    color: black;

    &-arr 
    {
        margin-right: 8px;
    }
}
.content-first 
{
    // background-color: violet;
    height: 680px;
    width: 100%;
    display: flex;
    position: relative;
}

.left 
{
    // background-color: blue;
    width: 49.5%;
    // width: 735px;

    // padding-right: 2%;
    // box-sizing: border-box;
    // display: flex;

}

.right 
{
    // background-color: aqua;
    width: 50.5%;
    padding-top: 35px;
    padding-left: 45px;
    box-sizing:border-box;
}

.container
{
    display: flex;
    // justify-content:flex-start;
    // justify-content: space-between;
    align-items:flex-start;
    position: relative;


    width: 100%;
    flex-direction: column;
    // background-color: rgb(255, 202, 202);

    // background-color: rgb(255, 238, 238);

}

.mySwiper {
  width: 100%;
  height: 100%;

  transition: transform 0.5s ease;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

//   background: red;
  background: var(--background-product);

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;


}

.swiper-slide img {

//   background-color: blue;
  display: block;
  height: 80%;
  max-width: 90%;
  object-fit: cover;
}


</style>