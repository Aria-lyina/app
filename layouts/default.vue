<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

</script>

<template>
 
 <div>
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

  margin-left: 2%;
  margin-right: 2%;
  // margin-top: 50px;
  margin-top: 70px;
  // margin-top: 0.5%;
  position: relative;
  /* top: 11%; */
}

</style>
