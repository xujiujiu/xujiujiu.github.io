<template>
  <div>
    <div class="title">{{ msg }}</div>
  </div>
</template>

<script>export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Links'
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  @title-font-color: #999;
  .font-family{
    font-family: 'Arial','楷体' !important;
  }
  .title{
    margin:20px;
    font-size:36px;
    color: @title-font-color;
    .font-family
  }
</style>
