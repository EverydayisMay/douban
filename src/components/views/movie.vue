<template>
  <div>
    <div class="cover">
      <column-box title="影院热映"
                  type="movieImg"
                  :items="hotMoviesData"></column-box>
      <column-box title="免费在线观影"
                  type="movieImg"
                  :items="freeMoviesData"></column-box>
      <column-box title="新片速递"
                  type="movieImg"
                  :items="newMoivesData"></column-box>
      <column-box title="发现好电影"
                  type="movieBorder"
                  :items="goodMoviesData"></column-box>
      <column-box title="分类浏览"
                  type="movieText"
                  :items="moviesTypes"></column-box>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'
import ColumnBox from '@/components/common/columnBox'
import { getHotMovies, getFreeMovies, getNewMovies, getMoviesTypes, getGoodMoives } from '@/assets/api/api.js'
export default {
  components: {
    Footer,
    ColumnBox
  },
  data () {
    return {
      hotMoviesData: [],
      newMoivesData: [],
      freeMoviesData: [],
      goodMoviesData: [],
      moviesTypes: []
    }
  },
  created () {
    this._getHotMovies()
    this._getNewMovies()
    this._getFreeMovies()
    this._getGoodMovies()
    this._getMoviesTypes()
  },
  methods: {
    _getHotMovies () {
      getHotMovies().then(res => {
        this.hotMoviesData = res.subject_collection_items;
      })
    },
    _getNewMovies () {
      getNewMovies().then(res => {
        this.newMoivesData = res.subject_collection_items;
      })
    },
    _getFreeMovies () {
      getFreeMovies().then(res => {
        this.freeMoviesData = res.subject_collection_items;
      })
    },
    _getGoodMovies () {
      getGoodMoives().then(res => {
        this.goodMoviesData = res.data
      })
    },
    _getMoviesTypes () {
      getMoviesTypes().then(res => {
        this.moviesTypes = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
