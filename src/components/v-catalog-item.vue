<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/Images/' + product_data.image)" alt="">
    <p class ="v-catalog-item__name">{{product_data.name}}</p>
    <p class ="v-catalog-item__price">{{product_data.price}} Рублей</p>
    <button class="addToCart" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
   name:"v-catalog-item",
   props:{
     product_data:{
      type: Object,
     }
   },
   methods:{
     addToCart(){
       this.$emit('addToCart',this.product_data)
     }
   },
    mounted(){
     this.$set(this.product_data, 'quantity')
   },
}
</script>

<style lang="scss">
@import './src/assets/styles/styles.scss'; 
  .v-catalog-item {
    align-items: center;
    width: 18vw;
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    border:2px solid #aeaeae;
    margin-bottom: 16px;
    &__image{
      align-self: center;
      width: 150px;
      height: 150px;
    }
    .addToCart{
      font-family: Georgia;
      font-size: 20px;
      font-weight: bold;
      align-items: center;
      border:1px solid black;
      border-radius: 10px;
      width: 15vw;
      margin-top: 0.3vw;
      margin-bottom: 0.3vw;
    }
  }
  .v-catalog-item__image{
    padding-top: 0.5vw;
  }
</style>