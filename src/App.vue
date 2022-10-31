<template>
  <div id="app">
    <div class="container">
      <img src="@/assets/Slider3.jpg" id="banner">

      <b-card title="Card Title" no-body>
      <MenuPub/>
      </b-card>
      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </div>
  </div>
</template>

<script>
import MenuPub from '@/components/MenuPub.vue'
export default {
  
  components: {
    MenuPub
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
}

#banner {
  width: 100%;
  height: 150px;
}
</style>
