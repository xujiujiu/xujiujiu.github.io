<template>
  <div id="resume">
    <div class="head">
      <div class="title">{{ msg }}</div>
    </div>

    <div class="contain">
      <div class="touxiang hidden">
        <div class="circle1"></div>
        <div class="circle2"><img src="../assets/images/头像.jpg"/></div>
        <div id="name" class="name"><span v-text="name"></span></div>
      </div>
      <div class="info hidden" id="aboutMe">
        <div class="greenFont"><b>{{aboutMe.title}}</b></div>
        <hr/>
        <div v-for="(value, key) in aboutMe.info" class="aboutMeInfo" :key="key">
          <b><span v-text="value.name" class="greenFont"></span></b>
          <span v-text="value.value" class="whiteFont"></span>
        </div>
      </div>
      <div class="info hidden" id="ProjectEx">
        <div class="greenFont"><b>{{ProjectEx.title}}</b></div>
        <hr/>
        <div v-for="(value, key) in ProjectEx.info" class="aboutMeInfo" :key="key">
          <div v-text="value.name" class="greenFont"></div>
          <div v-text="value.value" class="whiteFont"></div>
        </div>
      </div>
      <div class="info" id="WorkEx">
        <div class="greenFont"><b>{{WorkEx.title}}</b></div>
        <hr/>
        <div class="list aboutMeInfo">
          <div v-for="(value,index) in WorkEx.info" :class="['listItem',{'highlight': (index === 0)}, {'listItem_first':  (index === 0)}]"
             @click="clickA(index)">
            <div class="listItemContent">
              <div v-text="value.time" class="greenFont"></div>
              <div v-text="value.companyName" class="whiteFont"></div>
              <div v-text="value.WorkContent" class="whiteFont"></div>
            </div>

          </div>
        </div>

      </div>
      <div class="info hidden" id="selfEvaluation">
        <div class="greenFont"><b>{{selfEvaluation.title}}</b></div>
        <hr/>
        <div v-for="(value, key) in selfEvaluation.info" class="aboutMeInfo" :key="key">
          <div v-text="value.content" class="whiteFont"></div>
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
      webSite: 'http://www.ayqy.net/temp/timeline/index.html',
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
      },
      ProjectEx: {
        title: 'Project Experience',
        info: [
          {
            title: 'FoodApp',
            value: 'Welcome to visit my food App, Would you want to something to eat?'
          }
        ]
      },
      WorkEx: {/*Work Experience*/
        title: '###',
        info: [
          {
            time: '2018',
            companyName: '###',
            WorkContent: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
          },
          {
            time: '2018',
            companyName: '###',
            WorkContent: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
          },
          {
            time: '2018',
            companyName: '###',
            WorkContent: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
          }
        ]
      },
      selfEvaluation: {
        title: 'Self Evaluation',
        info: [
          {
            content: ''
          }
        ]
      }
    }
  },
  methods: {
    clickA: (index) => {
      debugger;
      console.log(index)
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
  .box-shadow(@args0, @args1, @args2,@args3, @args4){
    -webkit-box-shadow:@args0 @args1 @args2 @args3 @args4;
    -moz-box-shadow:@args0 @args1 @args2 @args3 @args4;
    box-shadow:@args0 @args1 @args2 @args3 @args4;
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
  .info{
    margin-left:2rem;
    display: inline-block;
    width:30rem;
  }
  .info .aboutMeInfo{
    margin-top: 0.5rem;
  }
  .info hr{
    color: @circleColor2;
  }

  .list{
    margin:0 0.5rem 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .listItem{
     position: relative;
   }
  .listItem:before{
    content: "";
    display: inline-block;
    position: absolute;
    top:0;
    left:0.45rem;
    height:100%;
    border-right:0.1rem solid @greenFontColor;
    z-index: 1;
  }
  .listItem:after{
    content: "";
    display: inline-block;
    position: absolute;
    left:0.2rem;
    width:0.6rem;
    height: 0.6rem;
    background-color: @greenFontColor;
    .border-radius(0.3rem);
    top:20%;
    margin-top:-2px;
    z-index: 1;
  }
  .highlight:after{
    box-sizing: border-box;
    width:0.6rem;
    height:0.6rem;
    /*background-color: @greenFontColor;*/
    border: 0.1rem solid @backgroundColor;
    .box-shadow(0, 0, 0, 0.1rem, lighten(@greenFontColor, 10%));
    .border-radius(0.3rem);
    z-index:2;

  }
  .listItem_first:before{
    height: 80%;
    top:20%;
  }
  .listItemContent{
    padding:1rem 0 2rem 2rem;
    border:none;
  }
  .hidden{
    display: none;
  }
</style>
