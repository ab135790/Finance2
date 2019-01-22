<template>
    <div class="header">
      <div class="header-left">
        <slot name="left"></slot>
      </div>
      <div class="header-center">
        <slot name="center"></slot>
      </div>
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MeHeader'
  };
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgba(153, 153, 153, .2);
    box-sizing: border-box;
    &-left {
      margin-left: 10px;
      ~.header-center .header-right {
        position: static
      }
    }
    &-center {
      flex-grow: 1;
      text-align: center;
      &~ .header-right {
        position: static
      }
    }
    &-right {
      margin-right: 10px;
      position: absolute;
      right: 10px;
    }
    .iconfont {
      display:block;
    }
  }
</style>
