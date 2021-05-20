<template>
  <div class="v-carousel-item">
    <img class="slider" :src=" require('../assets/Images/' + product_data.image)" alt="">
  </div>
</template>

<script>
export default {
  props:{
     product_data:{
      type: Object,
     },
  }
}
</script>

<style scoped>
.slider{
  display: flex;
  width: 150px;
  height: 150px;
  border:2px solid #aeaeae;
  border-radius: 20%;
  margin-right: 20px;
}
</style>