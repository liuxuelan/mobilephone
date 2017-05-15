<template>
  <div class="index">
  	<transition name="fade">
  		<div class = "top" v-if="show"></div>
  	</transition>
  	<transition name="fade">
		<div class = "bottom" v-if="show"></div>
	</transition>
	<div class = "showBox" v-model="show">
		<transition name="rotate">
			<div class = "center" v-if="show"></div>
		</transition>
		<transition name="rotate1">
			<div class = "center1" v-if="show"></div>
		</transition>
		<transition name="rotate2">
			<div class="center2" v-if="show"></div>
		</transition>
		<transition name="fade">
			<router-link tag="b" to="/home">
				<div class="getCurAddress" v-if="show">
					<span class="showAddress">{{address}}</span>
				</div>
			</router-link>
		</transition>
	</div>
	<button v-on:click="fnGetAdd()" class="middle" >获取当前位置</button>
  </div>
</template>

<script>
import '../../static/css/index.css'
export default {
  name: 'index',
  data () {
    return {
      show: false,
      address: '定位中...'
    }
  },
  methods: {
    fnGetAdd: function () {
      var vm = this
      if (!this.show) {
        this.show = true
      } else {
        this.show = true// 注释
      }
      // ajax请求
      this.$http.get('https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=39.9030674&longitude=116.2187067', {
        token: this.token,
        data: {
          latitude: 39.90306969999999,
          longitude: 116.2186387
        }
      }
      ).then((res) => {
        console.log(res)
        vm.address = JSON.parse(res.bodyText).address
      }, (res) => {
      })
    }
  },
  watch: {
  },
  computed: {
  }
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
