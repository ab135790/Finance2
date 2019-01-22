<template>
  <me-pancel class="coupons-pancel">
    <router-link class="coupons-pancel-img" to="home" tag="div">
      <img class="img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/23431/8/4065/30807/5c2ef1b3E80c47139/c901b71c2172da4c.png?width=704&height=246" alt="">
    </router-link>
    <div class="coupons-pancel-content">
      <img class="img"  src="//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480" alt="">
      <img class="img"  src="//img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="">
    </div>
  </me-pancel>
</template>
<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'SaveCoupons',
    components: {
      MePancel
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .coupons-pancel {
    @include pancel();
    @include flex-center(column);
    &-img {
      display: block;
      .img {
        width: 100%;
      }
    }
    &-content {
      @include flex-center();
      .img {
        width: 50%;
      }
    }
  }
</style>
