<template>
    <div class="wrapper">
      <me-swiper :interval="interval" class="wrapper-Swipers">
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
    </div>
</template>

<script>
  import {icons} from '../config';
  import {swiperSlide} from 'vue-awesome-swiper';
  import MeSwiper from 'base/MeSwiper';
  export default {
    name: 'HomeIcons',
    components: {
      swiperSlide,
      MeSwiper
    },
    data() {
      return {
        icons: icons,
        interval: 0
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.icons.forEach((item, index) => {
          const page = Math.floor(index / 8);
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
  .wrapper {
    margin-bottom: $mabt;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: $bgColor;
    &-Swipers {
      padding-top: 20px;
    }
  }
  .icons-item {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
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
</style>
