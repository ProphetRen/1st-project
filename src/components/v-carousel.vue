<template>
  <div class = "v-carousel">
    <div class="v-slider" :style="{'margin-left':'-' + (100 * CSI) + '%'}">
      <vCarouselItem class = "slider_main"
        v-for="product in PRODUCTS" 
        :key="product.name"
        :product_data = "product"
      />
    </div> 
    <div>
        <button class="buttons" @click="PrevSlide">Предыдущая</button>
        <button class="buttons" @click="NextSlide">Следующая</button>
      </div>
  </div>
  
</template>

<script>
import vCarouselItem from './v-carousel-item'
import {mapActions,mapGetters} from 'vuex'

export default {
  data(){
    return{
      CSI:0
    }
  },
  components:{
    vCarouselItem
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
      ])
   },
   methods:{
     ...mapActions([
       'GET_PRODUCTS_FROM_API',
     ]),
     NextSlide(){
       if(this.CSI > this.PRODUCTS.length - 2){
         this.CSI = 0
         console.log(this.CSI);
       }else{
         this.CSI++
       }
     },
     PrevSlide(){
       if(this.CSI > 0){
         this.CSI--
       }else{
         this.CSI = 4;
         this.CSI--;
       }
     }
  },
   mounted(){
     this.GET_PRODUCTS_FROM_API()
   }
}

</script>

<style lang = "scss" scoped>
.v-carousel{
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top:3vw;
  max-width: 170px;
  overflow: hidden;
}
.v-slider{
  display: flex;
  flex-direction: row;
  max-width: 150px;
  transition: all ease .5s;
}

.buttons{
  margin-right: 3vw;
}

.slider-main{
  display: flex;

}
</style>