<template>
  <b-navbar toggleable="md" type="light" variant="info">

          <b-navbar-nav class="redes">
            <b-nav-item target="_blank" href="https://twitter.com/"><img src="../assets/twitter.png" alt="twitter" width="50" height="50"></b-nav-item>
            <b-nav-item target="_blank" href="https://instagram.com/"><img src="../assets/instagram.png" alt="instagram" width="50" height="50"></b-nav-item>
            <b-nav-item target="_blank" href="https://www.youtube.com/watch?v=Fw3RB7xnb80"><img src="../assets/youtube.png" alt="youtube" width="50" height="50"></b-nav-item>
          </b-navbar-nav>
  </b-navbar>
</template>


<script>
export default {


}
</script>


<style scoped>

.router-link-exact-active, .router-link-active {
  background-color: rgb(255, 219, 14);
}

.bg-info {
    background-color: #ffdf2b!important;
}

.navbar-expand-md {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

</style>