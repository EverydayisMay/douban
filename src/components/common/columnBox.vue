<template>
  <section>
    <header>
      <h2>{{title}}</h2>
      <a href=""
         v-if="type==='movieImg'">更多</a>
    </header>
    <div class="section-content">

      <ul class="row items movieImg"
          v-if="type === 'movieImg'">
        <li class="item item_movie"
            v-for="item in items"
            :key='item.name'>
          <a href="">
            <div class="item-poster">
              <img :src="'https://images.weserv.nl/?url='+item.cover.url.substring(7)"
                   alt="">
            </div>
            <div class="item-title">{{item.title}}</div>
            <div class="item-rank">

              <rate :rate="item.rating"
                    v-if="item.price === null"
                    type="price" />
              <span v-else>￥{{item.price}}</span>
            </div>
          </a>
        </li>
      </ul>
      <ul class="row movieBorder"
          v-else-if="type === 'movieBorder'">
        <li v-for="item in items.slice(0, 4)"
            :key="item.name">
          <a :href="item.url"
             :style="getColor()">{{item.name}}</a>
        </li>
        <li class="line"></li>
        <li v-for="n in items.slice(4)"
            :key="n.name">
          <a :href="n.url"
             :style="getColor()">{{n.name}}</a>
        </li>
      </ul>
      <ul class="row types movieText"
          v-else>
        <li v-for="item in items"
            :key="item.name">
          <a :href="item.url">{{item.name}}
            <span></span>
          </a>
        </li>
        <li v-show="items.length%2 !== 0"></li>
      </ul>
    </div>
  </section>
</template>

<script>
import Rate from '@/components/common/rate'
export default {
  components: {
    Rate
  },
  props: [
    'title',
    'items',
    'type'
  ],
  data () {
    return {
      colors: [
        '#4F9DED',
        '#42BD56',
        '#FFC46C',
        '#FF4055',
        '#CC3344',
        '#2384E8',
        '#3BA94D',
      ]
    }
  },
  methods: {
    getColor () {
      let index = parseInt(Math.random() * 7)
      return {
        color: this.colors[index],
        borderColor: this.colors[index]
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  overflow: hidden;
  padding-top: 10px;
  header {
    padding: 0 18px;
    h2 {
      font-size: 18px;
      display: inline-block;
    }
    a {
      color: #42bd56;
      float: right;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
.section-content {
  margin-bottom: -20px;
}
.row {
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px 0 43px 0;
  .item {
    width: 100px;
    display: inline-block;
    margin-left: 8px;
    .item-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 15px;
      padding: 5px;
      text-align: center;
    }
    img {
      width: 100%;
      height: 142px;
    }
  }
  .item:first-child {
    margin-left: 18px;
  }
  .item:last-child {
    margin-right: 18px;
  }
}
.item-rank {
  text-align: center;
}

.movieBorder {
  padding: 15px 15px 45px 15px;
  overflow-x: auto;
  white-space: nowrap;
}
.movieBorder li {
  display: inline-block;
  margin: 3px 5px;
}
.movieBorder .line {
  display: block;
  width: 100%;
}
.movieBorder li:nth-child(4)::after {
  display: block;
}
.movieBorder a {
  border: 1px solid #eee;
  border-radius: 5px;
  display: block;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}

.types {
  padding-left: 18px;
}
.types li {
  width: 50%;
  float: left;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 20px 0 0;
  height: 40px;
  line-height: 40px;
}
.types li:nth-child(even) {
  border-right: none;
  padding-left: 18px;
}
.types li:nth-last-child(2),
.types li:nth-last-child(1) {
  border-bottom: 1px solid #eee;
}
.types li a {
  font-size: 15px;
  color: #42bd56;
  cursor: pointer;
  display: block;
}
.types li a span {
  float: right;
  width: 8px;
  height: 8px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  transform: rotate(-45deg);
  margin-top: 15px;
}
</style>
