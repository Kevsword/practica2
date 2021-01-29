<template>

   <div id="noticias">
     <h1 class="m-4">Ranking de videojuegos</h1> 
     <Tabla />
 </div>

</template>

<script>
import Tabla from '../components/Tabla.vue'



export default {
   name: 'Noticias',
   components: {
        Tabla
  }
}
</script>