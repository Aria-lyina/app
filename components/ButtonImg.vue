<script setup>

defineProps({
    img:String
})
</script>

<template>
    <button class="btn">

        <div class="btn-cont">
            <img class="icon-large" :src="img">
            <slot/>
        </div>
    </button>
</template>

<style scoped lang="scss">
.btn 
{
    // color:var(--dark-color-text);
    color:var(--primary-color-text);
    // background-color: var(--btn-color2); 
    font-size: var(--fontsize-small-default);

    display: flex;

    justify-content: center;
    width: 155px;

    border: 1px solid;
    /* border: 1px solid var(--primary-color-text); */
    height: 55px;
    border-radius: 3px;

    &-cont
    {
        // background-color:aqua;
        justify-content: space-evenly;
        width: 110px;
        height: 100%;

        display: flex;
        align-items: center;
    }
}

</style>