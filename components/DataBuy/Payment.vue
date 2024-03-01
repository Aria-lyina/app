<script setup>

import mapImg from '@/components/icons/map.vue';


const pays  = [
        {key:"pay1", img: "/img/logo/rozetka-logo-bw.png", name: "Оплатить при получении"},
        {key:"pay2",img: "/img/logo/rozetka-logo-bw.png", name: "Оплатить картой"},
        {key:"pay3",img: "/img/logo/rozetka-logo-bw.png", name: "Google Pay"},
        {key:"pay4",img: "/img/logo/rozetka-logo-bw.png", name: "Безналичными"},
        {key:"pay5",img: "/img/logo/rozetka-logo-bw.png", name: "Оплата частями"},
        {key:"pay6",img: "/img/logo/rozetka-logo-bw.png", name: "Кредит"}
    ];

</script>

<template>

    <div>
        <h2>Способ оплаты</h2>

        <div class="field">
            <div class="radio">
                <div class="item" v-for="(pay, index) in pays">
                    <label :for="pay.key" class="radio-label label-struct">      
                        
                        <input type="radio" :id="pay.key" name="delivery" :checked="index === 0" :value="pay.key" />
                        <img class="icon-large" :src="pay.img"/>    
                        {{ pay.name }}

                    </label>
                </div>
            </div>
        </div>
    </div>

</template>

<style src="@/assets/radioButton.scss"></style>

<style lang="scss" scoped>


.item {
    height: 60px;
}

.radio-label:has(input[type="radio"]:checked) 
{
    background-color: var(--background-show-comp);
    border: 1.5px solid var(--btn-color2);
}


.label-struct 
{

    // background-color: aqua;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;

}

.radio 
{
    // display: flex;
    // flex-direction: column;
    width: 100%;
    // background-color: red;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;

    >div
    {
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
    margin-top: 45px;
    align-items: center;
    display: flex;

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