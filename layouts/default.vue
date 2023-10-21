<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

</script>

<template>
 <div class="f">

    <div class="marg"></div>
    <AppHeader class="header-style"/>

    <div class="default">
      <slot />
    </div>
    <AppFooter/>
 </div>
</template>

<style scoped lang="scss">
// .header-style
// {
//     // position: sticky;
//     // top: 40px;
//     // position: absolute;
//     // background-color:aquamarine;
// }

// .f
// {
//   // background-color: red;
// }

.marg 
{
  height: 9vh;
  width: 100%;
  min-height: 70px;
  // background-color:red;
}


.default 
{
//   border: 1px solid #b9e39e;
  /* padding: 100px; */
  /* position: relative; */

  /* position: absolute; */
//   height: 100%;
  /* width: 99%; */

  // height: 3000px;
  // background-color: #3df5ff46; 
  display: flex;
  flex-direction: column;

  margin-left: 2.5%;
  margin-right: 2.5%;

  // margin-left: 0px;
  // margin-right: 0px;

  // padding-left: 0px;
  // padding-right: 0px;

  // margin-top: 50px;
  // margin-top: 70px;

  // margin-top: 9vh;

  // margin-top: 0.5%;
  position: relative;
  /* top: 11%; */
}

</style>
