import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
let store = new Vuex.Store({
  actions:{
    GET_PRODUCTS_FROM_API({commit}){
      return axios('http://localhost:3000/products',{
        method:"GET"
      })
        .then((products)=>{
          commit('SET_PRODUCTS_TO_STATE',products.data);
        })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index){
      commit('REMOVE', index)
    }
  },
  mutations:{
    SET_PRODUCTS_TO_STATE:(state, products) =>{
      state.products = products;
    },
    SET_CART:(state, product) =>{
      if(state.cart.length){
        let ipe = false;
        state.cart.map(function(item){
          if (item.article === product.article){
            ipe = true
            item.quantity++
          }
        })
        if (ipe === false){
            state.cart.push(product);
        }
      }
      else{
        state.cart.push(product);
      }
      
    },
    REMOVE:(state, index) => {
      state.cart.splice(index, 1) 
    }
  },
  state:{
    products: [],
    cart:[]
  },
  getters:{
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    }
  },

});

export default store;
