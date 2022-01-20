<template>

  <div id="app">

    <navbar></navbar>
    <router-view :connectionManager="connectionManager" :key="$route.fullPath"></router-view>
    <Footer></Footer>

  </div>

</template>

<script>

  import Navbar             from './components/Navbar'
  import Footer             from './components/Footer'
  import ConnectionManager  from './../service/ConnectionManager'

  export default
  {
      name: 'electron-vue',
      components: {Navbar, Footer},
      data: function ()
      {
        return {
          connectionManager: null
        }
      },
      mounted ()
      {
        this.connectionManager = new ConnectionManager()
      }
  }

</script>

<style lang="scss">

  @import "styles/base.scss";

</style>
