<script setup>
import ButtonImg from '@/components/ButtonImg.vue';
</script>

<template>
<div class="container">

    <div class="header">
        <span class="header-name">Вход</span>
    </div>
    <div class="content">
        <!-- style="width: 100%;" -->
        <form style="width: 100%;">

            <div class="fields">
                <input type="text" class="field" placeholder="Электронная почта или телефон" id="login" name="login">
                <div class="field-ident"/>
                <input type="text" class="field" placeholder="Пароль" id="password" name="password">
            </div>

            <div class="remb-chek">
                <input type="checkbox" id="remember" name="remember" checked/>
                <label for="remember" class="label-st">Запомнить меня</label>
                <button class="btn-rem-pass" type="button" id="remind_password">Напомнить пароль</button>
            </div>

            <button class="btn-1" type="button" id="sign_in">Войти</button>
            <button class="btn-2" type="button" id="sign_in">Зарегистрироваться</button>
            <div class="if">
                <div class="if-div">
                    <div class="if-div-line"/>
                    
                    <div class="if-line">
                            ИЛИ
                    </div>
                </div>

                <div class="btns-authorize">
                    <ButtonImg img="img/logo/facebook-logo.png">Facebook</ButtonImg>
                    <ButtonImg img="img/logo/google-logo.png">Google</ButtonImg>
                </div>
            </div>

            <!-- <input type="checkbox" id="checkbox1" name="checkbox1"> -->
        <!--     <label for="checkbox1">Чекбокс 1</label><br><br>

            <button type="button" id="button1">Кнопка 1</button>
            <button type="button" id="button2">Кнопка 2</button>
            <button type="submit" id="button3">Кнопка 3</button> -->
        </form>
    </div>
    <slot/>
</div>
</template>

<style lang="scss" scoped>

.if 
{
    // background-color:violet;
    height: 20%;
    position: relative;

    &-div
    {
        height: 60%;
        // background-color:aquamarine;
        position: relative;
        display: flex;
        align-items:center;
        justify-content:center;

        &-line
        {
            border-bottom: 1px solid;
            width: 100%;
            height: 50%;
            // background-color:red;
            top: 0px;
            position: absolute;
        }
    }

    &-line
    {
        color:var(--light-color-text);
        background-color:var(--background-show-comp);
        z-index: 1;
        width: 16%;
        text-align: center;
        font-size: var(--fontsize-small-default);
    }
}

.btn
{
    &-1 
    {
        width: 100%;
        margin-bottom: 3%;
    }

    &-2
    {
        width: 100%;
    }

    &-rem-pass
    {
        margin-left: auto;
        font-size: var(--fontsize-small-default);
    }

    &s-authorize
    {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: flex-end;
        // background-color:red;
        justify-content: space-between;
        // bottom:0px;
    }


}

.remb-chek
{
    display: flex;
    align-items: center;
    height: 10%;
    min-height: 50px;
    // background-color:azure;

}
.label-st
{
    font-size: var(--fontsize-small-default);
    margin-left: 10px;
}

.field 
{
    // width: 99%;
    border: none;
    border-bottom: 1px solid;
    // margin-top: 30px;
    // margin-top: 7%;

    // min-height: 30px;

    // min-height: 15px;
    // height: 40%;
    height: 35%;

    // font-size: var(--fontsize-medium);

    // background-color:var(--background-show-comp);
    // background-color: red;
    // text-align: end;

    vertical-align: bottom;

    font-size: var(--fontsize-default);

    // padding-top: 15px;


    &::placeholder 
    {
        font-size: var(--fontsize-small-default);

        // padding-top: 0px;
    }

    &-ident 
    {    
        // background-color:aqua;
        height: 20%;
    }

    &s
    {
        height:17%;
        min-height: 120px;

        width: 100%;
        // background-color:rgb(90, 255, 255);
        display: flex;
        position: relative;
        flex-direction: column;
        box-sizing:border-box;
        // margin-bottom: 10%;
    }

}

.content
{
    // background-color:violet;
    position: relative;
    margin-left: var(--marg-show-comp);
    margin-right: var(--marg-show-comp);
    height: 100%;
    display: flex;
}

.header
{
    position: relative;
    background-color:var(--background-show-comp);
    // background-color:beige;
    height: 100px;
    display: flex;
    // justify-content: center;
    align-items:center;
    box-sizing:border-box;

    padding-left: var(--marg-show-comp);
    padding-right: var(--marg-show-comp);
    padding-top: 15px;

    // overflow: auto;
    &-name 
    {
        font-size: var(--fontsize-big-default);
        width: 145px;
    }
}
.container
{
    background-color:var(--background-show-comp);
    width: 410px;
    height: 100vh;
    z-index:12;

    top: 0;
    right: 0;
    position: fixed;
    box-sizing:border-box;
    min-height: 500px;
}

</style>