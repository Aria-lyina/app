<script setup>
//    @TODO если спользуешь composition api в других, тогда используй его везде
defineProps ({
      svgProps: 
      {
        type: Object
      },
      text:
      {
        type: String,
      },
      margin: {
          type: String,
          default: "5px",
          },
  })
</script>

<template>
    <button class="button-header">
        <div class="content-button">
                <!-- <img v-if="icon" :src="icon" class="icon-btn"> -->

                <svg v-if="svgProps" class="icon-btn" xmlns="http://www.w3.org/2000/svg" id="Outline" :viewBox=svgProps.viewBox>
                    <path v-for="item in svgProps.d" :d="item"/>  
                </svg>

                <div v-if="text" v-html="text" class="text-head" :style="{ marginLeft: margin }"/>
        </div>
    </button>
</template>

<style lang="scss" scoped>

    .button-header
    {
        color: var(--primary-color-text);
        padding-left: 0px;
        padding-right: 0px;
        
        margin-right: 20px;
        // background-color:aqua;
    }

    .content-button
    {
        display: flex;
        justify-content: space-between;
        // background-color:rgb(0, 21, 255);
        font-size: var(--fontsize-small-default);

        &>svg
        {
            fill:var(--primary-color-text);
        }

        &:hover 
        {
            color:var(--light-color-text);
            >svg 
            {
                fill:var(--light-color-text);
            }
        }
        // background-color: aqua;
    }

    .text-head
    {
    //     // margin-top: auto;
    //     // margin-bottom: auto;
        padding-left: 5px;
        // background-color:red; 
    //     font-size: var(--fontsize-small-default);
    //     // font-family: Roboto,Arial,sans-serif;
    }

    .header-right-buttons
    {
        margin-left: auto;
    }
    
</style>