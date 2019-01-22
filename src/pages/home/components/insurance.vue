<template>
  <me-pancel title="-保险保障-" class="pancel">
    <me-swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="spaceBetween"
    :freeMode="freeMode"
    >
      <swiper-slide v-for="item of insuranceImg" :key="item">
        <router-link tag="img" to="/" class="rewardImg-img" :src="item" alt=""></router-link>
      </swiper-slide>
    </me-swiper>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {rewardOptions, insuranceImg} from '../config';
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
        insuranceImg: []
      };
    },
    created() {
      this.insuranceImg = insuranceImg;
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
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    padding-bottom: $mabt;
  }
  .rewardImg-img {
    width: 100%;
    height: 100%;
  }
</style>
