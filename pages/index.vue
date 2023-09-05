<script setup>
import GridTovar from '@/components/GridTovar.vue';
import ListTovar from '@/components/ListTovar.vue';
import ListTovarLarge from '@/components/ListTovarLarge.vue';
import Slider from '@/components/Slider.vue'; 
import Action from '@/components/Action.vue'; 


class ProductItem 
    {
        constructor(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta) {
            this.image = image;
            this.statusIcon = statusIcon;
            this.classification = classification;
            this.nameProduct = nameProduct;
            this.rating = rating;
            this.price = price;
            this.countRevievs = countRevievs;
            this.valuta = valuta;
        }
    }

class ProductItemSlide 
{
    constructor(image, sizeImage, ColorSlide, action, nameAction, period, price, valuta) 
    {
        this.image = image;
        this.sizeImage = sizeImage;
        this.ColorSlide = ColorSlide;
        this.action = action;
        this.nameAction = nameAction;
        this.price = price;
        this.period = period;
        this.valuta = valuta;
    }
}
    let image="img/headphones_PNG7638.png"
    let classification="Наушники" 
    let countRevievs=25 
    let rating=2 
    // let nameProduct="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
    let nameProduct="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
    let price=2000 
    let valuta="р"
    let statusIcon="img/icon/star-2.svg"

    let itemsSlide = [];

    itemsSlide.push(new ProductItemSlide('img/apple-iphone-11-green.png', '70%',
                                        'rgb(229, 255, 250)', 'Суперцена', 
                                        'Смартфоны Apple по суперцене',
                                        'с 29 мая 2022 по 18 июня 2022',
                                        'от 21 999', '₴'))

    itemsSlide.push(new ProductItemSlide('img/puma-rs-x3.png', '95%',
                                        'rgb(225, 233, 244)', 'Акция', 
                                        'Скидки на мужские кеды и кроссовки',
                                        'с 29 июля 2022 по 18 август 2022',
                                        'от 4 999', '₴'))       
                                        
    itemsSlide.push(new ProductItemSlide('img/apple-iphone-11-green.png', '70%',
                                        'rgb(255, 185, 255)', 'Суперцена', 
                                        'Смартфоны Apple по суперцене',
                                        'с 29 мая 2022 по 18 июня 2022',
                                        'от 21 999', '₴'))

    itemsSlide.push(new ProductItemSlide('img/puma-rs-x3.png', '95%',
                                        'rgb(224, 254, 250)', 'Акция', 
                                        'Скидки на мужские кеды и кроссовки',
                                        'с 29 июля 2022 по 18 август 2022',
                                        'от 4 999', '₴')) 


    let items = [];
    let items2 = [];
    let items3 = [];
    let items4 = [];
    let items5 = [];
    let items6 = [];

    for(let i = 0; i < 5; i++) {
        items.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items2.push(new ProductItem(image, "img/icon/new-1.svg", classification, nameProduct, rating, price, countRevievs, valuta));
        items3.push(new ProductItem(image, "", classification, nameProduct, rating, price, countRevievs, valuta));

        items4.push(new ProductItem("img/asus.png", statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items4.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        
        items5.push(new ProductItem("img/asus.png", "", classification, nameProduct, "", price, "", valuta));
        items5.push(new ProductItem(image, "", classification, nameProduct, "", price, "", valuta));

        items6.push(new ProductItem("img/Apple-iphone-se.png", "", 'Мобильные телефоны',
                                    "Apple iPhone 64GB", rating, '14 999', countRevievs, '₴'));

        items6.push(new ProductItem("img/totw_promo.png", "", 'Мобильные телефоны',
                                    "Apple iPhone 64GB", rating, '14 999', countRevievs, '₴'));
    }    

</script>

<template>
    <!-- <h2>Welcome to Layouts example</h2> -->

    <slider class="slider-elem" :products="itemsSlide" timer-slide="8000"/>
    <grid-tovar style="margin-top: 60px;" class="tovar-carts" :products="items" :title="'Последние просмотренные товары'" height-grid="400px"/>
    <list-tovar-large class="tovar-carts" :products="items6" :title="'Больше товаров для выбора'" height-grid="470px" width-item="800px" size-image="300px"/>
    <grid-tovar class="tovar-carts" :products="items2" :title="'Горячие новинки'" height-grid="400px"/>
    <action class="tovar-carts" image="img/act3.png" action-type="Акция" condition="До 30 мая для заказов<br> от 30$">Бесплатная доставка<br> в отделения укрпочты</action> 
    <grid-tovar class="tovar-carts" :products="items3" :title="'Чаще всего добавляют в список желаний'" height-grid="400px"/>
    <list-tovar class="tovar-carts" :products="items5" :title="'Только в Розетке'" height-grid="670px" width-item="400px" size-image="300px"/>
    <grid-tovar class="tovar-carts" :products="items4" :title="'Топ продаж'" height-grid="800px"/> 

</template>
  
<style>

.tovar-carts
{
    margin-top: 40px;
    margin-bottom: 40px;
    /* background-color: blue; */
}
</style>