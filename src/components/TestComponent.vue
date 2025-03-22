<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
  <p>{{message }}</p>
  <form v-on:submit="postProduct">
    <input type="text" v-model="newProduct.name" >
    <input type="text" v-model="newProduct.quantity" >
    <input type="text" v-model="newProduct.description" >
    <input type="text" v-model="newProduct.id" >
    <input type="submit">
  </form>
  <div v-for="x in products" v-bind:key="x.name">
    {{ x }}
    <button @click="deleteProduct(x.id)"></button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
    return {
       name: "Nope",
       message: "",
       products: "",
       newProduct: {
          name: "ejemplo",
          quantity: 1,
          description: "ejemplo",
          id: 1
       }
    };
  },
  methods: {
    postProduct() {
      this.message = "New product created!";
      axios.post("http://localhost:8080/products",this.newProduct)
    },
    deleteProduct(x) {
      this.message = "product deleted!";
      axios.delete("http://localhost:8080/products/"+x)
    }
  },
  mounted(){
        this.name = "Richard"
        axios.get("http://localhost:8080/products")
        .then(res=> {
          console.log(res.data)
          this.products = res.data
        })
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>