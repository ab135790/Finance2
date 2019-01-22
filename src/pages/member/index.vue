<template>
  <div class="member" @click="bodyscrolls2">
    <ct-header title='金融会员' :ishow="ishow"></ct-header>
    <member-personal/>
    <ct-backtop :isShow="isBackTop" @scrollTop="scrollTo"/>
  </div>
</template>

<script>
  import CtHeader from 'components/header';
  import CtBacktop from 'components/backtop';
  import MemberPersonal from 'pages/member/components/personal';
  export default {
    name: 'Member',
    components: {
      CtHeader,
      CtBacktop,
      MemberPersonal
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
  .member {
    background-color: $bgColor-them;
  }
</style>
