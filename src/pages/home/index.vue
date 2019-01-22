<template>
    <div
      class="home"
      @click="bodyscrolls2"
    >
      <ct-header title='京东金融' :ishow="ishow"></ct-header>
      <home-swiper/>
      <home-icons/>
      <home-pancel/>
      <home-reward/>
      <home-insurance/>
      <home-popular/>
      <ct-footer/>
      <ct-backtop :isShow="isBackTop" @scrollTop="scrollTo"/>
    </div>
</template>

<script>
  import CtHeader from 'components/header';
  import CtFooter from 'components/footer';
  import CtBacktop from 'components/backtop';
  import HomeSwiper from 'pages/home/components/slider';
  import HomeIcons from 'pages/home/components/icons';
  import HomePancel from 'pages/home/components/pancel';
  import HomeReward from 'pages/home/components/reward';
  import HomeInsurance from 'pages/home/components/insurance';
  import HomePopular from 'pages/home/components/popular';
  export default {
    name: 'Home',
    components: {
      CtHeader,
      CtFooter,
      HomeSwiper,
      HomeIcons,
      HomePancel,
      HomeReward,
      HomeInsurance,
      HomePopular,
      CtBacktop
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
  .home {
    background-color: $bgColor-them;
  }
</style>
