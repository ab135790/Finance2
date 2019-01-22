<template>
  <transition name="backtop">
      <a href="javascript:;" class="backtops" @click="scrollTo" v-show="isShow">
        <img class="backtops-img" src="//m.jr.jd.com/spe/qyy/main/images/go_top.png" alt="">
      </a>
  </transition>
</template>

<script>
  export default {
    name: 'CtBacktop',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      scrollTo() {
        console.log('fsfs');
        this.$emit('scrollTop');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .backtops {
    position: fixed;
    right: 20px;
    bottom: $footer + 20px;
    width: 90px;
    height: 90px;
    z-index: $Zbacktop;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
    .backto-enter,
    .backtop-leave-to {
      opacity: 0;
    }
    .backtop-enter-active,
    .backtop-leave-active {
      transition: opacity .5s
    }
</style>
