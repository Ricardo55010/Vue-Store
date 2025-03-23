
<template>
<AppLayout></AppLayout>
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!-- <TestComponent prop="example"/>-->
<router-view></router-view>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TestComponent from './components/TestComponent.vue'
import AppLayout from './components/Layout/AppLayout.vue';
export default {
  name: 'App',
  components: {
//    HelloWorld,
//    TestComponent
      AppLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
