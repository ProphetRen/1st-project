<template>
  <div class="v-catalog list">
    <header>
      <nav class = "navigation">
          <span class = "navigation__catalog">Каталог</span>  
          <router-link class="v-catalog__link_to_cart" :to="{name:'Cart', params: {cart_data:CART}}">
            <span>Корзина: {{CART.length}}</span>
          </router-link>
        </nav>
    </header>
  <!--(ПЕРВЫЙ ПУНКТ) product в v-for переменная куда записывается результат итераций над каждым элементом массива(по раздельности) полученным из this.$store.state.products -->
  <!--в :key мы идентифицируем по какому из признаков различаются данные (здесь по article)  -->
  <!-- в  product_data(переменную) мы записываем данные из переменной product описанной в первом пункте, чтобы передать её в v-catalog-item-->
      <div class = "line">
        <vCatalogItem class="Item"
          v-for="product in PRODUCTS" 
          :key="product.name"
          :product_data = "product"
          @addToCart="addToCart"
        />
      </div>
      <vCarousel/>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item"
import {mapActions,mapGetters} from 'vuex'
import vCarousel from './v-carousel'

export default {
   name:"v-catalog",
   components:{
      vCatalogItem,
      vCarousel
   },
   props:{

   },
   data(){
     return{

    }
  },
   computed:{
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
   },
   methods:{
     ...mapActions([
       'GET_PRODUCTS_FROM_API',
       'ADD_TO_CART'
     ]),
     addToCart(data){
       this.ADD_TO_CART(data)
     }
   },
   mounted(){
     this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style lang ="scss" scoped>
.v-catalog{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
    &__link_to_cart{
    align-items: center;
    font-family: Georgia;
    font-size: 3vw;
    color: #aeaeae;
    display: flex;
    text-decoration: none;    
    border:2px solid #aeaeae;
    border-radius: 10%;
    margin-left: 30vw;
  }
}
  
  .line{
    margin-top: 3vw;
    display: flex;
    flex-direction: row;
  }
  
.navigation{
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  &__catalog{
    font-family: Georgia;
    font-size: 5vw;
  }
}

header{
  margin-top: 2vw;
}

.Item{
  margin-right: 3vw;
}
</style>