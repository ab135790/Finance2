<template>
  <div class="wrapper">
    <me-swiper
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :isClass="isClass"
    >
      <swiper-slide v-for ="item of sliders" :key="item.id">
        <router-link :to="item.linkUrl">
          <img class="slider-img" :src="item.picUrl" alt="">
        </router-link>
      </swiper-slide>
    </me-swiper>
  </div>
</template>

<script>
  import {swiperSlide} from 'vue-awesome-swiper';
  import MeSwiper from 'base/MeSwiper';
  import {sliderOptions, sliders} from '../config';
  export default {
    name: 'MakeSwiper',
    components: {
      MeSwiper,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        interval: sliderOptions.interval,
        loop: sliderOptions.loop,
        pagination: sliderOptions.pagination,
        sliders: sliders,
        isClass: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-pagination-bullets{
    bottom: 20px !important;
  }
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 53.33%;
    background-color: #ccc;
    margin-top: 90px;
  }
  .slider-img {
    width: 100%;
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
