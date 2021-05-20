<template>
  <div class="v-cart-item">
      <img class = "img" :src=" require('../assets/Images/' + cart_item_data.image)" alt="">
      <div class="v-cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}} Рублей</p>
        <p>{{cart_item_data.article}}</p>
      </div>
      <div class="v-cart-item__quantity">
        <p>Количество:</p>
        {{cart_item_data.quantity}}
      </div>
      <button class='Delete' @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
   name:"v-cart-item",
   props:{
     cart_item_data:{
      type: Object,
      default(){
        return {}
      }
     }
   },
   data(){
     return{

     }
   },
   computed:{

   },

   methods:{
     deleteFromCart(){
       this.$emit('deleteFromCart')
     }
   },
}
</script>

<style scoped lang="scss">
@import './src/assets/styles/styles.scss'; 
  .v-cart-item{
    align-items: center;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:2px solid #aeaeae;
    margin-bottom: 16px;
    flex-wrap:wrap;
    &__info{
      display: flex;
      flex-direction: column;
      }
    &__quantity{
      padding-bottom: 10px;
    }

  }
  .img{
    padding-top: 0.5vw;
      width: 150px;
      height: 150px;
    }

  .Delete{
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
</style>