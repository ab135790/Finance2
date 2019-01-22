<template>
  <me-pancel title="白条服务" class="pancel" :isLeft="isLeft">
    <div class="pancel-wrapper">
      <div class="pancel-img">
        <img class="img" src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
      </div>
      <div class="pancel-wrapper-WhiteStrip">
        <p class="pancel-wrapper-WhiteStrip-credit">小白信用分</p>
        <button class="pancel-wrapper-WhiteStrip-Sign">登录查看</button>
      </div>
    </div>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import MakeCanvas from 'components/canvas';
  export default {
    name: 'BorrowWhitestrip',
    components: {
      MePancel,
      MakeCanvas
    },
    data() {
      return {
        isLeft: true
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
    &-wrapper {
      display: flex;
      justify-content: center;
      &-WhiteStrip {
        position: relative;
        width: 260px;
        height: 310px;
        background: url(//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png);
        background-size: 100% 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
        &-credit {
          font-size: $ftSize-base-m;
          color: #ffeac9;
          margin-top: 60px;
          max-width: 180px;
          @include ellipsis();
        }
        &-Sign {
          font-size: $ftSize-base-m;
          text-align: center;
          height: 50px;
          line-height: 50px;
          width: 140px;
          border: none;
          background: $bgColor;
          border-radius: 30px;
          margin-bottom: 20px;
          color: #d4b575;
          @include ellipsis();
        }
      }
    }
    &-img {
      width: 460px;
      .img {
        width: 100%;
      }
    }
  }
</style>
