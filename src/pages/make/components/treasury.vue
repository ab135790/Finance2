<template>
  <me-pancel title="小金库" :isLeft="isLeft" class="pancel">
    <div class="pancel-wrapper">
      <div  class="pancel-wrapper-advertis">
        <div class="pancel-wrapper-text">
          <p class="pancel-wrapper-text-percentage">3.0770<span>%</span></p>
          <p class="pancel-wrapper-text-profit">七日年化收益</p>
          <p class="pancel-wrapper-text-payment">支付/缴费/优质理财/大额理财</p>
        </div>
        <button class="pancel-wrapper-advertis-btn" alt="">开启送礼包</button>
      </div>
      <div class="pancel-wrapper-mepancel">
        <h3 class="pancel-wrapper-mepancel-title">稳健灵活 小白精选</h3>
        <ul class="pancel-wrapper-mepancel-list">
          <li class="pancel-wrapper-mepancel-list-limit" v-for="item of listArr" :key="item.id">
            <p class="pancel-wrapper-mepancel-list-limit-title">{{item.title}}</p>
            <button class="pancel-wrapper-mepancel-list-limit-btn">{{item.btn}}</button>
            <p class="pancel-wrapper-mepancel-list-limit-percentage">{{item.percentage}}<span class="pancel-wrapper-mepancel-list-limit-percentage-i">%</span></p>
            <p class="pancel-wrapper-mepancel-list-limit-profit">{{item.profit}}</p>
          </li>
        </ul>
      </div>
    </div>
    <router-link class="pancel-link" tag="div" to="/">前往APP查看更多理财<i class="iconfont">&#xe601;</i></router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import {listArr} from '../config';
  export default {
    name: 'MakeTreasury',
    components: {
      MePancel
    },
    data() {
      return {
        isLeft: true,
        listArr: listArr
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
    &-wrapper {
      padding: 0 30px;
      position: relative;
      &-advertis {
        background: url(//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png) no-repeat;
        background-size: cover;
        display: block;
        width: 100%;
        height: 200px;
        &-btn {
          position: absolute;
          right: 30px;
          top: 0;
          width: 332px;
          height: 200px;
          border-radius: 20px;
          border: none;
          background: url(//m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png) no-repeat;
          background-size: cover;
          color: $color;
          font-size: $ftSize-base-l;
        }
      }
      &-text {
        color: $color;
        padding: 20px;
        width: 50%;
        &-percentage {
          font-size: $ftSize-large-XL;
          position: relative;
          @include ellipsis();
          &:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 80%;
            height: 2px;
            background: $bgColor;
            opacity: 0.2;
          }
        }
        &-payment,
        &-profit {
          font-size: $ftSize-base-m;
          padding-top: 20px;
          @include ellipsis();
        }
        &-payment {
          @include ellipsis();
          opacity: 0.6;
        }
      }
      &-mepancel {
        &-title {
          font-size: $ftSize-base-l;
          height: 100px;
          line-height: 100px;
        }
        &-list {
          @include flex-center();
          justify-content: flex-start;
          width: 100%;
          &-limit {
            width: 33%;
            height: 260px;
            box-shadow: 0 0 10px .5px rgba(101, 118, 155, .15);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 20px 20px 0;
            box-sizing: border-box;
            &-title {
              font-size: $ftSize-large-m;
            }
            &-btn {
              min-width: 100px;
              height: 32px;
              border-radius: 22px;
              border: none;
              color: $color;
              font-size: $ftSize-base-m;
              background-image: linear-gradient(rgb(94, 143, 255), rgb(47, 111, 255));
              padding: 0;
              @include ellipsis();
            }
            &-percentage {
              color: #ff281e;
              font-size: 50px;
              font-weight: 400;
              &-i {
                font-size: $ftSize-base-l;
              }
            }
            &-profit {
              color: #999;
              font-size: $ftSize-base-m;
              @include ellipsis();
              width: 100%;
              box-sizing: border-box;
            }
          }
        }
      }
    }
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
</style>
