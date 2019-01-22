<template>
    <me-pancel title="-理财精选-" class="pancel">
      <div class="wapper">
        <dl class="pancel-list" v-for="item of pancel" :key="item.id">
          <dt class="pancel-list-title">{{item.title}} <span class="pancel-list-title-item">{{item.item}}</span></dt>
          <dd class="pancel-list-Number">{{item.Number}}</dd>
          <dd class="pancel-list-desc">{{item.desc}}</dd>
        </dl>
      </div>
    </me-pancel>
</template>

<script>
  import MePancel from 'base/MePancel';
  import {pancel} from '../config';
  export default {
    name: 'HomePancel',
    components: {
      MePancel
    },
    data() {
      return {
        pancel: pancel
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .pancel {
    @include pancel();
  }
  .wapper {
    background-color: $bgColor;
    flex-wrap: wrap;
    @include flex-center();
    width: 100%;
    box-sizing: border-box;
  }
  .pancel-list {
    width: 50%;
    padding-left: 30px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    &:nth-child(2n) {
     &:before {
       content: '';
       width: 2px;
       height: 70%;
       position: absolute;
       left: 5px;
       top: 20px;
       background-color: rgba(153, 153, 153, 0.15);
     }
    }
    &:nth-child(2),
    &:first-child {
      padding-bottom: 2px;
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: rgba(153, 153, 153, 0.15);
        z-index: 9;
      }
    }
    &-title {
      font-weight: bold;
      font-size: 30px;
      //line-height: 42px;
      //height: 42px;
      @include ellipsis();
      padding: 20px 0;
      &-item {
        display: inline-block;
        font-size: $ftSize-base-m;
        border: 1px solid $Rcolor;
        color: $Rcolor;
        min-width: 104px;
        padding: 2px;
        box-sizing: border-box;
      }
    }
    &-Number {
      color: $Rcolor;
      font-size: 44px;
      height: 58px;
      line-height: 58px;
      font-weight: 700;
      padding-bottom: 20px;

    }
    &-desc {
      color: #999;
      font-size: $ftSize-base-m;
      @include ellipsis();
      padding-bottom: 20px;
    }
  }
</style>
