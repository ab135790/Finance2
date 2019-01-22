<template>
    <me-pancel class="pancel">
      <router-link to="/home" class="pancel-link">
        <img class="pancel-img" src="//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
        <div class="pancel-text">
          <p class="pancel-text-title">最高可借</p>
          <p class="pancel-text-money"><span class="i">￥</span>300,000</p>
          <button class="pancel-text-btn">立即登录</button>
        </div>
      </router-link>
      <me-swiper
        :direction="direction"
        :loop="loop"
        :interval="interval"
        :pagination="pagination"
        :freeMode="freeMode"
        class="pancel-slide"
      >
        <swiper-slide v-for="item of imgArr" :key="item.id">
          <router-link to="/home">
            <img class="swiper-img" :src="item.picUrl" alt="">
          </router-link>
        </swiper-slide>
      </me-swiper>
    </me-pancel>
</template>

<script>
  import MeSwiper from 'base/MeSwiper';
  import MePancel from 'base/MePancel';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions, imgArr} from '../config';
  export default {
    name: 'BorrowQuota',
    components: {
      MePancel,
      MeSwiper,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        freeMode: sliderOptions.freeMode,
        imgArr: imgArr
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    background: url(https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png) 0 0 no-repeat;
    background-size: 100% auto;
    margin-top: 90px;
    @include flex-center(column);
    &-link {
      position: relative;
      display: block;
    }
    &-text {
      position: absolute;
      left: 100px;
      top: 100px;
      color: $color;
      &-title {
        font-size: $ftSize-base-l;
      }
      &-money {
        font-size: $ftSize-large-XXL;
        text-shadow: 0 10px 6px rgba(63, 39, 0, 0.4);
        .i {
          font-size: 66px;
        }
      }
      &-btn {
        font-size: $ftSize-large-m;
        font-weight: 500;
        width: 230px;
        height: 68px;
        line-height: 68px;
        text-align: center;
        background: url(//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) 0 0 no-repeat;
        background-size: 100% 100%;
        border: none;
        color: $color;
      }
    }
    &-img{
      padding: 32px 33px 0;
      width: 100%;
      box-sizing: border-box;
    }
    &-slide {
      width: 100%;
    }
  }
  .swiper-img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
