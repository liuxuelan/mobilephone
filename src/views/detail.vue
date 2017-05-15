<template>
  <div class="detail" >
	详情页
	{{$route.query.id}}
  </div>
</template>

<script>
import '../../static/css/detail.css'
export default {
  name: 'detail',
  created () {
    this.request()
  },
  data () {
    return {
    }
  },
  // 事件方法
  methods: {
    callback: function () {
      console.log(this)
    },
    request: function () {
      // ajax请求其实页面数据
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
