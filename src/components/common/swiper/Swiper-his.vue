<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          :key="index"
          class="indi-item"
          :class="{active:index===currentIndex-1}"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration:{
      type: Number,
      default: 300
    },
    moveRatio:{
      type: Number,
      default: 0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }

  },

  data(){
    return {
      slideCount:0, // 元素个数
      totalWidth:0, // swiper宽度
      swiperStyle:{}, // swiper样式
      currentIndex:1, // 当前的index
      scrolling: false, // 是否正在滚动
    }
  },

  mounted() {
    // 1.操作dom,在前后添加slide
    setTimeout(() => {
      this.handDom();

      // 2.开启定时器
      this.startTimer();
    }, 100)
  },

  methods: {
    // 定时器操作
    startTimer(){
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);

      }, this.interval)
    }
  },
};
</script>

<style scoped>
</style>