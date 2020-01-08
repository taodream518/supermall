<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <BScroll class="scroll-content" ref="scroll" :probeType="3" @isShowBackTop="isShowBackTop">
      <!-- 轮播图 -->
      <swiper :banners="banners" />
      <!-- 推荐 -->
      <home-recommend :recommends="recommends" />
      <!-- 本周流行 -->
      <home-feature />
      <!-- 选项卡 -->
      <tabs :tabsTitles="tabsTitles"></tabs>
    </BScroll>

    <back-top @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Tabs from "components/common/tabs/Tabs";
import BScroll from "components/common/scroll/BScroll";
import backTop from "components/common/backTop/backTop";

import HomeRecommend from "./childCom/HomeRecommend";
import HomeFeature from "./childCom/HomeFeature";

import { getListData } from "network/home";
import { getGoodsData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Tabs,
    HomeRecommend,
    HomeFeature,
    BScroll,
    backTop
  },
  data() {
    return {
      isShow: false,
      banners: [],
      recommends: [],
      tabsTitles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        pop: {
          page: 0,
          list: []
        }
      }
    };
  },
  created() {
    this.getList(); //获取轮播和推荐数据列表
    this.getGoods(); // 获取商品数据
  },
  methods: {
    /** 相关事件监听的方法 */
    // 回滚到顶部
    backTop(){
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 控制backtop图标显示和隐藏
    isShowBackTop(position){
      (- position.y) > 100 ? this.isShow =  true : this.isShow = false;
    },

    /** 网络请求相关方法 */

    // 轮播和推荐数据列表
    getList() {
      // 函数调用 -> 压入函数调用栈(保存函数调用过程中的所有变量)
      // 函数调用结束 -> 弹出函数栈(释放函数中所有的变量)
      getListData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    // 商品数据
    getGoods() {
      getGoodsData().then(res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh; /**viewport 视口 */
  position: relative;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: var(--high-bg-color);
  color: var(--text-color);
  transition: all 0.5s ease;
}

.scroll-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/**方案2 calc计算属性 */
/**
.scroll-content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>