<template>
  <me-pancel title="保险保障" class="pancel" :isLeft="isLeft">
    <div class="pancel-wrapper">
      <div class="pancel-WhiteStrip">
        <p class="pancel-WhiteStrip-money">200万</p>
        <p class="pancel-WhiteStrip-personal">个人账户安全险</p>
        <button class="pancel-WhiteStrip-Sign">立即查看</button>
        <div class="pancel-WhiteStrip-link">今日推荐</div>
      </div>
      <ul class="pancel-list">
        <li class="pancel-list-wrapper" v-for="item of insuranceArr" :key="item.id">
          <img class="pancel-list-wrapper-img" :src="item.img" alt="">
          <p class="pancel-list-wrapper-text">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/29266/18/3258/25520/5c24b675Ebf5adb3b/d3171bed6dc16839.jpg?width=750&height=200" alt="">
    </router-link>
    <div class="pancel-mepancel">
      <h3 class="pancel-mepancel-title">热销保险</h3>
      <me-swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :freeMode="freeMode"
      >
        <swiper-slide v-for="item of insuranceImg" :key="item">
          <router-link tag="img" to="/" class="rewardImg-img" :src="item" alt=""></router-link>
        </swiper-slide>
      </me-swiper>
    </div>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {insuranceArr, insuranceImg, rewardOptions} from '../config';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: 'MakeWhitestrip',
    components: {
      MePancel,
      MeSwiper,
      swiper,
      swiperSlide
    },
    data() {
      return {
        isLeft: true,
        insuranceArr: insuranceArr,
        insuranceImg: insuranceImg,
        slidesPerView: rewardOptions.slidesPerView,
        spaceBetween: rewardOptions.spaceBetween,
        freeMode: rewardOptions.freeMode
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    padding-bottom: 20px;
    &-wrapper {
      @include flex-between();
      padding: 0 30px 40px;
    }
    &-WhiteStrip {
      position: relative;
      background: $bgColor;
      background-size: cover;
      overflow: hidden;
      width: 212px;
      height: 260px;
      box-shadow: 0 0 12px 4px rgba(101,118,155,.15);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      &-link {
        position: absolute;
        min-width: 96px;
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        top: 0;
        left: 0;
        color: $color;
        font-size: $ftSize-base-m;
        background: black;
        @include ellipsis();
      }
      &-money {
        font-size: $ftSize-large-XL;
        color: #1bd5c7;
        margin-top: 20px;
        max-width: 180px;
        @include ellipsis();
      }
      &-personal {
        font-size: $ftSize-base-m;
        @include ellipsis();
      }
      &-Sign {
        font-size: $ftSize-base-m;
        background: #1bd5c7;
        text-align: center;
        height: 50px;
        line-height: 50px;
        min-width: 140px;
        border: none;
        border-radius: 30px;
        color: $color;
        @include ellipsis();
      }
    }
    &-list {
      position: relative;
      flex-grow: 1;
      margin-left: 20px;
      //padding: 20px;
      overflow: hidden;
      height: 260px;
      border-radius: 4px;
      box-sizing: border-box;
      background: $bgColor;
      box-shadow: 0 0 12px 4px rgba(101,118,155,.15);
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      &-wrapper {
        width: 33.33%;
        overflow: hidden;
        @include flex-center(column);
        &-img {
          width: 56px;
          height: 56px;
        }
        &-text {
          font-size: $ftSize-base-m;
          line-height: 1.5;
          @include ellipsis();
        }
      }
      &-recommend {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: $makeRecommend;
        @include flex-between();
        &-desc {
          font-size: $ftSize-base-m;
          color: $color;
          padding-top: 30px;
          max-width: 120px;
          @include ellipsis();
        }
        &-icon {
          width: 114px;
        }
      }
    }
    &-mepancel {
      padding: 10px;
      &-title {
        font-size: $ftSize-base-m;
        padding: 20px 20px;
      }
    }
  }
  .advertis {
    display: block;
    width: 100%;
    &-img {
      width: 100%;
    }
  }
  .swiper-container {
    width: auto;
    padding: 0 20px;
  }
  .rewardImg-img {
    width: 100%;
    height: 100%;
  }
</style>
