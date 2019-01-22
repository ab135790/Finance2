<template>
  <me-pancel class="pay-pancel" title="支付优惠" :isLeft="isLeft">
    <router-link class="pay-pancel-img" to="home" tag="div">
      <img class="img" src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
    </router-link>
    <div class="pay-pancel-content">
      <div class="pay-pancel-content-left">
        <img class="img"  src="//img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&height=420" alt="">
      </div>
      <div class="pay-pancel-content-right">
        <img class="img"  src="//img12.360buyimg.com/jrpmobile/jfs/t1/10835/30/6723/11247/5c244816E1faf5ca3/0982f1ffc9388654.png?width=335&height=200" alt="">
        <img class="img"  src="//img12.360buyimg.com/jrpmobile/jfs/t1/28968/19/5507/49359/5c3ff8ddE1383ffbf/0beb74acee81f402.png?width=335&height=210" alt="">
      </div>
    </div>
  </me-pancel>
</template>
<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'SavePay',
    components: {
      MePancel
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
  .pay-pancel {
    @include pancel();
    @include flex-center(column);
    &-img {
      display: block;
      .img {
        width: 100%;
      }
    }
    &-content {
      @include flex-between();
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: 50%;
        top: 0;
        background: $bgColor-them;
        width: 10px;
        height: 100%;
        z-index: 9;
      }
      &:before {
        content: '';
        position: absolute;
        right: 30px;
        top: 50%;
        background: $bgColor-them;
        width: 46%;
        height: 10px;
        z-index: 9;
      }
      &-left {
        width:48%;
        .img {
          width: 100%;
        }
      }
      &-right {
        width:48%;
        padding-right: 30px;
        position: relative;
        .img {
          width: 100%;
        }
      }
    }
  }
</style>
