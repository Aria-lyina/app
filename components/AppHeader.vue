<template>
    <header class="app-header">
        <div class="app-header-container">
            <HeaderButton icon="img/icon/fi-rr-apps.svg" margin="20px">Каталог товаров</HeaderButton>
            <LinkLogo/>
            <HeaderButton class="header-right-buttons" icon="img/icon/fi-rr-search.svg">Поиск</HeaderButton>
            <HeaderButton icon="img/icon/fi-rr-user.svg"/>
            <HeaderButton icon="img/icon/fi-rr-arrows-retween-re.svg">0</HeaderButton>
            <HeaderButton icon="img/icon/heart-3.svg">0</HeaderButton>
            <HeaderButton icon="img/icon/fi-rr-shopping-bag.svg">0</HeaderButton>
            <HeaderButton id="last-text-head" margin="0px">Ru</HeaderButton>
        </div> 
    </header>
</template>


<script>
import HeaderButton from '@/components/HeaderButton.vue';
import LinkLogo from '@/components/Logo.vue';
export default {
  name: 'AppHeader', // новое имя компонента
  components: {
    HeaderButton, // новое имя компонента
    LinkLogo
  }
}
</script>