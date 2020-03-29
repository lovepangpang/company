<template>
  <div class="join">
      <img :src="join10" alt="">
      <img :src="join11" alt="">
      <img :src="join12" alt="">
      <img :src="join12_1" alt="">
      <img :src="join13" alt="">
      <img :src="join14" alt="">
      <img :src="join15" alt="">
      <img :src="join16" alt="">
      <p class="title">联系人：刘女士</p>
      <p class="title">电话：0371-63686519</p>
      <p class="title">微信二维码：</p>
      <img class="er" :src="er" alt="">
      <p class="title">地址：河南省郑州市世贸中心四楼M4050</p>
      <img :src="map" alt="">
  </div>
</template>

<script>
export default {
    data () {
        return {
            map: require('../assets/map.jpg'),
            er: require('../assets/er.jpg'),
            join10: require('../assets/join10.jpg'),
            join11: require('../assets/join11.jpg'),
            join12_1: require('../assets/join12-1.jpg'),
            join12: require('../assets/join12.jpg'),
            join13: require('../assets/join13.jpg'),
            join14: require('../assets/join14.jpg'),
            join15: require('../assets/join15.jpg'),
            join16: require('../assets/join16.jpg'),
            join17: require('../assets/join17.jpg')
        }
    }
}
</script>

<style lang="scss" >
    .join{
        margin-top: 40px;
        .title {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            padding-left: 10px;
        }
        img {
            display: block;
            &.er {
                display: block;
                width: 150px;
                margin-left: 10px;
                border: 1px solid #eee;
            }
            width: 100%;
        }
    }
    @media screen and (min-width: 800px) {
        .title {
            text-align: center;
            font-size: 18px;
            font-weight: 700;
        }
        .er {
            margin: 0 auto !important;
        }
    }
</style>