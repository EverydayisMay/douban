<template>
  <div>
    <ul class="subNav">
      <li class="subNavItem">
        <router-link to="">影院热映</router-link>
      </li>
      <li class="subNavItem">
        <router-link to="">近期值得看的美剧</router-link>
      </li>
      <li class="subNavItem">
        <router-link to="">豆瓣时间</router-link>
      </li>
      <li class="subNavItem">
        <router-link to="">使用豆瓣App</router-link>
      </li>
    </ul>
    <section id="recommend-feed">
      <div>
        <a :href="item.target.uri"
           v-for="item in recommendData"
           :key="item.id"
           class="feed-item">
          <recommend-list :item="item"></recommend-list>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { getRecommendData } from '@/assets/api/api.js'
import recommendList from '@/components/common/recommendList'

export default {
  components: {
    recommendList
  },
  data () {
    return {
      recommendData: []
    }
  },
  created () {
    this.startGetRecommendData()
  },
  methods: {
    startGetRecommendData () {
      getRecommendData().then((res) => {
        this.recommendData = res.recommend_feeds
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.subNav {
  padding: 20px 10px;
  overflow: hidden;
  justify-content: space-around;
  .subNavItem {
    float: left;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
    a {
      display: block;
      margin: 0 auto;
      padding: 10px;
      color: #494949;
      background: #f6f6f6;
    }
  }
}
#recommend-feed {
  min-height: 480px;
  color: #494949;
  padding: 0 15px;
  .feed-item {
    display: block;
    padding: 25px 0 25px 0;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
