<template>
  <ul
    class="menu"
    v-show="menus"
  >
    <li class="menu-wrapper" v-for="item of navArr" :key="item.id">
      <i class="iconfont menu-wrapper-icon" :class="item.icon"></i>
      <span class="menu-wrapper-nav">{{item.nav}}</span>
    </li>
  </ul>
</template>

<script>
  import {navItem} from 'components/config';
  export default {
    name: 'MeMenu',
    data() {
      return {
        isMenuShow: false,
        navArr: navItem
      };
    },
    props: {
      menus: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .menu {
    position: absolute;
    right: 20px;
    top: 100px;
    background: rgba(0, 0, 0, .8);
    border-radius: 8px;
    z-index: $Zmenu;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid rgba(0, 0, 0, .8);
      position: absolute;
      top: -10px;
      right: 10px;
      z-index: $Zmenu;
    }
    &-wrapper {
      width: 250px;
      height: 80px;
      display: flex;
      color: $color;
      align-items: center;
      &-nav,
      &-icon {
        height: 80px;
        line-height: 80px;
        font-size: $ftSize-base-l;
      }
      &-icon {
        text-align: center;
        width: 80px;
        font-size: $ftSize-large-m;
      }
      &-nav {
        flex-grow: 1;
        border-bottom: 1px solid rgba(153, 153, 153, 0.8);
        box-sizing: border-box;
      }
    }
  }
</style>
