<script setup>
    import HeaderButton from '@/components/HeaderButton.vue';
    import LinkLogo from '@/components/Logo.vue';

    const DEFAULT_LANG = "Ru";

    const nameCatalog = ref('Каталог товаров')
    const nameCatalog2 = computed(() => {
    return 'Каталог товаров'
    });

    const countInCart = ref(0);

    const currentLang = ref(DEFAULT_LANG);

    const changeLang = () => {
        if (currentLang.value == DEFAULT_LANG) {
        currentLang.value = 'Ua'
        } else {
            currentLang.value = DEFAULT_LANG;
        }
    }

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

<style lang="scss" scoped>
//@TODO    Style обычно идет после <template></template>
    .app-header
    {
        /* background: rgba(182, 255, 231, 0.48); */
        height: 50px;
        margin-left: 2%;
        display: flex;
        margin-right: 2%;

        &__container
        {
            display: flex;
            flex-direction: row;
            /* background-color:rgb(106, 248, 255); */
            width:100%;
            height:100%;
            /* justify-content: center; */
            align-items: center;
        }
    }

</style>

<template>
    <header class="app-header">
        <div class="app-header__container">
            <header-button icon="img/icon/fi-rr-apps.svg" margin="20px">{{ nameCatalog }}</header-button>
            <link-logo class="center"/>
            <header-button class="header-right-buttons" icon="img/icon/fi-rr-search.svg">Поиск</header-button>
            <header-button icon="img/icon/fi-rr-user.svg"/>
            <header-button icon="img/icon/fi-rr-arrows-retween-re.svg">0</header-button>
            <header-button icon="img/icon/heart-3.svg">0</header-button>
            <header-button icon="img/icon/fi-rr-shopping-bag.svg">{{ countInCart }}</header-button>
            <header-button id="last-text-head" @click="changeLang" margin="0px">{{ currentLang }}</header-button>
        </div>
    </header>
</template>

