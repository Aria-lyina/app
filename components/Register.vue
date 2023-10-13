<script setup>
</script>

<template>
<div class="container">

    <div class="header">
        <span class="header-name">Вход</span>
    </div>
    <div class="content">
        <form style="background-color: bisque; width: 100%;">

            <div class="fields">
                <div class="field-ident"/>
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

.btn
{
    &-1 
    {
        width: 100%;
    }
}

.btn-rem-pass
{
    margin-left: auto;
    font-size: var(--fontsize-small-default);
}

.remb-chek
{
    display: flex;
    align-items: center;
    height: 10%;
    min-height: 50px;
    background-color:azure;

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

    min-height: 30px;
    height: 30%;
    

    // font-size: var(--fontsize-medium);
    font-size: var(--fontsize-default);

    &::placeholder 
    {
        font-size: var(--fontsize-small-default);
    }

    &-ident 
    {
        height: 20%;
    }

    &s
    {
        height:20%;
        min-height: 120px;

        width: 100%;
        background-color:rgb(90, 255, 255);
        display: flex;
        position: relative;
        flex-direction: column;
        box-sizing:border-box;
        // margin-bottom: 10%;
    }

}

input:focus {
    outline: none;
    }

.content
{
    background-color:violet;
    position: relative;
    margin-left: 35px;
    margin-right: 35px;
    height: 100%;
    display: flex;
}

.header
{
    position: relative;
    background-color:rgb(176, 244, 255);
    // background-color:rgb(255, 255, 255);
    height: 120px;
    display: flex;
    // justify-content: center;
    align-items: center;
    box-sizing:border-box;
    padding-left: 50px;
    padding-right: 50px;
    // overflow: auto;
    &-name 
    {
        font-size: var(--fontsize-big-default);
        width: 145px;
    }
}
.container
{
    // background-color:rgb(255, 255, 255);
    background-color:rgb(255, 102, 102);
    // width: 30vw;
    width: 420px;
    height: 100vh;
    z-index:12;

    top: 0;
    right: 0;
    position: fixed;
    box-sizing:border-box;
}

</style>