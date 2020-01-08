<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-icon-active.svg" />
      <img slot="item-icon" src="~assets/img/tabbar/home-icon.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-icon-active.svg" />
      <img slot="item-icon" src="~assets/img/tabbar/category-icon.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-icon-active.svg" />
      <img slot="item-icon" src="~assets/img/tabbar/shopcart-icon.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-icon-active.svg" />
      <img slot="item-icon" src="~assets/img/tabbar/profile-icon.svg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>