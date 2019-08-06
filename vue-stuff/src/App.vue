<template>
  <div id="app">

    <transition name="appear">
      <div class="mydiv" v-if="display"><img src="./assets/walter.jpg">Walt, your cancer's back</div>
    </transition>
    <br>
    <br>
    <b-button variant="success" @click="display = !display">Toggle Animation</b-button>



  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      display: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 255, 0, 1);
  margin-top: 60px;
}
</style>

<style scoped type="text/css">
  img {
    height: 70px;
    width: 70px;
    margin-top: 5px;
    margin-right: 15px;
  }

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    transition: opacity 1s;
  }

  .appear-leave {
    opacity: 1;
  }

  .appear-leave-active {
    opacity: 0;
    transition: opacity 1s;
  }


  .mydiv {
    background-color: rgba(0, 255, 0, 1);
    height: 80px; 
    width: 80%;
    color: white;
    /* line-height: 10px; */
    font-size: 28px;
  }

</style>
