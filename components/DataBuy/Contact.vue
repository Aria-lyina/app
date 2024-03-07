<template>

    <!-- <div class="flex red" style="overflow: hidden"> -->
        <h2>Контактные данные</h2>

        <div class="field">
        <div>
            <label for="name">Имя и фамилия</label>
            <input type="text" placeholder="Имя и фамилия" id="name" name="name">
        </div>

        <div>
            <label for="city">Город</label>
            <input type="text" placeholder="Город" id="city" name="city">
        </div>
    </div>

    <div class="field">
        
        <div>
            <label for="name">Мобильный телефон</label>
            <input type="text" placeholder="Имя и фамилия" id="name" name="name">
        </div>

        <div>
            <label for="recipient">Кто получатель?</label>
            <!-- <input type="text" placeholder="Город" id="city" name="city"> -->
            
            <div class="radio">
                <div>
                    <input type="radio" id="im" name="recipient" value="im" checked />
                    <label for="im">Я</label>
                </div>

                <div>
                    <input type="radio" id="other" name="recipient" value="other" />
                    <label for="other">Другой человек</label>
                </div>
            </div>
        </div>
    </div>

    <div class="field checkboxSt">
        <input type="checkbox" :id="IsCall" 
        :name="IsCall"/>
        <label class="checkboxSt-lbl" :for="IsCall">  Не перезванивайте мне, я уверен в заказе  </label>
    </div>

    <!-- </div> -->

   
    <!-- <div class="fields">
        <input type="text" class="field" placeholder="Электронная почта или телефон" id="login" name="login">
        <div class="field-ident"/>
        <input type="text" class="field" placeholder="Пароль" id="password" name="password">
    </div> -->

</template>

<style src="@/assets/radioButton.scss"></style>

<style lang="scss" scoped>

.radio 
{
    display: flex;
    // background-color: red;
    height: 70%;
    align-items: center;

    >div
    {
        margin-right: 30px;
        // background-color: aqua;
        display: flex;
        align-items: center;

        >label 
        {
            margin-left: 10px;
        }
    }

}
.field
{
    // background-color: rgb(118, 218, 255);
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 40px;

    // flex-direction: column;

    // width: 90%;
    // box-sizing: border-box;

    >div
    {
        width: 48%;
        
        // height: 250px;
        // background-color: violet;
    }
}

@media screen and (max-width: 950px)
{
    .radio
    {
        margin-top: 15px;
        margin-bottom: 20px;

    }
    .field
    {
        flex-direction: column;
        margin-top: 0px;

        >div
        {
            width: 100%;
            margin-top: 20px;

            // height: 250px;
            // background-color: violet;
        }
    }

    .checkboxSt
    {
        flex-direction: row;
    }

    
} 

</style>