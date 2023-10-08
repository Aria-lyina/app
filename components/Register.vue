<script setup>
</script>

<template>
<div class="container">

    <div class="header">
        <span class="header-name">Вход</span>
    </div>
    <div class="content">
        m
    </div>
    <slot/>
</div>
</template>

<style lang="scss" scoped>

.content
{
    background-color:violet;
    position: relative;
    margin-left: 35px;
    margin-right: 35px;
}
.header
{
    position: relative;
    background-color:rgb(176, 244, 255);
    // background-color:rgb(255, 255, 255);
    height: 80px;
    display: flex;
    // justify-content: center;
    align-items: center;
    box-sizing:border-box;
    padding-left: 35px;
    padding-right: 35px;
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
    width: 30vw;
    height: 100vh;
    z-index:12;

    top: 0;
    right: 0;
    position: fixed;
    box-sizing:border-box;
}

</style>