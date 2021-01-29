<template>

<div>
  <b-card-group deck class="mb-5 ml-5 mr-5 mt-4">
    <b-card title="Kebab Amigo, el primer negocio agroalimentario en un videojuego" id="notice" img-src="../assets/noti_1.jpg" alt="kebab amigo" img-top>
      <b-card-text>
        El streamer Chuso Montero ha inaugurado un establecimiento de ‘kebab’ en el famoso servidor de Rust, Egoland.
        No será el mejor constructor pero sin duda el mejor chef.
      </b-card-text>
    </b-card>

    <b-card title="Pilgrim vuelve a la carga en su complete edition" id="notice" img-src="../assets/noti_2.jpg" alt="pilgrim" img-top>
      <b-card-text>
        Vuelve a encarnar a los personajes de Scott Pilgrim en la reedición de su aclamado beat’em up.
        Momentos desternillantes, una historia llena de referencias y una acción frenética te espera en este título.
      </b-card-text>
    </b-card>

    <b-card title="El set 4.5 de TFT llega este miércoles al servidor público" id="notice" img-src="../assets/noti_3.jpg" alt="tft" img-top>
      <b-card-text>
        Se masca la tensión en este auto battle, queda menos de un mes para el clasificatorio europeo y los europeos se enfrentarán en una batalla sin tregua para entrar dentro de esta competición, la fortuna y la locura irán de la mano.
      </b-card-text>
    </b-card>
  </b-card-group>
</div>

</template>


<script>
export default {


}
</script>

<style>
#notice:hover{
    transition-duration: 0.6s;
    transform: scale(1.13);
}
</style>