<script setup>
    import LinkLogo from '@/components/Logo.vue';
</script>

<template>
    <footer class="app-footer">
        <div class="container-info-list">
            <div class="container-info">
                <ul class="info-list">
                    <li class="name-info">Помощь</li>
                    <li><NuxtLink to="/">Доставка и оплата</NuxtLink></li>
                    <li><NuxtLink to="/">Кредит</NuxtLink></li>
                    <li><NuxtLink to="/">Гарантия</NuxtLink></li>
                    <li><NuxtLink to="/">Возврат товара</NuxtLink></li>
                    <li><NuxtLink to="/">Сервистные центры</NuxtLink></li>
                    <li><NuxtLink to="/">Вопросы и ответы</NuxtLink></li>
                    <li><NuxtLink to="/">Отследить заказ</NuxtLink></li>
                </ul>
            </div>
            <div class="container-info">
                <ul class="info-list">
                    <li class="name-info">Информация о компании</li>
                    <li><NuxtLink to="/">О нас</NuxtLink></li>
                    <li><NuxtLink to="/">Адреса магазинов</NuxtLink></li>
                    <li><NuxtLink to="/">Условия использования сайта</NuxtLink></li>
                    <li><NuxtLink to="/">Вакансии</NuxtLink></li>
                    <li><NuxtLink to="/">Контакты</NuxtLink></li>
                </ul>
            </div>
            <div class="container-info">
                <ul class="info-list">
                    <li class="name-info">Сервисы</li>
                    <li><NuxtLink to="/">Бонусный счет</NuxtLink></li>
                    <li><NuxtLink to="/">Premium</NuxtLink></li>
                    <li><NuxtLink to="/">Подарочные сертифекаты</NuxtLink></li>
                    <li><NuxtLink to="/">Перевод денег с карты на карту</NuxtLink></li>
                    <li><NuxtLink to="/">Туры и отдых</NuxtLink></li>
                </ul>
            </div>            
            <div class="container-info">
                <ul class="info-list">
                    <li class="name-info">Партнерам</li>
                    <li><NuxtLink to="/">Продавать на Razetke</NuxtLink></li>
                    <li><NuxtLink to="/">Сотрудничество с нами</NuxtLink></li>
                    <li><NuxtLink to="/">Логотип и стайлгайд</NuxtLink></li>
                </ul>
            </div>            
            <div class="container-info">
                <ul class="info-list">
                    <li class="name-info">Call-центр</li>
                    <li class="name-info">+38 044 537 02 22</li>
                    <li class="name-info">+38 044 503 80 80</li>
                    <li class="light-text">В будние с 08:00 до 21:00</li>
                    <li class="light-text">Суббота с 09:00 до 20:00</li>
                    <li class="light-text">Воскресенье с 10:00 до 19:00</li>
                    <li>
                        <div class="icons-footer">
                            <NuxtLink to="/"><img class="icon-social" src="img/icon/fi-fi-brands-facebook.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="img/icon/fi-fi-brands-twitter.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="img/icon/fi-fi-brands-youtube.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="img/icon/fi-fi-brands-instagram.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="img/icon/fi-fi-brands-whatsapp.svg"></NuxtLink>
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- <hr style="{color:black; size:10px}"/> -->
        <div class="bot-footer">

            <div class="container-info"><link-logo/></div>
            <div class="container-info"><p class="light-text">ⓒ Интернет-магазин Розетка 2001-2020</p></div>
            <div class="container-info"></div>
            <div class="container-info"><NuxtLink>Устанавливайте наши приложения&ensp; ––––– </NuxtLink></div>
            <div class="container-info">
                <NuxtLink to="/"><img class="link-img" src="img/icon/google-play.png"></NuxtLink>
                <NuxtLink to="/"><img class="link-img" src="img/icon/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg"></NuxtLink>
            </div>


        </div>
    </footer>
</template>

<style lang="scss" scoped>

    a
    {
        color:var(--primary-color-text);
        font-size: var(--fontsize-small-default);
        text-align: left;
    }

    li
    {
        margin-bottom:12px;
        list-style-type: none; /* Убираем маркеры */
    }

    .link-img
    {
        width: auto;
        height: 35px;
        justify-content: flex-start;
        margin-left: 0px;
        margin-right:10px;
    }

    .bot-footer
    {
        border-top: 2px solid var(--light-color-text);

        display: flex;
        width:100%;
        height:100%;
        align-items: center;
    } 

    .icon-social
    {
        margin-right: 15px;
        width: auto;
        height: 15px;
    }


    .icons-footer
    {
        margin-top: 40px;
    }

    .app-footer
    {
        /* 
        position: absolute;

        left: 0;
        right: 0; 

        height: 30%; 
        */

        height: 420px;

        margin-left: 2%;
        margin-right: 2%;

        display: flex;
        flex-direction: column;
    }

    .container-info-list
    {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 70%;
        margin-bottom:2%;
    }

    .container-info
    {
        width:20%;
        display: flex;
    }
    
    .info-list
    {
        margin-left: 0; /* Отступ слева в браузере IE и Opera */
        padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
        height: 100%
    }
</style>