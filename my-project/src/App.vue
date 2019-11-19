<template>
  <div id="app">
    <Head/>
    <!--保持状态，vue会自行保持当前状态，如果需要保持当前转态  可以在路由下添加meta字段-->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
h1,h2,h3{
  margin: 0px;
}

</style>
