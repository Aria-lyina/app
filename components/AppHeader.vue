<script setup>
    import HeaderButtonSvg from '@/components/HeaderButtonSvg.vue';
    import LinkLogo from '@/components/Logo.vue';
    import MenuCast from '@/components/MenuCast.vue';
    import ShoppingСart from '@/components/ShoppingСart.vue';
    import Register from '@/components/Register.vue';

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
    const showReg = ref(false);
    const showSeach = ref(false);

    const changeColor = ref(false);

    const SeachIc = ref(false);


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


    const icCatalog = 
    {
        d: ["M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z",
            "M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z",
            "M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z",
            "M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"],
        viewBox: "0 0 24 24",
    }

    const icSeach = {
        d: ["M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"],
        viewBox: "0 0 24 24",
    }
    
    const icUser = {
        d: ["M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z", "M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"],
        viewBox: "0 0 24 24",
    }

    const icLikes = {
        d: ["m17.2,1.39a6.4,6.4 0 0 0 -5.35,2.77a6.4,6.4 0 0 0 -5.58,-3a6.8,6.8 0 0 0 -6.42,6.75c0,6.77 10.96,14.6 11.42,14.93l0.58,0.41l0.58,-0.41c0.46,-0.33 11.42,-8.16 11.42,-14.93a6.8,6.8 0 0 0 -6.65,-6.52zm-5.35,19.4c-3.25,-2.43 -10,-8.1 -10,-12.58a4.8,4.8 0 0 1 7.68,-4.07a4.8,4.8 0 0 1 2.3,3.16l0.03,0a4.8,4.8 0 0 1 1.55,-2.25a4.8,4.8 0 0 1 8.36,3.08c0,4.48 -6.67,10.22 -9.92,12.65z"],
        viewBox: "0 0 24 24"
    }

    const icRefresh = {
        // d: ["M 20 4 C 15.054545 4 11 8.0545455 11 13 L 11 35.585938 L 5.7070312 30.292969 L 4.2929688 31.707031 L 12 39.414062 L 19.707031 31.707031 L 18.292969 30.292969 L 13 35.585938 L 13 13 C 13 12.759091 13.01313 12.521884 13.037109 12.287109 C 13.396795 8.7654918 16.386364 6 20 6 L 30 6 L 30.5 6 L 30.5 4 L 30 4 L 20 4 z M 38 10.585938 L 30.292969 18.292969 L 31.707031 19.707031 L 37 14.414062 L 37 37 C 37 40.613636 34.234508 43.603205 30.712891 43.962891 C 30.478116 43.98687 30.240909 44 30 44 L 20 44 L 19.5 44 L 19.5 46 L 20 46 L 30 46 C 30.309091 46 30.614657 45.984029 30.916016 45.953125 C 35.436391 45.489569 39 41.636364 39 37 L 39 14.414062 L 44.292969 19.707031 L 45.707031 18.292969 L 38 10.585938 z"],
        d: ["M 20 3 C 14.486 3 10 7.486 10 13 L 10 33.171875 L 6.4140625 29.585938 A 2.0002 2.0002 0 0 0 4.9785156 28.980469 A 2.0002 2.0002 0 0 0 3.5859375 32.414062 L 10.585938 39.414062 A 2.0002 2.0002 0 0 0 13.414062 39.414062 L 20.414062 32.414062 A 2.0002 2.0002 0 1 0 17.585938 29.585938 L 14 33.171875 L 14 13 C 14 9.691 16.691 7 20 7 L 30.46875 7 L 30.734375 3 L 20 3 z M 37.970703 10 A 2.0002 2.0002 0 0 0 36.585938 10.585938 L 29.585938 17.585938 A 2.0002 2.0002 0 1 0 32.414062 20.414062 L 36 16.828125 L 36 37 C 36 40.309 33.309 43 30 43 L 19.509766 43 L 19.255859 47 L 30 47 C 35.514 47 40 42.514 40 37 L 40 16.828125 L 43.585938 20.414062 A 2.0002 2.0002 0 1 0 46.414062 17.585938 L 39.414062 10.585938 A 2.0002 2.0002 0 0 0 37.970703 10 z"],
        viewBox: "0 0 50 50",
    }
    
    const icShopCart = {
        d: ["M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"],
        viewBox: "0 0 24 24",
    }
        // const icSeach = ["M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"];


    function DisableMenu()
    {

            if(changeColor.value) changeColor.value = false;

            setTimeout(() => {
            showMenu.value = false;
            if(!changeColor.value) changeColor.value = true;
            }, 500);
    }

</script>

<template >
    <header class="app-header" ref="buttonMenu">
        <div class="app-header__container">
            <header-button-svg :svg-props="icCatalog" 
            @click="showMenu = !showMenu; showSeach=false" :text="nameCatalog"
            margin="20px" />
            
            <link-logo  height="4.5vh" class="center"/>

            <header-button-svg class="header-right-buttons" 
            :svg-props=icSeach @click="showSeach = !showSeach; DisableMenu();" text="Поиск" />

            <header-button-svg @click="showReg = true" 
            :svg-props=icUser />

            <header-button-svg :svg-props=icRefresh text="0" />

            <header-button-svg :svg-props=icLikes text="0" />

            <header-button-svg @click="showShopCart = true"
            :svg-props=icShopCart :text=countInCart.toString() />

            <header-button-svg id="last-text-head" @click="changeLang" margin="0px" :text=currentLang />

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

    <div v-if="showReg" class="container-shops">
        <register>
            <button class="button-exit" @click="showReg = false">
                <img class="icon-large" src="img/icon/fi-rr-cross.svg"/>
            </button>
        </register>
    </div>

    <div class="container-seach animated" :class="{ animated_click: showSeach}">
        <!-- <register>
            <button class="button-exit" @click="showReg = false">
                <img class="icon-large" src="img/icon/fi-rr-cross.svg"/>
            </button>
        </register> -->
        <!-- ПОИСК -->
        <div class="seach-content" :class="{ change_color: changeColor}">
          
            <input v-if="changeColor" type="text" class="seach-field" placeholder="Я ищу..." id="seachField" name="seachField" @mouseover="SeachIc = true" @mouseout="SeachIc = false">
              
            <svg class="seach-btn" :class="{ seach_h: SeachIc}" xmlns="http://www.w3.org/2000/svg" id="Outline" :viewBox=icSeach.viewBox @mouseover="SeachIc = true" @mouseout="SeachIc = false">
                    <path v-for="item in icSeach.d" :d="item"/>  
            </svg>

        </div>
    </div>


    <!-- <menu-cast class="menu-style"></menu-cast> -->
</template>

<style lang="scss" scoped>


    .button
    {
        &-exit
        {
            position: absolute;
            // background-color:red;

            width: 30px;
            height: 30px;
            // display: flex;
            // align-items:center;
            // margin-right: 20px;

            // top: 30px;
            // right: 20px;

            top: var(--marg-show-comp);
            right: var(--marg-show-comp);

            // right: var(--marg-hor-show-comp);

            z-index: 13;
        }

        &-continue
        {
            position: absolute;

            padding-left: 0px;
            margin-right: 20px;

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

    .container-seach
    {
        // background-color:rgba(0, 0, 0, 0.641);
        // width: 101vw;
        // height: 100vh;
        // z-index:11;

        // top: 0;
        // left: 0;
        // position: fixed;
        // box-sizing:border-box;

        //стили для контейнера с полями
        // width: 95.6%;

        

        // margin-left: 1.9%;
        // margin-top: -0.6%;


        // width: 101vw;
        left: 0;
        // margin-left: -0.5%;

        //обязательные стили
        position: fixed;
        box-sizing:border-box;
        display: flex;
        flex-direction: row;
        height: 100vh;
        z-index: 9;

        width: 100%;
        // width: 95%;
        // margin-left: 2.5%;
        // margin-right: 2.5%;


        // padding-left: 2.5%;
        // padding-right: 2.5%;

        // margin-left: 2%;
        // margin-right: 2%;

        // // margin-top: 50px;
        // margin-top: 70px;
        // // margin-top: 0.5%;
        // position: relative;

        // background-color:rgba(255, 0, 0, 0.306);
        background-color:var(--background-show-comp);
    }

    .seach
    {
        // background-color:white;
        // background-color:var(--background-product);
        // background-color: white;
        // background-color: red;

        &-btn  
        {
            width: auto;

            // height: 5%;

            min-height: 15px;
            height: 2vh;

            // height: 12vh;

            fill:var(--primary-color-text);


            position: absolute;
            top: 50%;
            left: 68%;
            transform: translate(-50%, -50%);

            // fill:rad;
        }

        
        &-content
        {        
            width: 100%;

            margin-left: 2.5%;
            margin-right: 2.5%;



            height: 86.5vh;

            // margin-bottom: 7.5%;

            display: flex;

            position: relative;

            opacity: 0;
            transition: opacity 1s ease;

            // justify-content: center;
            // align-items: center;

            // transition: background-color 1s ease;
        }


        &-field 
        {
            border: none;
            height: 8%;
            width: 39%;
            // width: 33%;

            box-sizing:border-box;

            padding-left: 1vw;
            // padding-right: 50px;
            padding-right: 3vw;


            margin: auto;
            position: absolute;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 18px;


            &::placeholder
            {
                color:var(--light-color-text);
            }
        }
        &_h
        {
            fill:var(--btn-color2);
        }
    }

    .animated 
    {
        transform: translateY(-100%);
        transition: transform 0.5s linear;
        // animation: my-animation 1s;
    }

    .animated_click 
    {
        transform: translateY(0);
    }

    .change_color 
    {
        // transition: background-color 1s ease; 
        background-color:var(--background-product);
        opacity: 1;

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
        background: var(--background-header-show-comp);  
        // background: rgba(0, 8, 8, 0.296); 
        // background-color:red;
        background: white;  
        // height: 70px;

        height: 9vh;
        min-height: 70px;


        // margin-left: 0px;
        // margin-left: 2%;
        display: flex;
        // margin-right: 2%;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;
        resize: none;
        z-index: 10;

        // min-height: 70px;


        &__container
        {
            display: flex;
            position: relative;
            flex-direction: row;
            // background-color:rgb(106, 248, 255); 
            width:100%;
            height:100%;
            margin-right: 2.5%;
            margin-left: 2.5%;
            /* justify-content: center; */
            align-items: center;

            resize: none;
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