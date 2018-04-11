<template>
  <div id="resume">
    <div class="head">
      <div class="title">{{ msg }}</div>
    </div>

    <div class="contain">
      <div class="touxiang">
        <div class="circle1"></div>
        <div class="circle2" ><img src="../assets/images/头像.jpg"/></div>
        <div class="circle2" ></div>
        <div id="name" class="name"><span v-text="name"></span></div>
      </div>
    </div>
  </div>

</template>

<script>export default {
  name: 'Resume',
  data () {
    return {
      msg: '#####',
      name: '####'
    }
  },
  method: {
    changeMenu: (route) => {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @titleHeight:5rem;
  @greenFontColor:#59bbb1;
  @font-color: #eee;
  @cur-off-color:#ccc;
  @backgroundColor: #302e2f;
  @circleColor1:#1e1c17;
  @circleColor2:#424041;
  @circleColor3:#444243;
  @touxiangWidth:15rem;
  @circle2width:13rem;
  .border-radius(@args){
    -webkit-border-radius:@args;
    -moz-border-radius:@args;
    border-radius:@args;
  }
  .Alpha(@args){   //背景模糊
    -webkit-filter:Alpha(opacity=@args);
    -ms-filter:Alpha(opacity=@args);
    filter:Alpha(opacity=@args);
  }
  .blur(@args){   //高斯模糊
    -webkit-filter:blur(@args);
    -ms-filter:blur(@args);
    filter:blur(@args);
  }
  #background-color(){
    background-color: transparent;
  }
  #resume{
    background-color: @backgroundColor;
    position: absolute;
    width:100%;
    height:100%;
  }
  .head{
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    height: @titleHeight;
    border-bottom: 1rem solid @greenFontColor;
    box-sizing: border-box;
    background-color: @backgroundColor;
  }
  .title{
    margin:0 auto;
    text-align: center;
    vertical-align: middle;
    font-size: 2rem;
    font-family:"新宋体";
    color:@font-color;
    position: relative;
    top: 1rem;
    right:3rem;
    float: right;
    #background-color
  }
  .contain{
    display: block;
    position: absolute;
    top:  @titleHeight;
    left:10%;
    width:80%;
    height:calc(100% - @titleHeight);
  }
  .touxiang{
    height:@touxiangWidth;
    width:@touxiangWidth;
    position: relative;
    top:2rem;
  }
  .circle1{
    position: absolute;
    width:@touxiangWidth;
    height:@touxiangWidth;
    .border-radius(50%);
    box-sizing: border-box;
    border: 1rem solid @circleColor3;
  }
  .circle2{
    position: absolute;
    top:(@touxiangWidth - @circle2width  + 2.5rem) / 2;
    left:(@touxiangWidth - @circle2width + 2.5rem) / 2;
    width:@circle2width - 2.5rem;
    height:@circle2width - 2.5rem;
    .border-radius(50%);
    .Alpha(0);
    box-sizing: border-box;
    border:0.5rem solid #000;
  }
  .circle2 img{
    .border-radius(50%);
    width:@circle2width - 3.5rem ;
    height:@circle2width - 3.5rem;
    .blur(0.3rem);
  }
  .circle2 img:hover, .circle2:hover{
    .blur(0);
  }
  .name{
    position: absolute;
    bottom:0;
    width:100%;
    text-align: center;
    color: @font-color;
  }
  .name span{
    padding:0 1rem;
    font-size: 1.5rem;
    background-color: @backgroundColor;
  }

</style>
