<template>
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="table-responsive">
 
               <table class="table">
                  <thead class="thead-dark">
                     <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Videojuego</th>
                        <th scope="col">Puntuación revista</th>
                        <th scope="col">Puntuación público</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="item in items" v-bind:key="item.id">
                        <th scope="row">{{ item.posicion }}</th>
                        <td>{{ item.videojuego }}</td>
                        <td>{{ item.puntrevista }}</td>
                        <td>{{ item.puntpublico }}</td>
                     </tr>
                  </tbody>
               </table>
 
            </div>
         </div>
      </div>
   </div>
</template>

<script>
// Archivo de datos 'Contact.json' 
import datos from "../json/rank.json";
  
export default {
  name: 'Datos',
  props: {
    msg: String
  }, 
    
  // Creo un método llamado 'items' y obtengo los datos con el método map() 
  computed: {
    items() {
      return datos.map((item) => {
        return item;
      })
    }
  }
}
</script>