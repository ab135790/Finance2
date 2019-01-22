<template>
  <me-pancel class="pancel">
    <router-link to="home" tag="div" class="advertis">
      <img class="advertis-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/19177/30/1905/31495/5c16fa39E36adbf51/d50e36f5b8f6de0d.jpg?width=750&height=200" alt="">
    </router-link>
  </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'MakeAdvertisTwo',
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
