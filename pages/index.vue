<script setup>
import GridTovar from '@/components/GridTovar.vue';

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

    let image="img/headphones_PNG7638.png"
    let classification="Наушники" 
    let countRevievs=25 
    let rating=2 
    let nameProduct="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
    let price=2000 
    let valuta="р"
    let statusIcon="img/icon/star-2.svg"

    let items = [];
    let items2 = [];
    let items3 = [];
    let items4 = [];

    for(let i = 0; i < 5; i++) {
        items.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items2.push(new ProductItem(image, "img/icon/new-1.svg", classification, nameProduct, rating, price, countRevievs, valuta));
        items3.push(new ProductItem(image, "", classification, nameProduct, rating, price, countRevievs, valuta));

        items4.push(new ProductItem("img/asus.png", statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items4.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
    }    

</script>

<template>
    <!-- <h2>Welcome to Layouts example</h2> -->
    <grid-tovar class="tovar-carts" :products="items" :title="'Последние просмотренные товары'" height-grid="400px"/>
    <grid-tovar class="tovar-carts" :products="items2" :title="'Горячие новинки'" height-grid="400px"/>
    <grid-tovar class="tovar-carts" :products="items3" :title="'Чаще всего добавляют в список желаний'" height-grid="400px"/>
    <grid-tovar class="tovar-carts" :products="items4" :title="'Топ продаж'" height-grid="800px"/>
</template>
  
<style>

.tovar-carts
{
    margin-top: 30px;
    margin-bottom: 30px;
    /* background-color: blue; */
}
</style>