<template>
  <div id="app">
    {{url}}
    <mt-header fixed :title="title">
      <router-link v-if="username === '/join'" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link v-if="username !== '/join'" to="/join" slot="right">
        立即加盟
      </router-link>
      <!-- <mt-button slot="right">加盟</mt-button> -->
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      url: '',
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
html, body, p {
  padding: 0;
  margin: 0;
  background: #fff;
  font-family: 'PingFang SC Light', 'Heiti SC', 'San Francisco,Helvetica';
  font-size: 14px;
}
html,body {
  max-width: 1000px;
  margin: 0 auto;
}
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mint-header-title {
  font-size: 16px;
  font-weight: 700;
}
a {
  text-decoration: transparent;
}
#app {
  .mint-header {
    background: #000;
  }
}
</style>
