<script setup>

    import Contact from '@/components/DataBuy/Contact.vue';
    import Delivery from '@/components/DataBuy/Delivery.vue';
    import Payment from '@/components/DataBuy/Payment.vue';

    import MiniArrow from '@/components/icons/miniArrRight.vue';

    const stage = ref(1);
    // const buttonContent = ref ("Далее");

</script>

<template>
    <div>
        <NuxtLink :class="{fontDark : stage==1}" >Контактные данные</NuxtLink>
        <MiniArrow class="item"/>
        <NuxtLink :class="{fontDark : stage==2}">Способ доставки</NuxtLink>
        <MiniArrow class="item"/>
        <NuxtLink :class="{fontDark : stage==3}">Способ оплаты</NuxtLink>
    </div>

    <div class="contentData">

        <Contact class="page" v-if="stage==1"/>
        <!-- <Delivery class="page" v-if="stage==2"/> -->

        <div v-if="stage!=1" class="page" :class="{hidden : stage!=2}">
            <Delivery/>
        </div>        

        <Payment class="page absolute pay" v-if="stage==3"/>
        

        <!-- <div class="page" :class="{hidden : stage!=1}">
            <Contact/>
        </div>
        <div class="page" :class="{hidden : stage!=2}">
            <Delivery/>
        </div>        
        <div class="page" :class="{hidden : stage!=3}">
            <Payment/>
        </div> -->
        
        <!-- <Delivery class="page" :class="{hidden : stage!=2}"/>
        <Payment class="page" :class="{hidden : stage!=3}"/> -->

        <div>
            <button class="btn-1 w250px" @click="if(stage!=3) stage++; else stage = 1;">
                <span v-if="stage!=3">Далее</span>
                <span v-else>Заказ подтверждаю</span>
            </button>

            <span v-if="stage==3" class="fontSmall marg-left-big">Подтверждая заказ я принимаю условия пользовательского соглашения </span>

        </div>


    </div>

</template>

<style lang="scss" scoped>

    .pay 
    {
        top: 20px;
    }


    .hidden
    {
        // display: none;
        opacity: 0;
        // height: 0;
    }

    // .page
    // {
    //     transition-duration: 0.8s;
    // }

    .btn-1 
    {
        margin-top: 40px;

    }

    .contentData
    {
        // background-color: white;
        width: 100%;
        // height: 500px;
    }   

    .item 
    {
        margin-left: 7px;
        margin-right: 5px;
    }

</style>