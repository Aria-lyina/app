<script setup>
//    @TODO use composition api, и убери height props
defineProps({
    link:
    {
      type:String,
      default: '/'
    },
    height: 
    {
            type: String,
            default: "35px",
    },
    minHeight: 
    {
          type: String,
          default: "35px",
    },
  })

  const img = ref("/img/rozetka-logo_1.png");


  // onMounted(()=>
  // {
  //   window.onresize = function()
  //   {
  //     console.log(window.innerWidth);
  //       if (window.innerWidth < 550) 
  //       {
  //         img.value = "/img/logo2.png";
  //       } else {
  //         img.value = "/img/rozetka-logo_1.png";
  //       } 
  //       // console.log("WHY NO????");
  //       // console.log(slideCount.value); 
  //   }
  // })

</script>


<template>
    <NuxtLink :to="link">
        <img :src="img" :style="{height: height, minHeight: minHeight}">
    </NuxtLink>
</template>







