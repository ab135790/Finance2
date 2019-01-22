<template>
  <me-pancel title="亲，您没有登录哦~" class="slider-pancel" :isLeft="isLeft" :isSize="isSize">
    <me-swiper
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
    >
      <swiper-slide v-for ="item of SlideImg" :key="item">
        <router-link to="home">
          <img class="slider-img" :src="item" alt="">
        </router-link>
      </swiper-slide>
    </me-swiper>
  </me-pancel>
</template>

<script>
  import {swiperSlide} from 'vue-awesome-swiper';
  import MeSwiper from 'base/MeSwiper';
  import MePancel from 'base/MePancel';
  import {SlideImg, sliderOptions} from '../config';
  export default {
    name: 'SaveSwiper',
    components: {
      MeSwiper,
      swiperSlide,
      MePancel
    },
    data() {
      return {
        direction: sliderOptions.direction,
        interval: sliderOptions.interval,
        loop: sliderOptions.loop,
        pagination: sliderOptions.pagination,
        SlideImg: SlideImg,
        isLeft: true,
        isSize: true
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .slider-pancel {
    background: $bgColor;
    color: #b67e38;
    position: relative;
    margin-top: 90px;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 40px;
      width: 145px;
      height: 136px;
      background: url(//storage.360buyimg.com/jr-mobile-active-forever/saveMoney/login-btn.png) no-repeat;
      background-size: cover;
    }
  }
  .slider-img {
    width: 100%;
  }
</style>
