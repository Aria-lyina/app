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
                            <NuxtLink to="/"><img class="icon-social" src="/img/icon/fi-fi-brands-facebook.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="/img/icon/fi-fi-brands-twitter.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="/img/icon/fi-fi-brands-youtube.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="/img/icon/fi-fi-brands-instagram.svg"></NuxtLink>
                            <NuxtLink to="/"><img class="icon-social" src="/img/icon/fi-fi-brands-whatsapp.svg"></NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- <hr style="{color:black; size:10px}"/> -->
        <div class="bot-footer">

            <div class="container-info1"><link-logo/></div>
            <div class="container-info2"><p class="light-text">ⓒ Интернет-магазин Розетка 2001-2020</p></div>
            <!-- <div class="container-info"></div> -->
            <div class="container-info3"><NuxtLink>Устанавливайте наши приложения</NuxtLink></div>
            <div class="container-info4"> ––––– </div>
            <div class="container-info5">
                <NuxtLink to="/"><img class="link-img" src="/img/icon/google-play.png"></NuxtLink>
                <NuxtLink to="/"><img class="link-img" src="/img/icon/app-store.svg"></NuxtLink>
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
        // background-color:azure;
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

        &1
        {
            width:20%;
            min-width: 220px;
            display: flex;
        }       
        &2
        {
            width:40%;
            display: flex;
        }
        &3
        {
            // justify-self: flex-end;
            min-width: 220px;
            // width:16%;
            display: flex;
            // background-color:aquamarine;
        }
        &4
        {       
            justify-content: center;
            width:5%;
            // background-color:bisque;
            display: flex;
        }
        &5
        {   
            // width:20%;
            // justify-content: space-between;    
            // background-color:bisque;
            display: flex;
        }
    }

    .info-list
    {
        margin-left: 0; /* Отступ слева в браузере IE и Opera */
        padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
        height: 100%
    }

    
    
    @media screen and (max-width: 950px) {
    
        .container-info5
        {
            flex-direction: column;
            justify-content: flex-end;
            align-items:flex-end;
        }

        .container-info3
        {
            min-width: 10%;
        }

        .container-info4
        {
            min-width: 90px;
        }
        .link-img
        {
            margin-right: 0px;
            margin-bottom: 5px;
            margin-top: 5px;
        }
    }
</style>
