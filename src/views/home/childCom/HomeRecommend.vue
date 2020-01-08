<template>
  <div class="home-recommend">
    <div class="recommend" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.home-recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 0;
  border-bottom: 8px solid #f6f6f6;
  overflow: hidden;
}

.recommend{
  flex: 1;
}
.recommend img {
  width: 75%;
}

.recommend div{
  margin-top: 10px;
}
</style>