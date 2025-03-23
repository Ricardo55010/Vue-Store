<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
  <p>{{message }}</p>
  <p>{{this.$store.state.count }}</p>
  <form v-on:submit="postProduct">
    <input type="text" v-model="newProduct.name" >
    <input type="text" v-model="newProduct.quantity" >
    <input type="text" v-model="newProduct.description" >
    <input type="text" v-model="newProduct.id" >
    <input type="submit">
  </form>
  <div v-for="x in products" v-bind:key="x.name">
    {{ x }}
    <button @click="deleteProduct(x)"></button>
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
      this.$store.commit('increment')
      console.log("projects created: " +this.$store.state.count)
    },
    deleteProduct(x) {
      this.message = "product deleted!";
      console.log(x)
      axios.delete("http://localhost:8080/products",{data:x})
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