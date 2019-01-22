<template>
    <swiper :options="swiperOption" :class="{pagainations: isClass}">
      <slot></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  import {swiper} from 'vue-awesome-swiper';
  export default {
    name: 'MeSwiper',
    components: {
      swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: false
      },
      pagination: {
        type: Object
      },
      slidesPerView: {
        type: Number,
        default: 1
      },
      spaceBetween: {
        type: Number,
        default: 0
      },
      freeMode: {
        type: Boolean,
        default: false
      },
      isClass: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        swiperOption: {
          direction: this.direction,
          loop: this.loop,
          observe: true,
          observeParents: true,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          pagination: this.pagination ? this.pagination : {el: null},
          slidesPerView: this.slidesPerView,
          spaceBetween: this.spaceBetween,
          freeMode: this.freeMode,
          preloadImages: true,
          updateOnImagesReady: true,
          watchOverflow: true
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .pagainations {
    >.swiper-pagination-bullets {
      bottom: 40px;
      left: 0;
      width: 100%;
    }
  }
  .swiper-pagination .pagination-active {
    background: #fff !important;
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active {
    background: #fff !important;
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
  }
  #aa.swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
</style>
