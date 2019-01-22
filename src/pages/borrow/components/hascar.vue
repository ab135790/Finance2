<template>
  <me-pancel title="有车有钱" :isLeft="isLeft" class="pancel">
    <div class="pancel-stages">
      <img class="pancel-stages-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/26147/22/5476/26298/5c3ee5a2E89b2503e/3d31566224d39ff1.png?width=375&height=233" alt="">
      <img class="pancel-stages-img" src="//img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&height=233" alt="">
    </div>
    <me-swiper :interval="interval" :pagination="pagination" class="pancel-Swipers">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icons-item" v-for="item in page" :key="item.id">
          <div class="icons-item-wrapper">
            <img class="icons-item-wrapper-img" :src="item.picUrl" alt="">
          </div>
          <div class="icons-item-text-wrapper">
            <p class="icons-item-text-wrapper-title">{{item.name}}</p>
            <p class="icons-item-text-wrapper-item">{{item.item}}</p>
          </div>
        </div>
      </swiper-slide>
    </me-swiper>
  </me-pancel>
</template>

<script>
  import MeSwiper from 'base/MeSwiper';
  import MePancel from 'base/MePancel';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {icons, sliderOptions} from '../config';
  export default {
    name: 'HasCar',
    components: {
      MeSwiper,
      MePancel,
      swiperSlide
    },
    data() {
      return {
        isLeft: true,
        icons: icons,
        interval: 0,
        pagination: sliderOptions.pagination
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.icons.forEach((item, index) => {
          const page = Math.floor(index / 5);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
          console.log(pages[0]);
        });
        return pages;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    position: relative;
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    &:before {
      content: '';
      position: absolute;
      left:20px;
      top: 40px;
      width: 6px;
      height: 36px;
      background: url(//m.jr.jd.com/vip/borrowMoney/css/i/title.png) 0 0 no-repeat;
      background-size: 100% 100%;
      border-radius: 5px;
    }
    &-stages {
      @include flex-between();
      margin-bottom: 60px;
      &-img {
        width: 50%;
      }
    }
    &-Swipers {
        padding: 5px 0;
    }
    .icons-item {
      position: relative;
      overflow: hidden;
      float: left;
      width: 20%;
      height: 0;
      padding-bottom: 25%;
      &:nth-child(3) {
        color: red;
      }
      &-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 90px;
        box-sizing: border-box;
        padding: 2px;
        &-img {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icons-item-text-wrapper {
        font-size: $ftSize-base-m;
        &-item,
        &-title {
          position: absolute;
          left: 0;
          right: 0;
          @include ellipsis();
          text-align: center;
          height: 28px;
          line-height: 28px;
        }
        &-title{
          bottom: 45px;
          font-size: 28px;
        }
        &-item {
          bottom: 10px;
          font-size: $ftSize-base-m;
          color: red;
        }
      }
      .icons-item-text-wrapper-title:nth-child(3) {
        color: #f00;
      }
    }
  }
</style>
