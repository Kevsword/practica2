<template>

<div id="noticias">
     <h1 class="mt-4">Últimas noticias</h1> 
     <CardNoticias />
     <CardNoticias2 />
 </div>

</template>

<script>
import CardNoticias from '../components/CardNoticias.vue' 
import CardNoticias2 from '../components/CardNoticias2.vue'



export default {
   name: 'Noticias',
   components: {
        CardNoticias,
        CardNoticias2
  }
}
</script>