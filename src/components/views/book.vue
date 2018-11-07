<template>
  <div>
    <column-box title="最受关注图书丨虚构类"
                type="movieImg"
                :items="fictionBookData"></column-box>
    <column-box title="最受关注图书丨非虚构类"
                type="movieImg"
                :items="noFictionBookData"></column-box>
    <column-box title="豆瓣书店"
                type="movieImg"
                :items="bookShopData"></column-box>
    <column-box title="发现好图书"
                type="movieBorder"
                :items="goodBookData"></column-box>
    <column-box title="分类浏览"
                type="movieText"
                :items="bookTypes"></column-box>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'
import ColumnBox from '@/components/common/columnBox'
import { getfictionBook, getnoFictionBook, getBookShop, getBookTypes, getGoodBook } from '@/assets/api/api.js'
export default {
  components: {
    ColumnBox,
    Footer
  },
  data () {
    return {
      fictionBookData: [],
      noFictionBookData: [],
      bookShopData: [],
      goodBookData: [],
      bookTypes: []
    }
  },
  created () {
    this._getfictionBook()
    this._getnoFictionBook()
    this._getBookShop()
    this._getBookTypes()
    this._getGoodBook()
  },
  methods: {
    _getfictionBook: function() {
      getfictionBook().then(res => {
        this.fictionBookData = res.subject_collection_items
      })
    },
    _getnoFictionBook () {
      getnoFictionBook().then(res => {
        this.noFictionBookData = res.subject_collection_items
      })
    },
    _getBookShop () {
      getBookShop().then(res => {
        this.bookShopData = res.subject_collection_items
      })
    },
    _getBookTypes () {
      getBookTypes().then(res => {
        this.bookTypes = res.data
      })
    },
    _getGoodBook () {
      getGoodBook().then(res => {
        this.goodBookData = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
