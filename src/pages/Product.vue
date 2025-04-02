<template>
  <v-card>
    <template v-slot:title>
      <span class="font-weight-black">Product</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Please fill in the following parameters</span>
    </template>
    <form class="px-5 py-5">
      <v-text-field
        v-model="newProduct.name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="newProduct.quantity"
        label="Quantity"
        required
      ></v-text-field>
      <v-text-field
        v-model="newProduct.description"
        label="Description"
        required
      ></v-text-field>
      
      <v-row>
        <v-col>
          <v-select return-object
        v-model="category"
        :items="items"
        item-title="name"
        item-value="name"
        label="Item"
        required
      ></v-select>
        </v-col>
        <v-col>
                
      <v-btn @click="addCategory(category)" color="deep-orange-accent-4" > add category</v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-5 d-flex justify-center" >
      <div v-for="element in newProduct.categories" v-bind:key="element.id">
        
        <v-chip><v-btn icon="mdi-delete" @click="deleteCategory(element)"></v-btn>{{element.name}}</v-chip>
        
      </div>
    </v-row>
      <v-btn @click="postProduct" color="teal-darken-4"> Create</v-btn>
    
  </form>
  </v-card>
{{ newProduct }}

<v-snackbar 
      v-model="snackbar"
      multi-line
    >
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
import ProductService from '@/services/ProductService';
export default {
    
    data() {
    return {
       name: "Nope",
       snackbar : false,
       snackbarText:"",
       message: "",
       products: "",

       items: [
        {id: 1, 
         name: "Tecnologia",
         description: "Lo mas actual"
        },
        {id: 2, 
         name: "Deportes",
         description: "Lo mas cool"
        }],
       category: {
        id: "",
        name: "",
        description: ""
       },
       newProduct: {
          name: "ejemplo",
          quantity: 1,
          description: "ejemplo",
          id: 1,
          categories: []
       },
       option : 0
    };
  },
  methods: {
    addCategory(x){
      this.newProduct.categories.push(x)
      this.snackbar = true;
      this.snackbarText = "Category " + x.name+ " added"
    },
    deleteCategory(x){
      this.newProduct.categories.splice(this.newProduct.categories.indexOf(x),1)
      this.snackbar = true;
      this.snackbarText = "Category " + x.name+ " deleted"
    }
    ,
    postProduct() {
        this.message = "New product created!";
        ProductService.postProduct(this.newProduct)
        this.$store.commit('increment')
        console.log("projects created: " +this.$store.state.count)

      
    },

  },
  mounted(){
      const urlParams = new URLSearchParams(window.location.search);
        ProductService.getProductById(urlParams.get('id')).then(product => this.newProduct = product)
  },
    name: 'Product-See',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>