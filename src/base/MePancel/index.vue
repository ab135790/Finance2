<template>
    <div>
      <h3 class="pancel-title" :class="{pancelTitleLeft: isLeft, pancelTitleSize: isSize}" v-if="title">{{title}}</h3>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'MePancel',
    props: {
      title: {
        type: String,
        default: ''
      },
      isLeft: {
        type: Boolean,
        default: false
      },
      isSize: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel-title {
    position: relative;
    width: 100%;
    text-align: center;
    @include ellipsis();
    font-size: $ftSize-large-m;
    font-weight: 700;
    background-color: $bgColor;
    height: 112px;
    line-height: 112px;
    box-sizing: border-box;
  }
  .pancelTitleLeft {
    text-align: left;
    text-indent: 30px;
  }
  .pancelTitleSize {
    height: 130px;
    line-height: 130px;
    font-size: 50px;
  }
</style>
