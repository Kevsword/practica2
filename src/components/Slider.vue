<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      class="mb-4 ml-3 mr-3"
    >

      <!-- Slider de solo imagenes -->
      <b-carousel-slide img-src="../assets/CYBERPUNK_2077.jpg" alt="cyberpunk"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/Slider2.jpg" alt="juegos pandemia"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/Slider3.jpg" alt="bravely default 2"></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>