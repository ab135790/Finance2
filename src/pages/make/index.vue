<template>
  <div class="make" @click="bodyscrolls2">
    <ct-header title='赚钱' :visible="advertising" :ishow="ishow"></ct-header>
    <make-swiper/>
    <make-signin/>
    <make-icons/>
    <make-advertis/>
    <make-hisannual/>
    <make-advertis-two/>
    <make-advertis-three/>
    <make-reward/>
    <make-whitestrip/>
    <make-treasury/>
    <make-insurance/>
    <make-recommend/>
    <ct-footer/>
    <ct-backtop :isShow="isBackTop" @scrollTop="scrollTo"/>
  </div>
</template>

<script>
  import CtHeader from 'components/header';
  import CtFooter from 'components/footer';
  import CtBacktop from 'components/backtop';
  import MakeSwiper from 'pages/make/components/slider';
  import MakeSignin from 'pages/make/components/signIn';
  import MakeIcons from 'pages/make/components/icons';
  import MakeAdvertis from 'pages/make/components/advertis';
  import MakeHisannual from 'pages/make/components/historicalAnnualization';
  import MakeAdvertisTwo from 'pages/make/components/advertis-two';
  import MakeAdvertisThree from 'pages/make/components/advertis-three';
  import MakeReward from 'pages/make/components/makereward';
  import MakeWhitestrip from 'pages/make/components/whiteStrip';
  import MakeTreasury from 'pages/make/components/treasury';
  import MakeInsurance from 'pages/make/components/makeinsurance';
  import MakeRecommend from 'pages/make/components/makerecommend';
  export default {
    name: 'Make',
    components: {
      CtHeader,
      CtFooter,
      MakeSwiper,
      CtBacktop,
      MakeSignin,
      MakeIcons,
      MakeAdvertis,
      MakeHisannual,
      MakeAdvertisTwo,
      MakeAdvertisThree,
      MakeReward,
      MakeWhitestrip,
      MakeTreasury,
      MakeInsurance,
      MakeRecommend
    },
    data() {
      return {
        isBackTop: false,
        advertising: true,
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
  .make {
    background-color: $bgColor-them;
  }
</style>
