<template>
  <div class="tabs">
    <div
      class="tabs-item"
      v-for="(item, index) in tabsTitles"
      :key="index"
      :class="{active:currentIndex === index} "
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    tabsTitles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 15px;
  position: sticky;
  top: 43px;
  z-index: 9;
  background: var(--bg-color);
}

.tabs-item {
  flex: 1;
}

.tabs-item span {
  padding: 8px;
}

.active span{
  color: var(--text-high-color);
  border-bottom: 3px solid var(--text-high-color);
}
</style>