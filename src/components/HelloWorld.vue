<template>
  <div id="HelloWorld">
    <div class="head">
      <ul class="menu">
        <li v-for="(value, key) in menu" :key="key">
          <router-link :to="value.route" class="menuA" @click="changeMenu(value.route)">{{ value.name }}</router-link>
        </li>
      </ul>
      <div class="title">{{ msg }}</div>
    </div>
    <div class="contain">
      <router-view ></router-view>
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
  },
  methods: {
    changeMenu: (route) => {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @titleHeight:150px;
@title-font-color: #999;
@shadow-color:#ccc;
#background-color(){
  background-color: transparent;
}
  #HelloWorld{
  background-color: #fcfcfc;
  }
.head{
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  height:@titleHeight;
  background-color:#f2f2f2;
  box-shadow: @shadow-color 0 0 10px 0;
  z-index: 1;

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
    #background-color
  }
.menu{
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  #background-color
}
ul li {
  float: left;
  #background-color
}
  .menuA{
    text-decoration: none;
    color: @title-font-color;
    font-size: 14px;
    display: inline-block;
    margin-right: 20px;
    #background-color
  }
  .contain{
    display: block;
    position: absolute;
    top: @titleHeight;
    left:10%;
    width:80%;
    height:calc(100% - @titleHeight);
    border-left:1px solid #f2f2f2;
    border-right:1px solid #f2f2f2;
    background-color: #ffffff;
    box-shadow: 0 5px 5px @shadow-color ;
  }
</style>
