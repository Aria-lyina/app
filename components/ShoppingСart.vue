<script setup>

import data from '@/src/shops.json';

const items = data.data;
const valuta = data.valuta;

const count_price = () =>
{
    let sum = 0;

    console.log(valuta);

    if(items!=undefined)
    for (const key in items) {
        if (Object.hasOwnProperty.call(items, key)) 
        {
            const element = items[key];

            sum+=element.count*element.price.replace(/\s/g, "");
        }
    }
    return sum;
}

const count = ()=>
{
    let propCount = 0;
    console.log(propCount);
    for (const key in items) {
        if (items.hasOwnProperty(key)){
            propCount += 1;
        }
    }
    // console.log(propCount);
    return propCount;
}

const price = ref(count_price());


const DecProduct = (index) => 
{ 
    if(items[index].count!=1&&items[index].count!=undefined)
    {
        // alert(index);
        // alert(items[index].count);
        items[index].count-=1;
        // alert(items[index].count);

        let c = document.getElementById('count'+index);
        c.innerHTML = items[index].count;
        // this.items[index].count=10;
    }
    price.value = count_price();
};

const DelProduct = (index) => 
{ 
    var parent = document.getElementById('content');
    var child = document.getElementById('product'+index);
    parent.removeChild(child);
    delete items[index];

    console.log(count);
    price.value = count_price();
};

const IncProduct = (index) => 
{ 
    if(items[index].count!=undefined)
    {
        // alert(index);
        // alert(items[index].count);
        items[index].count+=1;
        // alert(items[index].count);

        let c = document.getElementById('count'+index);
        c.innerHTML = items[index].count;
        // this.items[index].count=10;
    }
    price.value = count_price();
};



// onMounted(() => {
// //     console.log(price);
// //     price.value = count_price();
// // })


</script>

<template>
  <div class="container">
    
    <div class="header">
        <div class="header-text">
            <!-- <div class="header-name">Корзина</div>
            <div class="header-count">{{count()}}&nbsp;товаров</div> -->
            <span class="header-name">Корзина&emsp;&emsp;</span>
            <span class="header-count">{{count()}}&nbsp;товаров</span>
        </div>
    </div>
    <div class="content" id="content">

        <div class="product" v-for="(item, index) in items" :key="item.title"
        :id="'product'+item.id">
            
            <div class="product-content">
            
            <div class="product-img-container">
                <img class="product-img" :src="item.img">
            </div>

             <div class="product-text">
                <div class="product-text-name" :v-html="item.title">
                    <span :v-html="item.title"></span>
                    {{item.title}}
                    </div>
                    <div class="product-text-seller">
                        <span class="product-text-seller1">Продавец:&emsp;</span> 
                        <span class="product-text-seller2">{{item.seller_title}}&ensp;</span> 
                        <img class="icon-large ic_" :src="item.seller_logo">
                    </div>
                </div> 


                <div class="product-comp">

                    <div class="product-counter">
                        <div class="product-counter-btns">
                            <button class="product-counter-btn" 
                            @click="DecProduct(index)" >–</button>
                            <span :id="'count'+index">
                                {{ item.count }}
                            </span>
                            <button class="product-counter-btn"
                            @click="IncProduct(index)" >+</button>
                        </div>

                    </div>

                    <div class="product-price">
                        {{item.price}}{{ valuta }}
                    </div>

                    <div class="product-del">
                    <div class="product-delete">
                        <button class="product-delete-btn" @click="DelProduct(index)">
                            <img class="icon-in-text2 ic_1" src="img/icon/fi-rr-cross.svg"/>
                        </button>
                    </div>
                    </div>

                </div>

                <!-- <div class="product-counter">
                    <div class="product-counter-btns">
                        <button class="product-counter-btn" 
                        @click="DecProduct(index)" >–</button>
                        <span :id="'count'+index">
                            {{ item.count }}
                        </span>
                        <button class="product-counter-btn"
                        @click="IncProduct(index)" >+</button>
                    </div>

                </div> -->

                <!-- <div class="product-price">
                    {{item.price}}{{ valuta }}
                </div> -->
<!-- 
                <div class="product-delete">
                    <button class="product-delete-btn" @click="DelProduct(index)">
                        <img class="icon-in-text2" src="img/icon/fi-rr-cross.svg"/>
                    </button>
                </div> -->


                <!-- <img class="product-img" src="img/puma-rs-x3.png"> -->
            </div>
        </div>
    
    </div>
    <div class="footer">
        <div class="footer-sum-price">
            <span class="product-text-seller1">
                Итого: &ensp;
            </span>
            <span class="footer-sum-price-pr">
                <!-- <div ref="price"/> -->
                {{price}} {{valuta}}
            </span>
        </div>
        <button class="btn-1 footer-button">Оформить заказ</button>
    </div>
    <!-- <slot class="style-slot"></slot> -->
    <slot/>
  </div>
</template>

<style scoped lang="scss">


.ic_
{
    position: absolute;
    bottom: 0px;

    &1 
    {
        margin-top: 4px;
    }
}
.product
{
    box-sizing:border-box;
    height: 160px;
    border-bottom: 1px solid;

    // background-color:aquamarine; 
    display: flex;
    align-items: center;

    &-comp 
    {
        display: flex;
        // justify-content: center;
        align-items:center;
        // background-color: rgb(255, 173, 173);
        position: relative;
        width:45%;
    }


    &-del
    {
        width:17%;
        // background-color: rgb(173, 184, 255);
    }


    &-delete 
    {
        // width: 5.5%;
        width: 30px;
        height: 30px;
        // background-color:red;
        position: relative;
        display: flex;
        justify-content: center;
        float: right;
        // align-items:center;

        &-btn 
        {
            // position: fixed;
            top:0;
            margin-left: auto;
            border-radius: 50%;
            background-color:var(--background-product);
            width: 30px;
            height: 30px;
        }
    }

    &-price 
    {
        font-weight: bold;
        font-size: var(--fontsize-medium);
        
        // width: 18%;
        text-align: center;

        //new
        width: 35%;
        // background-color:antiquewhite;
    }

    &-counter
    {
        // background-color:aliceblue;
        font-size: var(--fontsize-small-default);
        // width: 18%;
        display: flex;
        justify-content: center;
        align-items:center;
        text-align: center;
        // background-color:rgb(4, 138, 255);

        //new
        width: 48%;
        &-btns 
        {
            // background-color:rgb(4, 138, 255);
            border-bottom: 1px solid;
            font-size: var(--fontsize-small-default);
        }

        &-btn 
        {
            font-family: 'Courier New', Courier, monospace;
            font-size: var(--fontsize-default);
            padding-right: 9px;
            padding-left: 9px;
        }
    }
    &-text 
    {
        height: 100%;
        // width:35%;
        width:36.5%;

        // padding-left: 30px;
        padding-left: 4%;
        padding-top: 15px;
        padding-bottom: 15px;

        box-sizing:border-box;
        display: flex;
        // background-color:aqua;
        flex-direction: column;

        &-name 
        {
            // font-size: var(--fontsize-medium);
            font-size: var(--fontsize-small-default);
            line-height: 1.5;
        }

        &-seller 
        {
            // background-color:rgb(207, 255, 255);
            font-size: var(--fontsize-medium);
            margin-top: auto;
            position: relative;

            &1
            {
                color: var(--primary-color-text);
                font-size: var(--fontsize-small-default);
            }

            &2
            {
                // color: var(--primary-color-text);
                font-size: var(--fontsize-small-default);
            }
        }

    }

    &-content
    {
        // background-color:rgba(189, 176, 255, 0.793);
        position: relative;
        width: 100%;
        // height: 110px;
        // height: 80%;

        height: 75%;
        display: flex;
        align-items:center;
    }

    &-img-container 
    {
        height: 119px;
        width: 119px;
        // width: 18.5%; 
        // height: 100%;

        min-width: 70px;

        background-color: var(--background-product);
        display: flex;
        justify-content: center;
        align-items:center;
        // overflow: hidden;
    }

    &-img 
    {
        // height: 90px;
        height: 75%;
        // min-width: 50px;
    }
}

.style-slot
{
    z-index:13;
}
.container
{
    background-color:var(--background-show-comp);

    width: 51vw;
    height: 100vh;
    z-index:12;

    top: 0;
    right: 0;
    position: fixed;
    box-sizing:border-box;
    min-width: 450px
    // float: right;
}

.header
{
    position: relative;
    background-color:var(--background-show-comp);
    
    min-height: 70px;

    height: 14%;

    display: flex;
    // justify-content: center;
    align-items:center;
    box-sizing:border-box;

    padding-top: 15px;
    padding-left: var(--marg-show-comp);
    padding-right: var(--marg-show-comp);
    // overflow: auto;

    // margin-left: var(--marg-show-comp);
    // margin-right: var(--marg-show-comp);

    &-name 
    {
        font-size: var(--fontsize-big-default);
        width: 145px;
    }

    &-count
    {
        font-size: var(--fontsize-small-default);
        color:var(--primary-color-text);
    }
}

.footer
{
    position: absolute;
    background-color:var(--background-show-comp);

    display: flex;
    align-items:center;

    z-index: 12;
    bottom: 0px;
    height: 130px;
    width: 100%;

    justify-content: flex-end;
    // overflow: auto;

    &-button 
    {
        width: 220px;
        margin-right: 35px;
    }

    &-sum-price
    {
       width: 23%;
        &-pr
        {
            font-weight: bold;
            font-size: var(--fontsize-default);
        }
    }
}

.content
{
    position: relative;
    // background-color:rgb(255, 176, 176);
    height: 72%;
    margin-bottom: 140px;

    // padding-left: var(--marg-show-comp);
    // padding-right: var(--marg-show-comp);

    margin-left: var(--marg-show-comp);
    margin-right: var(--marg-show-comp);

    // padding-bottom: 80px;
    // margin-bottom: 80px;

    border-top: 1px solid;
    overflow: auto;
}

.content::-webkit-scrollbar 
{
    // margin-right: -30px;
    display: none;
}

@media screen and (max-height: 550px) {
    .content {
        height: 60%;
    }
}

@media screen and (max-width: 950px) {
    .product {
        height: 200px;
    }

    // .product-img
    // {
    //     height: 50%;
    // }

    .product-text
    {
        width:50%;
    }

    .product-comp
    {
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
        width: 20%;
    }

    .product-del, .product-counter, .product-price
    {
        width: 110%;
        height: 33%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .footer-button
    {
        width: 180px;
    }
}

@media screen and (max-width: 1200px) 
{
    .footer
    {
        flex-direction: column;
        align-items: flex-end;

        &-sum-price
        {
            width: 50%;
            text-align: end;
            margin-bottom: 15px;
            margin-right: 40px;
        }

        &-button 
        {
            height: 55px;
            margin-bottom: 20px;
        }
    }
}

@media screen and (max-width: 850px) 
{
    .container
    {
        width: 70vw;
    }
 }
</style>