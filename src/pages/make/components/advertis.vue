<template>
  <me-pancel class="pancel">
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/25749/38/4629/22863/5c343798E7a1e1bd6/867cdc8c06f4f4b3.png?width=750&height=200" alt="">
    </router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'MakeAdvertis',
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
