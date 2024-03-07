<script setup>
import PathPage from '@/components/SupComp/PathPage.vue'; 
import filtr from '@/components/FiltrCategory/FiltrSection.vue'; 
import data from '@/src/getFilters.json';
import cross from '@/components/icons/cross.vue'; 
import view4 from '@/components/icons/view4by4.vue'; 
import view3 from '@/components/icons/view3by3.vue'; 
import line3 from '@/components/icons/line3.vue'; 

// import ProductLine from '@/components/ProductLine.vue';

import ProductGrid from '@/components/ProductGrid.vue';




const items = data.data.options;

// const selected = ref(['Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"']);

const selected = ref(['Apple', 'Samsung','6.5" - 6.9"']);

const state = ref(1);

const pathTest = 
    {
        path: [{link:"/", name:"Одежда и обувь"},{link:"/", name:"Обувь"},{link:"/", name:"Мужская обувь"}],
        // viewBox: "0 0 24 24",
    }

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

    let image="/img/headphones_PNG7638.png"
    let classification="Наушники" 
    let countRevievs=25 
    let rating=2 
    // let nameProduct="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
    let nameProduct="HayuHnKM HyperX Cloud Core (KHX-HSCC-BK)"
    let price=2000 
    let valuta="р"
    let statusIcon="/img/icon/star-2.svg"

    let items2 = [];

    for(let i = 0; i < 5; i++) {
        items2.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items2.push(new ProductItem(image, "/img/icon/new-1.svg", classification, nameProduct, rating, price, countRevievs, valuta));
        items2.push(new ProductItem(image, "", classification, nameProduct, rating, price, countRevievs, valuta));

        items2.push(new ProductItem("/img/asus.png", statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        items2.push(new ProductItem(image, statusIcon, classification, nameProduct, rating, price, countRevievs, valuta));
        
        items2.push(new ProductItem("/img/asus.png", "", classification, nameProduct, "", price, "", valuta));
        items2.push(new ProductItem(image, "", classification, nameProduct, "", price, "", valuta));

        items2.push(new ProductItem("/img/Apple-iphone-se.png", "", 'Мобильные телефоны',
                                    "Apple iPhone SE 64GB", rating, '14 999', countRevievs, '₴'));

        items2.push(new ProductItem("/img/totw_promo.png", "", 'Мобильные телефоны',
                                    "Apple iPhone SE 64GB", rating, '14 999', countRevievs, '₴'));
    }    





</script>

<template>

    <div class="content">
        <div class="header-container">
            <div class="header-content">
                <div class="header-text">Мужская обувь</div>
                <path-page :path-props="pathTest"/>
            </div>
        </div>
        <div class="content-data">

            <div class="left-container">
                <filtr v-for="(item, index) in items" :key="index" :Data="item"/>
            </div>

            <div class="right-container">

                <div class="param-line">
                    <div v-if="selected.length != 0" class="filtrs">
                        <div class="filtrs-counter btn-filtr sel-fil">Выбрано хз товаров </div>
                        <div class="btn-filtr whiteDivBtn sel-fil">Сбросить </div>
                        <div class="btn-filtr grayDivBtn sel-fil" v-for="item in selected">{{ item }} <cross class="cross" color="black"/> </div>
                    </div>
           
                    <!-- <div>
                        <div v-if="selected.length != 0" class="tile">
                            <div class="item">Выбрано хз товаров </div>
                            <div class="item">Сбросить </div>
                            <div class="item" v-for="item in selected">{{ item }} <cross class="cross" color="black"/> </div>
                        </div>
                    </div> -->


                    <div class="sort">
                        <div>
                            <select class="selection" name="sort" id="sort">
                                <option value="rating">Сортировать по рейтингу</option>
                                <option value="novelties">Новинки</option>
                                <option value="increase">От дешевых к дорогим</option>
                                <option value="reduction">От дорогих к дешевым</option>
                            </select>
                        </div>
 
                        <div class="btn-view" :class="{select: state==1}" @click="state=1" ><view3/></div>
                        <div class="btn-view" :class="{select: state==2}" @click="state=2"><view4/></div>
                        <div class="btn-view" :class="{select: state==3}" @click="state=3"><line3/></div>


                        <!-- <view4/> -->
                    </div>               
                </div>
                
                <!-- <product-line class="tovar-carts" :products="items2" :title="''" height-grid="800px"/>  -->
                <product-grid :products="items2"/> 


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.tile 
{
    .item 
    {
        background-color: var(--background-product);
       
        min-width: 40px;

        height: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: var(--fontsize-small-default);
        padding-left:var(--pad-item-tile);
        padding-right: var(--pad-item-tile);
        margin-right: var(--marg-item-tile);
        // margin-bottom: var(--marg-item-tile);

        border: 1px solid var(--background-product);

        &:hover 
        {
            background-color: var(--btn-color1-hover);
        }
    }

    // display: inline-block;
    display: flex;
    flex-wrap: wrap;
    padding-top: var(--marg-item-tile);

}

.sel-fil
{
    border-radius: 3px;

    margin-bottom: 5px;
    margin-top: 5px;

    // max-width: 80px;
}

.cross 
{
    margin-left: 10px;
    margin-right: 4px;

    // &>svg
    // {
    //     fill: red;
    //     height: 10px;
    // }

}
    .param-line
    {
        background-color:rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;

        .filtrs
        {
            // background-color: red;
            // display: flex;
            // display: inline-block;

            display: flex;
            flex-wrap: wrap;
            width: 75%;

            &-counter 
            {
                // background-color: aqua;
                padding-left: 0;
            }
        }
        .sort 
        {
            display: flex;
            
            // background-color: aqua;

            align-items: center;

            .selection
            {
                border: 0;
                background-color: none;
                margin-right: 15px;
            }

            .btn-view
            {
                display: flex;
                align-items: center;
                height: 100%;
                padding-left: 10px;

                >svg
                {
                    fill:var(--primary-color-text);
                    cursor: pointer;

                }
            }

            .select 
            {
                >svg
                {
                    fill:var(--btn-color2);
                }
            }
        }
    }

    .content 
    {
        width: 100%;
        // height: 900px;
        &-data 
        {
            display: flex;
            justify-content: space-between;
        }
    }

    .header 
    {
        &-container
        {
            // background-color:aqua;
            height: 130px;
            width: 100%;
            display: flex;
            align-items:center;
            
            box-sizing:border-box;
            padding-top: 12px;

        }

        &-content 
        {
            width: 100%;
            // background-color:red;
            display: flex;
            justify-content: space-between;
            align-items:flex-end;
        }


        &-text 
        {
            font-size: 30px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    .left
    {
        &-container
        {
            // background-color:violet;
            width: 18%;
            min-width: 200px;
            // height: 1800px;
            // padding-right: 20px;
            margin-right: 25px;
            border-top: 1px solid;
        }
    }

    .right 
    {
        &-container
        {
            // background-color:lightblue;
            width: 79%;
            height: auto;
            box-sizing:border-box;
            // padding-left: 15px;

            // width: auto;
            // height: 800px;
            border-top: 1px solid;

        }
    }

</style>