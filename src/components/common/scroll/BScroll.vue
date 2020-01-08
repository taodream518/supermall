<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },

  methods: {
    // 创建BScroll实例并传入相关配置参数
    bScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        click: true
      });
    },
    // 回到顶部滚动的过程
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    // 实时监听滚动的位置
    onScroll() {
      let that = this;
      this.scroll.on("scroll", function(position) {
        // 用自定义事件把位置发射出去
        that.$emit("isShowBackTop", position);
      });
    }
  },
  mounted() {
    this.bScroll();
    this.onScroll();
  }
};
</script>

<style scoped>
</style>