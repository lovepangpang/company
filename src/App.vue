<template>
  <div id="app">
    <header>
      <div class="header-top"></div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide><img src="./assets/index/head1.jpg"></swiper-slide>
        <swiper-slide><img src="./assets/index/head2.jpg"></swiper-slide>
      </swiper>
    </header>
    <!-- <ul class="menu">
      <li>
        <router-link to="/" >
          首页
        </router-link>
      </li>
      <li>
        <router-link to="/products" >
          产品
        </router-link>
      </li>
      <li>
        <router-link to="/introduce" >
          简介
        </router-link>
      </li>
      <li>
        <router-link to="/join" >
          加盟
        </router-link>
      </li>
    </ul> -->
    <section>
        <p class="title">
          关于我们<span>/About Us</span>
        </p>
        <article class="story" >
          <img :src="story">
          <p class="story-detail" >宇倩玫瑰始于2010年</p>
          <p class="story-detail" >目前已有百家加盟商门店</p>
          <p class="story-detail" >宇倩玫瑰以派克服，羽绒服为核心产品</p>
          <p class="story-detail" >倡导细腻文雅，简洁舒适的风格理念</p>
          <p class="story-detail" >设计师已东方女性特有气质特性为基本元素</p>
          <p class="story-detail" >融合西方浪漫主义的休闲元素</p>
          <p class="story-detail" >通过不同材质的重组，碰撞</p>
          <p class="story-detail" >赋予宇倩玫瑰产品特有的雅致韵味和品牌调性</p>
          <p class="story-detail" >引领当代女性实现舒适美的优质生活理念</p>
        </article>
         <p class="title">
          四大优势 <span>/Four Advantages</span>
        </p>
        <ul class="advantages">
          <li>
            <img src="./assets/index/A.png" alt="">
            <p class="name" >
              <strong>货源优势</strong>
            </p>
            <p class="detail">
              每一季度定期推陈出新，前沿较流行时尚服装，每一款裁剪设计都唯美经典，打造魅力女人
            </p>
          </li>
          <li>
            <img src="./assets/index/B.png" alt="">
            <p class="name" >
              <strong>管理优势</strong>
            </p>
            <p class="detail">
              健全一体化管理模式，导入管理工具，通过市场分析，保证产品的正规性，维护客户及消费者的权益
            </p>
          </li>
          <li>
            <img src="./assets/index/C.png" alt="">
            <p class="name" >
              <strong>试货制度</strong>
            </p>
            <p class="detail">
              每一个季度的推出新款按较低配置，让经营者先试行卖，避免造成加盟商大量库存挤压
            </p>
          </li>
          <li>
            <img src="./assets/index/D.png" alt="">
            <p class="name" >
              <strong>优质服务</strong>
            </p>
            <p class="detail">
              专业团队，为经营者提供运营帮助；庞大售后团队，帮助经营者解决后顾之忧；常年免费培训，提升销售技巧
            </p>
          </li>
        </ul>
        <p class="title">
          产品类别<span>/Products Type</span>
        </p>
        <ul class="types">
          <li><img src="./assets/products/type4.jpg" alt=""></li>
          <li><img src="./assets/products/type2.jpg" alt=""></li>
          <li><img src="./assets/products/type3.jpg" alt=""></li>
          <li><img src="./assets/products/type1.jpg" alt=""></li>
        </ul>
        <p class="title">
          新产品<span>/News Product</span>
        </p>
        <ul class="products">
          <li><img src="./assets/products/1-1.jpeg" alt=""></li>
          <li><img src="./assets/products/1-2.jpeg" alt=""></li>
          <li><img src="./assets/products/1-3.jpeg" alt=""></li>
          <li><img src="./assets/products/1-4.jpeg" alt=""></li>
          <li><img src="./assets/products/1-5.jpeg" alt=""></li>
          <li><img src="./assets/products/1-6.jpeg" alt=""></li>
        </ul>
        <p class="title">
          品牌材料<span>/Company Means</span>
        </p>
        <div class="means">
          <p>品牌吊牌</p>
          <img class="means1" src="./assets/products/吊牌.png" alt="">
        </div>
    </section>
    <img class="join" src="./assets/products/640.gif" alt="">
    <div class="thanks">
      <p class="thanks-title">精心设计 倾情演绎</p>
      <p class="thanks-detail" >我们始终坚信，有付出就有回报。感谢每一位关注、关怀宇倩玫瑰的客户，宇倩玫瑰愿与各位客户进行真诚合作，我们将通过对服饰产品的高标准要求，来为客户创造价值，助您事业更成功 !</p>
    </div>
    <!-- <router-view></router-view> -->
    <footer>
        <p>地址：河南省郑州市世贸中心四楼M4050</p>
        <p>联系电话：0371-63686519</p>
        <p>联系人：刘女士</p>
        <p class="copy">Copyright © 2010-2020 版权所有© </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true
      },
      title: '宇倩玫瑰',
      banner1: require('./assets/banner1.jpg'),
      story: require('./assets/story.png'),
      shops:[ require('./assets/shop1.jpg'), require('./assets/shop2.jpg'), require('./assets/shop3.jpg'), require('./assets/shop4.jpg'), require('./assets/shop5.jpg'), require('./assets/shop6.jpg'), require('./assets/shop7.jpg')]
    }
  },
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
@function rem($px) {
  @return $px/ 37.5 * 1rem;
}
html, body, p {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: transparent;
}
#app {
  font-family: "PingFang SC", "Heiti SC", "San Francisco", "Helvetica";
  max-width: 750px;
  margin: 0 auto;
  .mint-header {
    background: #000;
  }
  header {
    position: relative;
    .header-top {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.4);
      background-image: url('./assets/index/logo.png');
      background-size: 70% 70%;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 9;
      opacity: 0.7;
    }
    .swiper-slide {
      overflow: hidden;
      font-size: 0;
      img {
        width: 100%;
        min-height: rem(262);
      }
    }
  }
  .menu {
    display: flex;
    justify-content: space-around;
    background: #000;
    margin: 0;
    li {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color: #fff;
      a {
        position: relative;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
        display: block;
        color: #fff;
        padding: 0 15px;
        &.router-link-exact-active {
          &::after {
            content:'';
            display: block;
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 50%;
            transform: translateX(-50%);
            height: 2px;
            background: #fff;
          }
        }
      }
    }
  }
  section {
    .title {
      text-align: center;
      color: #333;
      font-size: 20px;
      padding: 40px 0;
      span {
        font-family: Times New Roman;
        color: rgb(220, 127, 93);
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
        color: #333;
      }
      .story-detail {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .advantages {
    overflow: hidden;
    li {
      width: 50%;
      float: left;
      img {
        display: block;
        width: 80px;
        height: 80px;
        margin: 0 auto;
      }
      .name {
        font-size: 14px;
        text-align: center;
        color: #333;
        padding: 20px 0;
      }
      .detail {
        line-height: 20px;
        font-size: 12px;
        color: #666;
        padding: 0 20px 30px;
      }
    }
  }
  .types {
    li {
      padding: 10px 0;
    }
    img {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
  }
  .products {
    overflow: hidden;
    margin-bottom: 10px;
    li {
      float: left;
      width: 50%;
      height: rem(240);
      img {
        width: 100%;
      }
    }
  }
  .thanks {
    width: 100%;
    height: rem(260);
    background: url('./assets/products/ad_bg.jpg') no-repeat;
    background-size: cover;
    color: #fff;
    opacity: 0.9;
    padding-top: 45px;
    box-sizing: border-box;
    .thanks-title {
      font-size: 18px;
      text-align: center;
      line-height: 50px;
    }
    .thanks-detail {
      line-height: 30px;
      font-size: 14px;
      padding: 0 30px;
    }
  }
  .means {
    p {
      line-height: 30px;
      text-align: center;
      color: #666;
    }
    .means1 {
      width: 50%;
      border-radius: 15px;
      display: block;
      margin: 0 auto;
    }
    text-align: center;
 }
  .join {
    width: 100%;
  }
  footer {
    padding: 20px 20px 0;
    color: #fff;
    background: #000;
    p {
      &.copy {
        font-size: 12px;
        text-align: center;
      }
      line-height: 30px;
      font-size: 14px;
    }
  }
}
</style>
