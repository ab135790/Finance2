<template>
  <div class="wapper">
    <me-header>
      <div slot="left">
        <i class="iconfont icon">&#xe600;</i>
      </div>
      <div slot="center">
        <h4 class="title">{{title}}</h4>
      </div>
      <div slot="right">
        <i class="iconfont icon" @click.stop="alertMenu">&#xe637;</i>
      </div>
    </me-header>
    <div class="wapper-advertising" v-show="visible">
      <img class="wapper-advertising-img" src="//img12.360buyimg.com/jrpmobile/jfs/t28858/7/1058667857/15792/606d0f10/5c050f76Ndb650556.png?width=750&height=120" alt="">
    </div>
    <me-menu
    :menus="menuVisible" />
  </div>
</template>
<script>
  import MeHeader from 'base/MeHeader';
  import MeMenu from 'components/menu';
  export default {
    name: 'CtHeader',
    components: {
      MeHeader,
      MeMenu
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
      ishow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuVisible: false
      };
    },
    methods: {
      alertMenu() {
        if (this.menuVisible) {
          this.menuVisible = false;
        } else {
          this.menuVisible = true;
        }
      },
      closeMenu() {
        if (this.menuVisible) {
          this.menuVisible = false;
        }
      }
    },
    watch: {
      ishow: 'closeMenu'
    }
  };
</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .wapper {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: $bgColor;
    &-advertising {
      position: absolute;
      left:0;
      top: $header;
      &-img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .back-icon {
    font-weight: bold;
    font-size: 30px;
  }
  .title {
    font-size: 36px;
  }
  .icon {
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
