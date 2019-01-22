<template>
  <me-pancel class="pancel">
    <div class="pancel-hisAn">
      <p class="pancel-hisAn-efficiency">6.00<sub>%</sub></p>
      <p class="pancel-hisAn-history">历史年化收益率</p>
      <p class="pancel-hisAn-ruch">立即抢购<i class="iconfont pancel-hisAn-ruch-go">&#xe601;</i></p>
    </div>
    <div class="pancel-swipers">
      <me-swiper
      :direction="direction"
      :loop="loop"
      :interval="interval"
      >
        <swiper-slide  v-for="item of historycalArr" :key="item.id">
          <div class="pancel-swipers-wrapper">
            <img class="pancel-swipers-wrapper-img" :src="item.picUrl" alt="">
            <p class="pancel-swipers-wrapper-text">{{item.name}}</p>
          </div>
        </swiper-slide>
      </me-swiper>
      <div class="pancel-swipers-recommend">
        <span class="pancel-swipers-recommend-desc">为您推荐</span>
        <img class="pancel-swipers-recommend-icon" src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/weinituijianxiayibu.png" alt="">
      </div>
    </div>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MeSwiper from 'base/MeSwiper';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {historycalArr} from 'pages/make/config';
  export default {
    name: 'MakeHisannual',
    components: {
      MePancel,
      MeSwiper,
      swiperSlide
    },
    data() {
      return {
        direction: 'vertical',
        interval: 3000,
        loop: true,
        historycalArr: historycalArr
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    @include pancel();
    @include flex-between();
    margin-bottom: 0;
    overflow: hidden;
    padding: 0 30px 20px;
    box-sizing: border-box;
    &-hisAn {
      background: url(data:image/png;base64,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) 50% no-repeat;
      background-size: cover;
      overflow: hidden;
      width: 240px;
      height: 200px;
      @include flex-center(column);
      align-items: flex-start;
      border-radius: 4px;
      padding: 30px;
      box-sizing: border-box;
      &-efficiency,
      &-history,
      &-ruch {
        color: $color;
        width: 100%;
      }
      &-efficiency {
        font-size: 70px;
        padding-bottom: 8px;
        >sub {
          font-size: $ftSize-base-m;
        }
      }
      &-ruch,
      &-history {
        font-size: $ftSize-base-m;
        padding-bottom: 24px;
        position: relative;
        @include ellipsis();
        &-go {
          font-size: $ftSize-base-m;
          position: absolute;
          right: 0;
        }
      }
      &-history {
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom : 4px;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
        }
      }
    }
    &-swipers {
      position: relative;
      flex-grow: 1;
      margin-left: 20px;
      padding: 20px;
      overflow: hidden;
      height: 200px;
      border-radius: 4px;
      box-sizing: border-box;
      background: url(data:image/png;base64,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) 50% no-repeat;
      .swiper-container {
        height: 100%;
      }
      .swiper-slide {
        height: 100%;
      }
      &-wrapper {
        overflow: hidden;
        display: flex;
        &-img {
          width: 160px;
          height: 160px;
        }
        &-text {
          flex-grow: 1;
          align-content: flex-start;
          font-size: $ftSize-base-m;
          color: $color;
          width: 100px;
          line-height: 1.1;
          @include multiline-ellipsis();
          padding: 10px 0 0 10px;
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
  }
</style>
