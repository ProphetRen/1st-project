<template>
  <div class="v-cart">
    <header>
      <nav class="navigation">
        <span class="navigation__cart">Корзина</span>
        <router-link class="v-cart__link_to_catalog" :to="{name:'Catalog'}">
          <span>Назад в каталог</span>
        </router-link>
      </nav>
      </header>
    <div class="pos"
    v-if="cart_data.length">
      <vCartItem class="Item"
      v-for="(item, index) in cart_data"
      :key="item.name"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      />
      
    </div>
    <p class = "None_products" v-if="!cart_data.length">Нет продуктов в корзине...</p>
  </div>
</template>

<script>
import vCartItem  from "./v-cart-item"
import { mapActions } from 'vuex'

export default {
   name:"v-cart",
   components:{
     vCartItem 
   },
   props:{
     cart_data:{
       type: Array,
       default(){
         return []
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
     ...mapActions([
     'DELETE_FROM_CART'
     ]),
     deleteFromCart(index){
       this.DELETE_FROM_CART(index)
     }
   }
}
</script>

<style lang ='scss' scoped>
  .v-cart{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
    &__link_to_catalog{
    text-decoration: none;  
    align-items: center;
    font-family: Georgia;
    font-size: 3vw;
    color: #aeaeae;
    display: flex;
    border:2px solid #aeaeae;
    border-radius: 10%;
    margin-left: 30vw;
  }
}
  .pos{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 3vw;
  }

.navigation{
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  &__cart{
    font-family: Georgia;
    font-size: 5vw;
  }
}

header{
  margin-top: 2vw;
}

.None_products{
  text-align: center;
  margin-top:10vw;
  font-size: 10vw;
}

.Item{
  margin-right: 3vw;
  text-align: center;
}
</style>