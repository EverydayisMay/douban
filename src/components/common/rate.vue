<template>
  <span>
    <span v-if="rate !== null">
      <span class="star starY"
            v-for="n in starY"
            :key="'key'+n"></span>
      <span class="star starG"
            v-for="n in starG"
            :key="n+'key'"></span>
      <span class="rating">{{rate.value.toFixed(1)}}</span>
    </span>
    <span v-else>暂无评分</span>
  </span>
</template>

<script>
export default {
  props: [
    'rate'
  ],
  data () {
    return {
      starY: 0,
      starG: 0
    }
  },
  created () {
    let value = this.rate !== null && this.rate.value
    this.starY = parseInt(value / 2)
    this.starG = 5 - this.starY
  }
}
</script>

<style lang="less" scoped>
.star {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: contain;
  background-repeat: no-repeat;
}
.starY {
  background-image: url("./../../assets/img/star_1.png");
}
.starG {
  background-image: url("./../../assets/img/star_2.png");
}
.rating {
  margin-left: 3px;
}
</style>
