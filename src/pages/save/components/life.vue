<template>
  <me-pancel title="便利生活" :isLeft="isLeft" class="life-pancel">
    <me-swiper :interval="interval" class="life-pancel-Swipers">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icons-item" v-for="item in page" :key="item.id">
          <div class="icons-item-wrapper">
            <img class="icons-item-wrapper-img" :src="item.picUrl" alt="">
          </div>
          <div class="icons-item-text-wrapper">
            <p class="icons-item-text-wrapper-title">{{item.name}}</p>
          </div>
        </div>
      </swiper-slide>
    </me-swiper>
    <div class="life-pancel-stages">
      <img class="life-pancel-stages-img" src="//img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="">
    </div>
  </me-pancel>
</template>

<script>
  import MeSwiper from 'base/MeSwiper';
  import MePancel from 'base/MePancel';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {lifeIcons} from '../config';
  export default {
    name: 'SaveLife',
    components: {
      MeSwiper,
      MePancel,
      swiperSlide
    },
    data() {
      return {
        isLeft: true,
        lifeIcons: lifeIcons,
        interval: 0
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.lifeIcons.forEach((item, index) => {
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
  .life-pancel {
    position: relative;
    width: 100%;
    background-color: $bgColor;
    margin-bottom: $mabt;
    &-stages {
      margin-bottom: 60px;
      &-img {
        width: 100%;
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
