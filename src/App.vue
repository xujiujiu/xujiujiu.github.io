<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
    font-size:14px;
    font-family: "Microsoft YaHei";
  }
  ul li {
    list-style-type: none;
  }
  .hidden{
    display: none;
  }
</style>
