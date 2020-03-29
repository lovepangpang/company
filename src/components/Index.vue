<template>
  <div>
    <div class="head-banner" >
      <div class="child">
        <p class="name" >宇倩玫瑰</p>
        <p class="come" >Welcome！</p>
      </div>
      <img :src="banner1" alt="图片">
    </div>
    <template>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide :key="index" v-for="(item, index) in slides"><img :src="item"></swiper-slide>
      </swiper>
    </template>
    <div class="category">
      <p class="category-title">冬季大片</p>
      <ul>
        <li><img :src="category1"><p>派克服</p></li>
        <li><img :src="category2"><p>羽绒服</p></li>
        <li><img :src="category3"><p>颗粒绒</p></li>
        <li><img :src="category4"><p>羽绒拼接</p></li>
      </ul>

    </div>
    <article class="story" >
        <p class="story-title" >品牌故事</p>
        <img :src="story">
        <p class="story-detail" >宇倩玫瑰始于2005年</p>
        <p class="story-detail" >目前已有超过百家加盟商门店</p>
        <p class="story-detail" >宇倩玫瑰以派克服，羽绒服为核心产品</p>
        <p class="story-detail" >倡导细腻文雅，简洁舒适的风格理念</p>
        <p class="story-detail" >设计师已东方女性特有气质特性为基本元素</p>
        <p class="story-detail" >融合西方浪漫主义的休闲元素</p>
        <p class="story-detail" >通过不同材质的重组，碰撞</p>
        <p class="story-detail" >赋予宇倩玫瑰产品特有的雅致韵味和品牌调性</p>
        <p class="story-detail" >引领当代女性实现舒适美的优质生活理念</p>
    </article>
    <article class="shop" >
        <p class="shop-title" >门店展示</p>
        <img :key="index" v-for=" (item, index) in shops" :src="item">
    </article>
  </div> 
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        width: 150,
        height: 400,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 2
      },
      title: '宇倩玫瑰',
      banner1: require('../assets/header.jpg'),
      story: require('../assets/story.png'),
      category1: require('../assets/category1.jpg'),
      category2: require('../assets/category2.jpg'),
      category3: require('../assets/category3.jpg'),
      category4: require('../assets/category4.jpg'),
      shops:[ require('../assets/shop1.jpg'), require('../assets/shop2.jpg'), require('../assets/shop3.jpg'), require('../assets/shop4.jpg'), require('../assets/shop5.jpg'), require('../assets/shop6.jpg'), require('../assets/shop7.jpg')],
      slides:[
        require('../assets/slide1.jpg'),
        require('../assets/slide2.jpg'),
        require('../assets/slide3.jpg'),
        require('../assets/slide4.jpg'),
        require('../assets/slide5.jpg'),
        require('../assets/slide6.jpg'),
        require('../assets/slide7.jpg'),
        require('../assets/slide8.jpg'),
        require('../assets/slide9.jpg'),
        require('../assets/slide11.jpg'),
        require('../assets/slide12.jpg')
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
  div {
    .head-banner{
      img {
        width: 100%;
        display: block;
      }
      width: 100%;
      margin-top: 40px;
      display: block;
      position: relative;
      .child {
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        padding-left: 50%;
        p {
          background: transparent;
          font-size: 20px;
          color: #fff;
          text-align: center;
          &.name {
            padding: 30px 0 30px 0;            
          }
        }
      }
    }
    .mint-swipe {
      padding-top: 45px;
      height: 224px;
      .slide1 {
        background: red;
      }
      img {
        height: 224px;
        width: 100%;
        display: block;
      }
    }
    .category {
      .category-title {
        font-weight: 700;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      ul {
        display: block;
        overflow: hidden;
      }
      li {
        float: left;
        width: 50%;
        position: relative;
        img {
          width: 100%;
          height: 220px;
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          background: rgba(0,0,0,0.5);
          position: absolute;
          bottom: 0px;
          left: 0;
          color: #fff;
        }
      }
    }
    .story {
      .story-title {
        font-weight: 700;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      img {
        margin-bottom: 10px;
        width: 100%;
      }
      p {
        text-align: center;
      }
      .story-detail {
        height: 30px;
        line-height: 30px;
      }
    }
    .shop {
      .shop-title{
        font-weight: 700;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
    @media screen and (min-width: 800px) {
      .category {
      .category-title {
        font-weight: 700;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      ul {
        display: block;
        overflow: hidden;
      }
      li {
        float: left;
        width: 25%;
        img {
          width: 100%;
          height: 330px;
        }
      }
    }
    }
  }
</style>