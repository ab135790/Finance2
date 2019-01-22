<template>
  <me-pancel title="-赏金任务-" class="pancel">
    <me-swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="spaceBetween"
    :freeMode="freeMode"
    >
      <swiper-slide v-for="item of rewardImg" :key="item">
        <router-link tag="img" to="/" class="rewardImg-img" :src="item" alt=""></router-link>
      </swiper-slide>
    </me-swiper>
    <router-link class="pancel-link" tag="div" to="/">查看更多任务<i class="iconfont">&#xe601;</i></router-link>
  </me-pancel>
</template>
<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {rewardOptions, rewardImg} from '../config';
  export default {
    name: 'HomeReward',
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
        rewardImg: []
      };
    },
    created() {
      this.rewardImg = rewardImg;
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
    padding-bottom: $mabt;
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
  .rewardImg-img {
    width: 100%;
    height: 100%;
  }
</style>
