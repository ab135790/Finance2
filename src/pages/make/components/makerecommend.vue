<template>
    <me-pancel title="特色推荐" :isLeft="isLeft" class="pancel">
      <ul class="pancel-wrapper">
        <li class="pancel-wrapper-list" v-for="item of recommendArr" :key="item.id">
          <img class="pancel-wrapper-list-img" :src="item.picUrl" alt="">
          <p class="pancel-wrapper-list-title">{{item.title}}</p>
          <p class="pancel-wrapper-list-money"><span class="money">￥</span>{{item.money}} <span class="i">起</span></p>
          <div class="pancel-wrapper-list-progress">
            <p class="progress"><span class="progress-bar" :style="{width: item.num + 'px'}"></span></p>
            <span class="num">{{item.num}}<i class="i">%</i></span>
          </div>
        </li>
      </ul>
    </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import {recommendArr} from '../config';
  export default {
    name: 'MakeRecommend',
    components: {
      MePancel
    },
    data() {
      return {
        isLeft: true,
        activeWidth: 50,
        recommendArr: recommendArr
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    background: $bgColor;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: $bgColor-them;
        &-list {
        width: 49.5%;
        @include flex-center(column);
        padding: 30px;
        box-sizing: border-box;
        background: $bgColor;
        margin-bottom: 7.5px;
          &-img,
        &-title,
        &-money {
          padding-bottom: 20px;
        }
        &-img {
          width: 100%;
        }
        &-title {
          font-size: $ftSize-base-l;
          width: 100%;
          @include multiline-ellipsis();
        }
        &-money {
          width: 100%;
          font-size: $ftSize-base-l;
          text-align: left;
          @include ellipsis();
          color: #ff9a1c;
          font-weight: bold;
          .i,
          .money {
            font-size: $ftSize-base-m;
          }
          .i {
            color: #999;
          }
        }
        &-progress {
          width: 100%;
          @include flex-between();
          .progress {
            flex-grow: 1;
            background-color: #f3f5f7;
            border-radius: 20px;
            height: 10px;
            position: relative;
            overflow: hidden;
            &-bar {
              position: absolute;
              left: 0;
              top: 0;
              background-image: linear-gradient(270deg, #f55 1%, #ff9c31);
              height: 10px;
              border-radius: 20px;
            }
          }
          .num {
            font-size: $ftSize-base-m;
            color: #999;
          }
        }
      }
    }
  }
</style>
