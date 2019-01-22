<template>
  <me-pancel class="pancel">
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/23668/37/1940/41161/5c1750cbEcf75501c/de2ed0a9404eed25.gif?width=750&height=280" alt="">
    </router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'MakeAdvertisThree',
    components: {
      MePancel
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    @include pancel();
    padding-top: 20px;
    margin-bottom: 0;
  }
  .advertis {
    display: block;
    width: 100%;
    margin: 0 auto;
    &-img {
      width: 100%;
    }
  }
</style>
