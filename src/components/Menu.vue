<template>
  <b-navbar toggleable="md" type="light" variant="info">
    <b-navbar-brand href="/src/views/Home.vue">
      <img src="../assets/Logo_Barra.png" alt="logo" width="50" height="50">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="nav-link" to="/noticias">Noticias</b-nav-item>
            <b-nav-item class="nav-link" to="/articulos">Artículos</b-nav-item>
            <b-nav-item class="nav-link" to="/ranking">Ranking</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
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

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0);
}

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 1px;
    margin-right: auto;
    margin-left: auto;
}

</style>