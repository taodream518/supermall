<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="styleColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
      default:''
    },
    activeColor:{
      type:String,
      default:'#f60'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    styleColor(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      // console.log(this.path);
      this.$router.replace(this.path).catch(err => err);
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0;
  vertical-align: middle;
}
</style>