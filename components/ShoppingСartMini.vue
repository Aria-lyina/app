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

</script>

<template>
  <div class="container">
    
    <div class="header">
        <div class="header-text">
            <!-- <div class="header-name">Корзина</div>
            <div class="header-count">{{count()}}&nbsp;товаров</div> -->
            <span class="header-name">Товары в заказе</span>
            <span class="header-count">{{count()}}&nbsp;товаров</span>
        </div>
    </div>

    <div class="content" id="content">

        <div class="product" v-for="(item, index) in items" :key="item.title"
        :id="'product'+item.id">
            
            <div class="product-content">
            
                <!-- <div class="product-img-container">
                        <img class="product-img" :src="item.img">
                </div> -->

                <!-- <div style="background-color: aliceblue; width: 20%; height: 100%;">g</div> -->

                <div class="flex">
                    
                    <div class="product-img-container">
                        <img class="product-img" :src="item.img">
                    </div>

                    <div class="product-text">
                        <div class="product-text-name" :v-html="item.title">
                            <span :v-html="item.title"></span>
                            {{item.title}}
                        </div>
                        <div class="product-text-seller">
                            <span class="product-text-seller1">{{ item.count }} шт</span> 
                        </div>
                    </div> 
                </div>


                <div class="product-price">
                    {{item.price}}{{ valuta }}
                </div>

            </div>
        </div>
    </div>

    <div class="footer">
        <button class="footer-button">
            <img class="icon-in-text" src="/img/icon/arrow-2-2.svg">
            Редактировать заказ
        </button>
        
        <div class="footer-sum-price">
            <span class="product-text-seller1">
                Итого: &ensp;
            </span>
            <span class="footer-sum-price-pr">
                <!-- <div ref="price"/> -->
                {{price}} {{valuta}}
            </span>
        </div>
    </div>
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
    // height: 160px;
    border-bottom: 1px solid;

    // margin-top: var(--marg-show-comp);
    // margin-bottom: var(--marg-show-comp);

    // padding-top: var(--marg-item-comp);
    // padding-bottom: var(--marg-item-comp);

    padding-top: 25px;
    padding-bottom: 25px;

    // padding-top: var(--marg-show-comp);
    // padding-bottom: var(--marg-show-comp);

    position: relative;
    // background-color:rgb(225, 65, 209); 
    display: flex;
    align-items: center;

    &-price 
    {
        font-weight: bold;
        font-size: var(--fontsize-medium);
        
        // width: 18%;
        text-align: center;

        //new
        // width: 35%;
        // background-color:antiquewhite;
    }


    &-text 
    {
        // height: 100%;
        width:60%;
        // width:36.5%;

        // padding-left: 30px;


        padding-left: 4%;
        padding-top: 15px;
        padding-bottom: 15px;

        box-sizing:border-box;
        display: flex;
        // background-color:aqua;
        flex-direction: column;
        justify-content: space-between;

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
            // padding-top: 5px;

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
        // background-color:rgba(17, 0, 99, 0.793);
        // position: relative;
        width: 100%;
        // height: 110px;
        // height: 100%;

        // height: 50%;
        height: 120px;
        display: flex;
        align-items:center;
        justify-content: space-between;
    }

    &-img-container 
    {
        height: 119px;
        width: 119px;
        // width: 18.5%; 
        // height: 100%;

        min-width: 119px;

        // background-color: var(--background-product);
        // background-color:burlywood;
        display: flex;
        justify-content: center;
        align-items:center;
        // overflow: hidden;
    }

    &-img 
    {
        // height: 90px;
        height: 75%;
        // background-color: violet;
        // min-width: 50px;
        // height: 90px;
        // width: 90px;
    }
}

.style-slot
{
    z-index:13;
}
.container
{
    background-color:var(--background-product);

    box-sizing:border-box;

    padding-left: var(--marg-show-comp);
    padding-right: var(--marg-show-comp);
    // width: 51vw;
    // height: 100vh;
    // z-index:12;

    // top: 0;
    // right: 0;
    // position: fixed;
    // box-sizing:border-box;
    // min-width: 450px
    // float: right;
    width: 100%;
}

.header
{
    position: relative;
    // background-color:aliceblue;
    min-height: 80px;

    // height: 15%;

    display: flex;
    // justify-content: center;
    align-items:center;
    // box-sizing:border-box;

    padding-top: 10px;
    // padding-bottom: 10px;


    // overflow: auto;

    // margin-left: var(--marg-show-comp);
    // margin-right: var(--marg-show-comp);

    &-name 
    {
        font-size: var(--fontsize-big-default);
        // background-color: violet;
        width: auto;
    }

    &-count
    {
        font-size: var(--fontsize-small-default);
        color:var(--primary-color-text);
    }

    &-text 
    {
        display: flex;
        // background-color: red;
        justify-content: space-between;
        align-items:flex-end;
        width: 100%;
    }
}

.footer
{
    // background-color:var(--background-show-comp);
    // background-color: blue;

    display: flex;
    align-items:center;

    z-index: 12;
    bottom: 0px;
    height: 130px;
    width: 100%;

    justify-content: space-between;
    // overflow: auto;

    &-button 
    {
        // width: 220px;
        margin-right: 35px;
        // background-color:red;
    }

    &-sum-price-pr
    {
        font-weight: bold;
        font-size: var(--fontsize-default);
    }
    
}

.content
{
    position: relative;
    // background-color:rgb(255, 176, 176);
    height: 72%;
    // margin-bottom: 140px;

    // padding-left: var(--marg-show-comp);
    // padding-right: var(--marg-show-comp);

    // margin-left: var(--marg-show-comp);
    // margin-right: var(--marg-show-comp);

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

    // .product-text
    // {
    //     width:50%;
    // }

    .product-comp
    {
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
        width: 20%;
    }

    .product-price
    {
        min-width: 70px;
    }

    // .product-del, .product-counter, .product-price
    // {
    //     width: 110%;
    //     height: 33%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: flex-end;
    // }

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
        // background-color: red;

        &-sum-price
        {
            // width: 50%;
            text-align: end;
            margin-bottom: 15px;
            margin-right: 40px;
            // background-color: blue;
        }

        &-button 
        {
            margin-top: 40px;
            // height: px;
            // margin-bottom: 20px;
            // background-color: aqua;
        }
    }
}

@media screen and (max-width: 850px) 
{
    .container
    {
        // width: 70vw;
    }
 }
</style>