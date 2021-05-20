import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
//объявляем глобальное хранилище
let store = new Vuex.Store({
  //GET_PRODUCTS_FROM_API -- название действия 
  //commit -- записал commit: что позволит нам вызвать метод commit внутри наших действий
  actions:{
    GET_PRODUCTS_FROM_API({commit}){
// из axios возвращаем метод "GET" что позволит нам передать данные в действие (второй commit) и получаем данные из API
      return axios('http://localhost:3000/products',{
        method:"GET"
      })
//затем мы положили все данные в then((products)), после чего мы передаём в мутацию SET_PRODUCTS_TO_STATE что её нужно выполнить и добавляем ей переменную в которой содержаться данные, полученные с помощью "GET"
//также в commit передаём именно "products.data" так как данные из файла .json находятся именно в data
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
//в мутации вызывается метод SET_PRODUCTS_TO_STATE с аргументами state(где хранится массив products(state.products)) и переменную, в которой содержаться данные
  mutations:{
    SET_PRODUCTS_TO_STATE:(state, products) =>{
//здесь мы записываем в products(который находится в state) данные из переменной которые были получены в then((products)
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
//это хранилище куда мы записываем все приходящие данные 
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
//позволяет использовать данные из $store.state.products в проекте
export default store;