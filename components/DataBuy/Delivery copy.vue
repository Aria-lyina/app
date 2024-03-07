<script setup>

import mapImg from '@/components/icons/map.vue';


onMounted(()=>
{
    var items = document.getElementsByClassName("item");

    for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        for (var j = 0; j < items.length; j++) {
        items[j].classList.remove("selected");
        }
        this.classList.add("selected");
    });
    }
})

const delivery  = [
        {key:"dev1", img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из наших магазинов", date: "Забрать с 4 июня с 12:00", price:"Бесплатно"},
        {key:"dev2",img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Новой Почты", date: "Отправим завтра", price:"Бесплатно"},
        {key:"dev3",img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Justin", date: "Отправим завтра", price:"Бесплатно"},
        {key:"dev4",img: "/img/logo/rozetka-logo-bw.png", name: "Самовывоз из Украины", date: "Отправим завтра", price:"Бесплатно"},
        {key:"dev5",img: "/img/logo/rozetka-logo-bw.png", name: "Курьер Новая почта", date: "Отправим завтра", price:"60 ₴"}
    ];

</script>

<template>
    <!-- <div>
        <h2>Способ доставки</h2>

    </div> -->
    <h2>Способ доставки</h2>

    <div class="field">


        <div class="radio">

            <div class="item" v-for="deliverer in delivery">

                <label :for="deliverer.key" class="marg"></label>

                <input type="radio" :id="deliverer.key" name="delivery" checked :value="deliverer.key" />

                <label :for="deliverer.key">
                    <div class="content-list">
                    <div>
                        <img class="icon-large" :src="deliverer.img"/>    
                        {{ deliverer.name }}
                    </div>
                    <div>{{ deliverer.date }}</div>
                    <div style="margin-left: auto">{{ deliverer.price }}</div>
                </div>
                </label>


            
                <!-- <label class="content-list" :for="deliverer.key">
                    <div>
                        <img class="icon-large" :src="deliverer.img"/>    
                        {{ deliverer.name }}
                    </div>
                    <div>{{ deliverer.date }}</div>
                    <div style="margin-left: auto">{{ deliverer.price }}</div>

                </label> -->

            </div>
        </div>

    </div>


    <div class="field">

        <div class="bot1">

            <label for="selection" class="font12">Выберете магазин</label>

            <div>
                <select class="selection" name="shop" id="shop">
                    <option value="rating">Mara MH N°1, nep. CeMacopHbIn, A. 4T</option>
                    <option value="novelties">Новинки</option>
                    <option value="increase">От дешевых к дорогим</option>
                    <option value="reduction">От дорогих к дешевым</option>
                </select>
            </div>

        </div>

        <div class="fontSmall fontLightGrey flex bot2">
            График работы отделения: Пн-Вс:10:00-21:00
        </div>

        <div class="fontSmall flex FlexCenter bot3"> 
            <mapImg height="20px" color="black"/>
            Карта
        </div>
            <!-- <input type="text" placeholder="Город" id="city" name="city"> -->
            
    </div>
    <!-- <div class="field checkboxSt">
        <input type="checkbox" :id="IsCall" 
        :name="IsCall"/>
        <label class="checkboxSt-lbl" :for="IsCall">  Не перезванивайте мне, я уверен в заказе  </label>
    </div> -->

    <!-- <div class="fields">
        <input type="text" class="field" placeholder="Электронная почта или телефон" id="login" name="login">
        <div class="field-ident"/>
        <input type="text" class="field" placeholder="Пароль" id="password" name="password">
    </div> -->

</template>

<style src="@/assets/radioButton.scss"></style>

<style lang="scss" scoped>


.bot 
{
    &1
    {
        width: 50%;
    }

    &2
    {
        width: 35%;
        justify-content: flex-end;
        padding-left: 15px;
    }

    &3
    {
        width: 10%;
        justify-content: flex-end;
        padding-left: 15px;

        svg
        {
            margin-right: 10px;
        }
    }
}
.selection
{
    border: 0;
    background-color: none;
    width: 100%;
    // padding-left: -10px !important;
    // margin:0px;
    margin-top: 15px;
    height: 40px;
    // background-color: red;
    // border-bottom: 1.5px solid var(--btn-color2);
    border-bottom: 1.5px solid black;
    font-size: var(--fontsize-small-default);
}

.item {
    background-color: var(--background-product);
    border: 1.5px solid var(--background-product);
//   border: 1.5px solid var(--btn-color2);
    box-sizing: border-box;
    height: 60px;
    // margin-bottom: 15px;
    margin-top: 20px;
    border-radius: 2px;
    //   display: flex;
    //   align-items: center;
    // transition-duration: 0.3s;
    transition-duration: 0.8s;
    // transition-timing-function: ease;

    // transition: transform 2s ease;

    &:hover 
    {
        background-color: var(--btn-color1-hover);
    }
}

.item.selected {
  background-color: var(--background-show-comp);
  border: 1.5px solid var(--btn-color2);
//   transition-duration: 0.0s;

}

.marg 
{
    width: 20px;
}

.content-list
{
// >label 
    // {
        margin-left: 15px;
        background-color: aqua;
        // display: flex;
        // align-items: center;
        width: 100%;
        height: 100%;
        // justify-content: space-between;

        display: grid;
        grid-template-columns: 3fr 2fr 1fr;
        // grid-template-rows: auto;

        // grid-auto-rows: minmax(100px, auto);

        >div, img 
        {
            margin-right: 15px;
            display: flex;
            align-items: center;
        }
    // }
}


.radio 
{
    display: flex;
    flex-direction: column;
    // background-color: red;
    width: 100%;
    // height: 70%;
    align-items: center;
    

    >div
    {
        // margin-right: 30px;
        // background-color: aqua;
        display: flex;
        align-items: center;
        width: 100%;

        
    }

}
.field
{
    // background-color: rgb(118, 218, 255); 
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 25px;
    align-items: center;
    // width: 0%;
    // box-sizing: border-box;

    // >div
    // {
    //     width: 48%;
    //     // height: 250px;
    //     // background-color: violet;
    // }
}

</style>