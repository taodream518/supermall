<template>
  <div class="swiper-container" ref="slide">
    <div class="swiper-wrapper">
      <div class="swiper">
        <div
          class="swiper-item"
          v-for="(item, index) in banners"
          :key="index"
          v-show="currentIndex === index"
          :style="{transform:translateX}"
          @mouseenter.stop="pauseTimer"
          @mouseleave.stop="startTimer"
          @touchstart.stop="touchStart"
          @touchmove.stop="touchMove"
          @touchend.stop="touchEnd"
        >
          <img :src="item.image" />
        </div>
      </div>

      <!-- 指示器 -->
      <ul class="dots">
        <li
          class="dot"
          :class="{active: currentIndex === index}"
          v-for="(item, index) in banners"
          @click="gotoPage(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0, // 当前索引
      timer: null, // 定时器
      times: 2000,
      scenceWidth:0,
      startX: 0, //开始触摸的位置
      moveX: 0, //移动距离
      translateX: "translateX(0px)"
    };
  },
  mounted() {
    this.startTimer();
    this.scenceWidth = window.innerWidth;
  },
  computed: {
    prevIndex() {
      if (this.currentIndex == 0) {
        // 第一张
        return this.banners.length - 1; // 跳到最后一张
      } else {
        return this.currentIndex - 1;
      }
    },
    nextIndex() {
      if (this.currentIndex == this.banners.length - 1) {
        // 最后一张
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    // 开启定时器
    startTimer() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, this.times);
    },
    // 清除定时器
    pauseTimer() {
      clearInterval(this.timer);
    },

    // 滑动
    touchStart: function(event) {
      this.pauseTimer();
      this.startX = event.touches[0].pageX;
      console.log(this.startX);
    },
    touchMove: function(event) {
      this.moveX = event.touches[0].pageX - this.startX;
      if(this.moveX > 0){ // 右滑
        this.translateX = 'translateX('+ this.moveX + 'px)';
      }else{  // 左滑
        this.translateX = 'translateX('+ this.moveX + 'px)';
      }
      console.log(this.moveX);
    },
    touchEnd: function(event) {
      if(this.moveX > this.scenceWidth / 3){
        this.gotoPage(this.prevIndex);
        this.translateX = 'translateX('+ this.moveX + 'px)';
      }else if(this.moveX < - this.scenceWidth / 3) {
        this.gotoPage(this.nextIndex);
      }
      this.startTimer();
    }
  }
};
</script>

<style scoped>
.swiper-container {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.swiper-wrapper {
  position: relative;
  display: flex;
  box-sizing: content-box;
  z-index: 9;
}

.swiper {
  flex-shrink: 0;
  height: 100%;
  position: relative;
}

.swiper-item {
  width: 100vw;
  float: left;
}

.swiper-item img {
  width: 100%;
}

.dots {
  position: absolute;
  z-index: 99;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}

.dot {
  float: left;
  width: 0.6rem;
  height: 0.6rem;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
}

.active {
  background: #f60;
}
</style>