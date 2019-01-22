<template>
    <me-pancel title="精品活动" :isLeft="isLeft" class="pancel">
      <router-link to="home" class="pancel-link">
        <img class="pancel-img" src="//img12.360buyimg.com/jrpmobile/jfs/t1/11683/4/3169/62437/5c1b2ddcEf8a48b38/ccab51775dd74d0b.png?width=730&height=264" alt="">
      </router-link>
    </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  export default {
    name: 'BorrowBoutique',
    components: {
      MePancel
    },
    data() {
      return {
        isLeft: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    background: $bgColor;
    margin-bottom: $mabt;
    &-link {
      display: block;
    }
    &-img {
      width: 100%;
    }
  }
</style>
