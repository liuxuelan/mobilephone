<template>
  <div class="home" >
    <mt-swipe :auto="4000" class="swip">
      <mt-swipe-item v-for="item in items" >
          <a v-bind:href="item.url"><img v-bind:src="item.picUrl" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="wrap">
      <div class="wrap-box" v-for="item in list">
          <div class="wrap-header">
            <div class="wrap-left">
              <img slot="icon" src="../../static/images/lou@2x.png" width="24" height="20" class="left-img">
              <span v-bind:id="item.id">{{item.name}}</span>
              <div class="wrap-position">{{item.star}}F</div>
            </div>
            <router-link tag="b" to="/detail">
              <div class="wrap-right">
                <span>更多商品</span>
                <img src="../../static/images/cebmore.png" alt="">
              </div>
             </router-link>
          </div>

          <div class="wrap-container">
             <router-link tag="b" to="detail">
               <div class="box" v-for="itemlist in item.skus">
                  <div class="img_box">
                    <img v-bind:src="itemlist.imagesOriginal.split(',')[0]">
                  </div>
                  <div class="nav_box">
                    <p>{{itemlist.name}}</p>
                    <div class="ceb-states">
                      <span>￥{{(itemlist.price/itemlist.installment.split(',')[itemlist.installment.split(',').length-1]).toFixed(2)}}</span>
                      <h2>x</h2>
                      <h3 class="ceb-h3">{{itemlist.installment.split(',')[itemlist.installment.split(',').length-1]}}期</h3>
                    </div>
                  </div>
                  <div class="statesceb last-div">
                    <span>总价</span>
                    <span style="font-size: 14px;">￥{{itemlist.price}}</span>
                  </div>
                </div>
              </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../static/css/home.css'
export default {
  name: 'home',
  created () {
    this.request()
  },
  data () {
    return {
      items: [],
      list: {},
      num: []
    }
  },
  // 事件方法
  methods: {
    callback: function () {
      console.log(this)
    },
    request: function () {
      var vm = this
      // ajax请求swiper页面数据
      this.$http.get('https://cebshop.tyiti.com/api/adverts?group=home&code=', {
        token: this.token
      }).then((res) => {
        console.log(JSON.parse(res.bodyText))
        vm.items = JSON.parse(res.bodyText).data.index
      }, (res) => {
      })
      // ajax请求列表页面数据
      this.$http.get('https://cebshop.tyiti.com/api/tags/skus?code=home&level=1&limit=4', {
        token: this.token
      }
      ).then((res) => {
        // success
        console.log(JSON.parse(res.bodyText))
        vm.list = JSON.parse(res.bodyText).list
        for (var i = 0; i < vm.list.length; i++) {
          vm.list[i].star = i + 1
        }
      }, (res) => {
        // error
        console.log(res)
      })
    }
  },
  // 计算属性
  computed: {
  },
  watch: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
