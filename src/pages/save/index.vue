<template>
  <div class="save" @click="bodyscrolls2">
    <ct-header title='省钱' :ishow="ishow"></ct-header>
    <save-swiper/>
    <save-coupons/>
    <save-pay/>
    <save-life/>
    <ct-backtop :isShow="isBackTop" @scrollTop="scrollTo"/>
  </div>
</template>

<script>
  import CtHeader from 'components/header';
  import CtBacktop from 'components/backtop';
  import SaveSwiper from 'pages/save/components/Sslider';
  import SaveCoupons from 'pages/save/components/coupons';
  import SavePay from 'pages/save/components/pay';
  import SaveLife from 'pages/save/components/life';
  export default {
    name: 'Save',
    components: {
      CtHeader,
      CtBacktop,
      SaveSwiper,
      SaveCoupons,
      SavePay,
      SaveLife
    },
    data() {
      return {
        isBackTop: false,
        ishow: false
      };
    },
    created() {
      this.bodyscrolls();
    },
    methods: {
      scrollTo() {
        document.documentElement.scrollTop = 0;
      },
      bodyscrolls() {
        window.addEventListener('scroll', () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          if (scrollTop > windowHeight) {
            this.isBackTop = true;
          } else {
            this.isBackTop = false;
          }
        });
      },
      bodyscrolls2() {
        this.ishow = !this.ishow;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .save {
    background-color: $bgColor-them;
  }
</style>
