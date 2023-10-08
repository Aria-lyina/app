<script setup>
defineProps({
    video:Object,
})

</script>

<template>
    <div class="video-box-item">
        <div class="video-box-item-prevew">
            <div class="bt">
                <div class="button-play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>play</title>
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                    </svg>
                </div>
            </div>
            <img :src="video.preview" style="width: 100%;" class="zoom"/>
        </div>
        <div class="date" v-html="video.date"></div>
        <div class="description" v-html="video.description"></div>
        <div></div>
    </div>
</template>

<style scoped lang="scss">
.video-box-item
{
    // background-color: blueviolet;
    width: 100%;
    height: 100%;

    &:hover{
        cursor: pointer;

        .button-play
        {
            color: var(--btn-color1);
            background: var(--btn-color2);
        }

        .zoom 
        {
             transform: scale(1.1);
        }
    }

    &-prevew
    {
        width: 100%;
        // height: 75%;
        height: 75%;
        // display: flex;
        overflow: hidden;
        position: relative;
        // background-color: rebeccapurple;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.bt
{
    position: absolute;
    z-index: 2;
    // top:50%;
    // transform: translateY(-50%);
}

.date
{
    height: 10%;
    width: 90%;
    font-size: var(--fontsize-light-small-default);
    color: var(--primary-color-text);
    display: flex;
    align-items:flex-end;
    align-items:center;
}

.description
{
    width: 90%;
    height: 15%;
    // background-color:antiquewhite;

    font-size: var(--fontsize-text-video);
    display: flex;
    align-items:flex-end;
    align-items:center;
    line-height: 1.5;

}

.button-play {

    color: var(--btn-color2);
    background: var(--btn-color1);
    
    border-radius: 100%;
    width: 64px;
    height: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 18px;
        height: auto;

        path {
            fill: currentColor;
        }
    }
}

.zoom
    {
        transition: transform 0.5s;
        z-index: 1;
    }

</style>
