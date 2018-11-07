<template>
  <div>
    <div v-if="hasImg">
      <div class="rightImg">
        <img :src="imgUrl"
             alt="">
      </div>
      <div class="leftContent">
        <h3 class="title">{{listItem.title}}</h3>
        <p class="desc">{{listItem.target.desc}}</p>
      </div>
    </div>
    <div v-else>
      <div class="leftContent"
           style="width:100%;">
        <h3 class="title">{{listItem.title}}</h3>
        <p class="desc">{{listItem.target.desc}}</p>
      </div>
    </div>
    <div class="author">
      <span>by {{listItem.target.author.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ],
  data () {
    return {
      imgUrl: '',
      listItem: this.item,
      hasImg: this.item.target.cover_url ? true : false
    }
  },
  methods: {
    getImgUrl: function() {
      let _u = this.listItem.target.cover_url.substring(7)
      return this.imgUrl = 'https://images.weserv.nl/?url=' + _u
    }
  },
  mounted () {
    this.getImgUrl()
  }
}
</script>

<style lang="less" scoped>
.rightImg {
  float: right;
  width: 26%;
  margin-left: 20px;
  img {
    width: 100%;
  }
}
.leftContent {
  h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 6px;
  }
  p {
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
.author {
  color: #ccc;
  padding-top: 10px;
}
</style>
