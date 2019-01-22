<template>
  <me-pancel title="白条" class="pancel" :isLeft="isLeft">
    <div class="pancel-wrapper">
      <div class="pancel-WhiteStrip">
        <make-canvas class="pancel-WhiteStrip-canvas"/>
        <p class="pancel-WhiteStrip-credit">小白信用分</p>
        <button class="pancel-WhiteStrip-Sign">登录查看</button>
      </div>
      <ul class="pancel-list">
        <li class="pancel-list-wrapper" v-for="item of whiteStripArr" :key="item.id">
          <img class="pancel-list-wrapper-img" :src="item.picUrl" alt="">
          <p class="pancel-list-wrapper-text">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
    </router-link>
    <router-link class="pancel-link" tag="div" to="/">年轻不留白<i class="iconfont">&#xe601;</i></router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MakeCanvas from 'components/canvas';
  import {whiteStripArr} from 'pages/make/config';
  export default {
    name: 'MakeWhitestrip',
    components: {
      MePancel,
      MakeCanvas
    },
    data() {
      return {
        isLeft: true,
        whiteStripArr: whiteStripArr
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
      min-width: 100px;
      height: 260px;
      box-shadow: 0 0 12px 4px rgba(101,118,155,.15);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      &-canvas {
        position: absolute;
        left: 0px;
        top: 10px;
      }
      &-credit {
        font-size: $ftSize-base-m;
        color: #c4a36c;
        margin-top: 60px;
        max-width: 180px;
        @include ellipsis();
      }
      &-Sign {
        font-size: $ftSize-base-m;
        background: #d4b575;
        text-align: center;
        height: 50px;
        line-height: 50px;
        min-width: 140px;
        border: none;
        border-radius: 30px;
        margin-top: 60px;
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
  }
  .advertis {
    display: block;
    width: 100%;
    &-img {
      width: 100%;
    }
  }
</style>
