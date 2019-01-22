<template>
    <footer class="footer">
      <ul class="footerContent">
        <li class="footerContent-item" v-for="item of footerArr" :key="item">{{item}}</li>
      </ul>
    </footer>
</template>

<script>
  export default {
    name: 'CtFooter',
    data() {
      return {
        footerArr: [
          'Copyright © 2004-2018 京东JD.com 版权所有',
          '投资有风险，购买需谨慎',
          '京东金融平台服务协议',
          '京东金融隐私政策'
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .footerContent {
    @include flex-center(column);
    flex-wrap: wrap;
    &-item {
      flex-grow: 1;
      width: 100%;
      border-top: 1px solid rgba(153, 153, 153, .4);
      padding: 24px 32px;
      line-height: 1.6;
      color: #999;
      font-size: $ftSize-base-m;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>
