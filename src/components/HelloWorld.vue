<template>
  <div class="head">
    <ul class="menu">
      <li v-for="value in menu">
        <router-link :to="value.route" class="menuA">{{ value.name }}</router-link>
      </li>
    </ul>
    <div class="title">{{ msg }}</div>
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
          route: '/classify',
          name: '分类'
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
@title-font-color: #999;
.head{
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  height:150px;
  background-color:rgb(242,242,242);

}
  .title{
    margin:0 auto;
    text-align: center;
    vertical-align: middle;
    font-size: 32px;
    font-family:"新宋体";
    color:@title-font-color;
    position: relative;
    top: 50px;
  }
.menu{
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
}
ul li {
  float: left;
}
  .menuA{
    text-decoration: none;
    color: @title-font-color;
    font-size: 14px;
    display: inline-block;
    margin-right: 20px;
  }
</style>
