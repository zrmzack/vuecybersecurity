<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from "./view/login/index"
export default {
  name: 'app',
  components: {
    HelloWorld,
    Login
  }
}
</script>

<style>
#app {

}
    body{
        margin: 0;
    }
</style>
