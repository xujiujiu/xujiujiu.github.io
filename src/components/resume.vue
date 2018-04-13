<template>
  <div id="resume">
    <div class="head">
      <div class="title">{{ msg }}</div>
    </div>

    <div class="contain">
      <div class="touxiang">
        <div class="circle1"></div>
        <div class="circle2" ><img src="../assets/images/头像.jpg" /></div>
        <div id="name" class="name"><span v-text="name"></span></div>
      </div>
      <div class="aboutMe">
        <div class="greenFont"><b>{{aboutMe.title}}</b></div>
        <hr/>
        <div v-for="item in aboutMe.info" class="aboutMeInfo">
          <b><span v-text="item.name" class="greenFont"></span></b>
          <span v-text="item.value" class="whiteFont"></span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>export default {
  name: 'Resume',
  data () {
    return {
      msg: '#####',
      name: '####',
      aboutMe: {
        title: 'About Me',
        info: [
          {
            name: 'Tel：',
            value: '158****1791'
          },
          {
            name: 'Email：',
            value: '906784584@qq.com'
          },
          {
            name: 'Graduate School：',
            value: 'Hefei Normal University'
          },
          {
            name: 'Graduate Time：',
            value: '2016-07-01'
          },
          {
            name: 'Birthday：',
            value: '1994-01-06'
          }
        ]
      }
    }
  },
  method: {

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
  @circleColor1:#171717;
  @circleColor2:#404040;
  @circleColor3:#444243;
  @touxiangWidth:15rem;
  @circle2width:13rem;
  .font-family{
    font-family: 'Arial','楷体' !important;
  }
  .border-radius(@args){
    -webkit-border-radius:@args;
    -moz-border-radius:@args;
    border-radius:@args;
  }
  .Alpha(@args){   //背景透明
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
  .grad(@args0,@args1, @args2) {
    background: -webkit-linear-gradient(@args0, @args1, @args2); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(@args0,@args1, @args2); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(@args0,@args1, @args2); /* Firefox 3.6 - 15 */
    background: linear-gradient(@args0,@args1, @args2); /* 标准的语法 */
  }
  #resume{
    .font-family;
    background-color: @backgroundColor;
    position: absolute;
    width:100%;
    height:100%;
  }
  .greenFont{
    color:@greenFontColor
  }
  .whiteFont{
    color:@font-color
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
    .font-family;
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
    display: inline-block;
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
    top:(@touxiangWidth - @circle2width  + 1.7rem) / 2;
    left:(@touxiangWidth - @circle2width + 1.7rem) / 2;
    width:@circle2width - 1.7rem;
    height:@circle2width - 1.7rem;
    .border-radius(50%);
    .grad(180deg,@circleColor1,@circleColor2);
  }
  .circle2 img{
    .border-radius(50%);
    position: absolute;
    top:0.7rem;
    left:0.7rem;
    width:@circle2width - 3rem ;
    height:@circle2width - 3rem;
    -webkit-animation:circle 5s infinite linear;/*匀速 循环*/
    -moz-animation: circle 5s infinite linear;/*匀速 循环*/
    animation: circle 5s infinite linear;/*匀速 循环*/
  }
  @-webkit-keyframes circle {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
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
  .aboutMe{
    margin-left:2rem;
    display: inline-block;
    width:30rem;
  }
  .aboutMe .aboutMeInfo{
    margin-top: 0.5rem;
  }
  .aboutMe hr{
    color: @circleColor2;
  }
</style>
