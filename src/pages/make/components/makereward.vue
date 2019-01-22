<template>
  <me-pancel title="赏金任务" class="pancel" :isLeft="isLeft">
    <me-swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="spaceBetween"
    :freeMode="freeMode"
    >
      <swiper-slide v-for="item of rewardImg" :key="item">
        <router-link tag="img" to="/" class="rewardImg-img" :src="item" alt=""></router-link>
      </swiper-slide>
    </me-swiper>
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200" alt="">
    </router-link>
    <router-link class="pancel-link" tag="div" to="/">查看更多任务<i class="iconfont">&#xe601;</i></router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {rewardOptions} from '../config';
  import {rewardImg} from 'pages/home/config';
  export default {
    name: 'MakeReward',
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
        rewardImg: [],
        isLeft: true
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
    padding: 0 30px;
    margin: 0;
  }
  .swiper-slide {
    margin-right: 10px;
  }
  .pancel {
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    padding-bottom: 20px;
    position: relative;
    &-link {
      position: absolute;
      top: 40px;
      right: 50px;
      color: #999;
      font-size: $ftSize-base-m;
      .iconfont {
        font-size: $ftSize-base-m;
      }
    }
  }
  .rewardImg-img {
    width: 100%;
    height: 100%;
  }
  .advertis {
    display: block;
    width: 100%;
    &-img {
      width: 100%;
    }
  }
</style>
