<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>



<script>
  export default {
    name:"v-main-wrapper",
    components:{
    },
    props:{},
    data(){
      return{
        title: "Main wrapper"
      }
    },
    computed:{
    },
    methods:{},
    watch:{},
     
  }
</script>

<style scoped>
  .v-main-wrapper{
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    margin-right: 5vw;
  }
</style>