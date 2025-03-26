
<template>

<AppLayout></AppLayout>
</template>

<script>
import AppLayout from './pages/AppLayout.vue';
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
