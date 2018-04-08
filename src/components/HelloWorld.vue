<template>
  <div class="head">
    <div class="title">{{ msg }}</div>
    <div>
      <ul>
        <li v-for="item in menu"><router-link  :to="item.route">{{item.name}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '九酒的笔记本',
      menu: [
        {
          route: '/home',
          name: '首页'
        },
        {
          route: '/archives',
          name: '归档'
        },
        {
          route: '/about',
          name: '关于'
        },
        {
          route: '/link',
          name: '联系'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.head{
  width: 100%;
  height:150px;
  background-color:rgb(242,242,242);

}
  .title{
    margin:0 auto ;
    text-align: center;
    vertical-align: middle;
    font-size: 36px;
    font-family:"新宋体";
    color:#999;
    position: relative;
    top: 40px;
  }
</style>
