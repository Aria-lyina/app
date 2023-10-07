<script setup>
    import HeaderButton from '@/components/HeaderButton.vue';
    import LinkLogo from '@/components/Logo.vue';
    import MenuCast from '@/components/MenuCast.vue';
    import ShoppingСart from '@/components/ShoppingСart.vue';

    const DEFAULT_LANG = "Ru";

    const nameCatalog = ref('Каталог товаров')
    const nameCatalog2 = computed(() => {
    return 'Каталог товаров'
    });

    const countInCart = ref(0);

    const currentLang = ref(DEFAULT_LANG);
    
    const buttonMenu = ref();

    const showMenu = ref(false);
    const showShopCart = ref(false);
    
    // const showMenu = computed(() =>
    //  {
    // return false
    // });

    const changeLang = () => {
        if (currentLang.value == DEFAULT_LANG) {
        currentLang.value = 'Ua'
        } else {
            currentLang.value = DEFAULT_LANG;
        }
    }

    // const Sh = () =>
    // {
    //     if (showMenu) showMenu = false; 
    //     else showComponent = true
    // }

    // setInterval(() => {
    // countInCart.value++
    // ;},  1000 * 5)

    // export default {
    // name: 'AppHeader', // новое имя компонента
    // components: {
    //     HeaderButton, // новое имя компонента
    //     LinkLogo }
    // }
</script>

<template >
    <header class="app-header" ref="buttonMenu">
        <div class="app-header__container">
            <header-button icon="img/icon/fi-rr-apps.svg" 
             @click="showMenu = !showMenu"
             margin="20px">{{ nameCatalog }}</header-button>
            <link-logo class="center"/>
            <header-button class="header-right-buttons" icon="img/icon/fi-rr-search.svg">Поиск</header-button>
            <header-button icon="img/icon/fi-rr-user.svg"/>
            <header-button icon="img/icon/fi-rr-arrows-retween-re.svg">0</header-button>
            <header-button icon="img/icon/heart-3.svg">0</header-button>
            <header-button @click="showShopCart = true"
            icon="img/icon/fi-rr-shopping-bag.svg">{{ countInCart }} </header-button>
            <header-button id="last-text-head" @click="changeLang" margin="0px">{{ currentLang }}</header-button>
        </div>
    </header>
    <menu-cast v-if="showMenu"></menu-cast>
    <div v-if="showShopCart" class="container-shops">
        <shopping-сart>
            <button class="button-exit" @click="showShopCart = false">
                <img class="icon-large" src="img/icon/fi-rr-cross.svg"/>
            </button>
            <button class="button-continue" @click="showShopCart = false">
                <img class="icon-in-text" src="/img/icon/arrow-2-2.svg">
                Продолжить покупки
            </button>
        </shopping-сart>

    </div>
    <!-- <menu-cast class="menu-style"></menu-cast> -->
</template>

<style lang="scss" scoped>
    
    .button
    {
        &-exit
        {
            position: absolute;
            // color: var(--primary-color-text);
            background-color:rgba(255, 255, 255, 0);
            border:0px;
            padding-left: 0px;
            cursor: pointer;
            margin-right: 20px;

            top: 30px;
            right: 20px;
            z-index: 13;
        }

        &-continue
        {
            position: absolute;
            color: black;
            background-color:rgba(255, 255, 255, 0);
            border:0px;
            padding-left: 0px;
            cursor: pointer;
            margin-right: 20px;

            font-size: var(--fontsize-medium);
            bottom: 55px;
            left: 40px;
            z-index: 13;
        }

    }

    .container-shops
    {
        background-color:rgba(0, 0, 0, 0.373);
        width: 101vw;
        height: 100vh;
        z-index:11;

        top: 0;
        left: 0;
        position: fixed;
        box-sizing:border-box;
    }

    // .app-header
    // {
    //     background: rgba(182, 255, 231, 0.48); 
    //     height: 50px;
    //     margin-left: 2%;
    //     display: flex;
    //     margin-right: 2%;
    //     // position: fixed;

    //     &__container
    //     {
    //         display: flex;
    //         flex-direction: row;
    //         /* background-color:rgb(106, 248, 255); */
    //         width:100%;
    //         height:100%;
    //         /* justify-content: center; */
    //         align-items: center;
    //     }
    // }

 

    .app-header
    {
        background: white;  
        // background: rgba(0, 8, 8, 0.296); 
        height: 70px;
        // margin-left: 0px;
        // margin-left: 2%;
        display: flex;
        // margin-right: 2%;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;

        z-index: 10;


        &__container
        {
            display: flex;
            flex-direction: row;
            // background-color:rgb(106, 248, 255); 
            width:100%;
            height:100%;
            margin-right: 2.5%;
            margin-left: 2.5%;
            /* justify-content: center; */
            align-items: center;
        }
    }

// .menu-style
// {
//     // box-sizing:border-box;
//     width: 95%;
//     height: 750px;
//     top:43px;
//     // position: absolute;
//     background-color:rgba(2, 2, 2, 0.476);
//     // left:0px;
//     // z-index: 99;

// }

</style>