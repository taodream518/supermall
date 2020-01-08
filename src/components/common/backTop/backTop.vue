<template>
  <div class="back-top" ref="backTop">
    <img src="~assets/img/common/top.png" alt="回到顶部">
  </div>
</template>

<script>
export default {
  name: 'backTop',
}
</script>

<style scoped>
.back-top{
  width: 43px;
  height: 43px;
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 99;
}

.back-top img{
  width: 100%;
}
</style>