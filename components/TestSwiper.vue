<!-- <template>
    <div class="swiper-container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" alt="">
          <div class="slide-content">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        slides: [
          {
            image: 'https://picsum.photos/id/1015/500/300',
            title: 'Slide 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            image: 'https://picsum.photos/id/1016/500/300',
            title: 'Slide 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            image: 'https://picsum.photos/id/1018/500/300',
            title: 'Slide 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .swiper-slide {
    position: relative;
    /* height: 300px; */
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
  }
  
  .swiper-button-prev {
    left: 10px;
  }
  
  .swiper-button-next {
    right: 10px;
  }
  </style> -->


<!-- 
  <template>
    <swiper :direction="'vertical'" :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
    // import required modules
    import { Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>


<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper 
{
  width: 100%;
  height: 300px;
  background-color:aquamarine;
  position: relative;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ff8080;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  background-color:aqua;
}

.swiper-pagination-bullet {
  margin: 0 10px;
}

.swiper-pagination-bullet-active {
  width: 20px;
}



</style> -->


<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>


<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import required modules
  import { Mousewheel, Pagination } from 'swiper/modules';

  const components = {
  Swiper,
  SwiperSlide,
  // SwiperWrapper
};

const { modules } = {
    modules: [Pagination, Mousewheel],
};
</script>

<!-- <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import './style.css';

  // import required modules
  import { Mousewheel, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Mousewheel, Pagination],
      };
    },
  };
</script> -->


<style scoped>


.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>