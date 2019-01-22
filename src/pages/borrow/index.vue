<template>
  <div class="borrow" @click="bodyscrolls2">
    <ct-header title='借钱' :ishow="ishow"></ct-header>
    <borrow-quota/>
    <has-car/>
    <borrow-whitestrip/>
    <borrow-boutique/>
    <ct-backtop :isShow="isBackTop" @scrollTop="scrollTo"/>
  </div>
</template>

<script>
  import CtHeader from 'components/header';
  import CtBacktop from 'components/backtop';
  import BorrowQuota from 'pages/borrow/components/quota';
  import HasCar from 'pages/borrow/components/hascar';
  import BorrowWhitestrip from 'pages/borrow/components/whiteStrip';
  import BorrowBoutique from 'pages/borrow/components/Boutique';
  export default {
    name: 'Borrow',
    components: {
      CtHeader,
      CtBacktop,
      BorrowQuota,
      HasCar,
      BorrowWhitestrip,
      BorrowBoutique
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
  .borrow {
    background-color: $bgColor-them;
  }
</style>
