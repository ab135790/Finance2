<template>
    <me-pancel title="-众筹新品-" class="pancel">
      <me-swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :freeMode="freeMode"
      >
        <swiper-slide v-for="item of popularImg" :key="item">
          <router-link tag="img" to="/" class="popularImg-img" :src="item" alt=""></router-link>
        </swiper-slide>
      </me-swiper>
      <router-link class="pancel-link" tag="div" to="/">更多尖货<i class="iconfont">&#xe601;</i></router-link>
    </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {rewardOptions, popularImg} from '../config';
  export default {
    name: 'HomeInsurance',
    components: {
      MePancel,
      MeSwiper,
      swiperSlide
    },
    data() {
      return {
        slidesPerView: rewardOptions.slidesPerView,
        spaceBetween: rewardOptions.spaceBetween,
        freeMode: rewardOptions.freeMode,
        popularImg: []
      };
    },
    created() {
      this.popularImg = popularImg;
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .swiper-container {
    width: auto;
    padding: 0 20px;
    margin: 0;
  }
  .pancel {
    position: relative;
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    padding-bottom: 20px;
    &-link {
      position: absolute;
      top: 40px;
      right: 50px;
      color: #999;
      font-size: $ftSize-base-l;
      .iconfont {
        font-size: 30px;
      }
    }
  }
  .popularImg-img {
    width: 100%;
    height: 100%;
  }
</style>
