<template>
<div id="home">
     <div>
          <b-img src="../assets/Gamemedia.jpg" fluid alt="Gamemedia"></b-img>
     </div>
     <Slider /> 
 </div>

</template>

<script>
import Slider from '../components/Slider.vue'



export default {
   name: 'Home',
   components: {
        Slider
  }
}
</script>