<template>
    <me-pancel class="personal">
      <div class="personal-welfare"  v-for="item of personalArr" :key="item.id">
        <img class="personal-welfare-img" :src="item.portrait"/>
        <router-link to="home" class="personal-welfare-text">{{item.item}}<i class="iconfont">&#xe601;</i></router-link>
      </div>
        <ul class="personal-list">
          <li class="personal-list-item" v-for="list of listArr" :key="list.id">
            <img class="personal-list-item-img" :src="list.icon" alt=""/>
            <span class="personal-list-item-txt">{{list.title}}</span>
            <router-link to="home" class="personal-list-item-text">{{list.item}}<i class="iconfont">&#xe601;</i></router-link>
          </li>
        </ul>
    </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import {listArr, personalArr} from 'pages/member/config';
  export default {
    name: 'MemberPersonal',
    components: {
      MePancel
    },
    data() {
      return {
        listArr: listArr,
        personalArr: personalArr
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .personal {
    margin-top: 90px;
    &-welfare {
      @include pancel();
      height: 140px;
      padding: 0 20px;
      @include flex-between();
      &-img {
        width: 100px;
        height: 100px;
      }
      .iconfont,
      &-text {
        font-size: $ftSize-base-l;
        color: #999;
      }
    }
    &-list {
      @include flex-center(column);
      flex-wrap: wrap;
      width: 100%;
      &-item {
        width: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        background-color: $bgColor;
        height: 112px;
        border-bottom: 1px solid rgba(153, 153, 153, 0.1);
        &:last-child {
          margin-bottom: 20px;
          border-bottom: none;
        }
        &:nth-last-child(2) {
          margin: 20px 0;
        }
        &-img {
          width: 48px;
          height: 48px;
        }
        &-txt {
          flex-grow: 1;
          font-size: $ftSize-large-m;
          text-indent: 20px;
        }
        &-text {
          font-size: $ftSize-base-l;
          color: #999;
        }
        &:nth-last-child(3) {
          .personal-list-item-text {
            color: #FF801A;
            .iconfont {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
