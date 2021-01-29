<template>
  <div id="app">
    <Menu /> <!-- se añade el menú -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
