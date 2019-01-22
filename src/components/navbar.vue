<template>
    <div class="navbar">
      <ul class="navbar-title">
        <router-link :to="item.path" tag="li" v-for="item of navbarItem" :key="item.id" class="navbar-title-link">
          <img :src="item.picUrl" alt="" class="navbar-title-link-img">
          <p class="navbar-title-link-txt">{{item.name}}</p>
        </router-link>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'CtNavbar',
    data() {
      return {
        navbarItem: [
          {
            id: '01',
            picUrl: '//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
            name: '首页',
            path: '/home'
          },
          {
            id: '02',
            picUrl: '//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
            name: '赚钱',
            path: '/make'
          },
          {
            id: '03',
            picUrl: '//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
            name: '借钱',
            path: '/borrow'
          },
          {
            id: '04',
            picUrl: '//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
            name: '省钱',
            path: '/save'
          },
          {
            id: '05',
            picUrl: '//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
            name: '金融会员',
            path: '/member'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .navbar {
    width: 100%;
    background-color: $bgColor;
    &-title {
      height: $footer;
      @include flex-center();
      &-link {
        height: 100%;
        width: 20%;
        @include flex-center(column);
        font-size: $ftSize-base-m;
        &-img {
          width: 44px;
        }
        &-txt {
          margin-top: 10px;
          color: #B1B4BB;
        }
      }
    }
  }
  .router-link-active >>> .navbar-title-link-txt {
    color: #FF5155 !important;
  }
</style>
