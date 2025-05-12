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
        :readonly="true"
      ></v-text-field>
      <v-text-field
        v-model="newProduct.quantity"
        label="Quantity"
        required
        :readonly="true"
      ></v-text-field>
      <v-text-field
        v-model="newProduct.description"
        label="Description"
        required
        :readonly="true"
      ></v-text-field>
            <v-row class="mb-5 d-flex justify-center" >
      <div v-for="element in newProduct.categories" v-bind:key="element.id">
        
        <v-chip>{{element.name}}</v-chip>
        
      </div>
    </v-row>
      <v-row>
        <v-col>
          <v-textarea
        v-model="comment.comment"
        label="Comments"
        required
      ></v-textarea>
        </v-col>

      </v-row>

      <v-btn v-if="user!=null" @click="addComment" color="teal-darken-4"> Add Comment</v-btn>
      <v-btn v-if="user==null" @click="login" color="teal-darken-4"> Want to share your thoughts, login!</v-btn>
      <v-btn v-if="user!=null" @click="addToShoppingCar()" color="deep-orange-accent-4" > add to car</v-btn>
  </form>
  </v-card>
{{ newProduct }}

{{ comments }}

<v-card v-for="comment in comments" v-bind:key="comment.id">
    <template v-slot:title>
      <span class="font-weight-black">{{comment.user.name}}</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Si</span>
    </template>
    {{ comment.comment }}
  </v-card>

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
import ShoppingCartService from '@/services/ShoppingCartService';
import CommentService from '@/services/CommentService';
export default {
    
    data() {
    return {
       name: "Nope",
       snackbar : false,
       snackbarText:"",
       message: "",
       products: "",
       user:  JSON.parse(localStorage.getItem('user')),
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
       comment:{
          id :"",
          comment:"",
          user:JSON.parse(localStorage.getItem('user')),
          product: {
            id:""
          }
       },
       comments:[],
       option : 0
    };
  },
  methods: {

    addToShoppingCar(){
      if(this.$store.state.shoppingCart.id==''){
        this.$store.state.shoppingCart.productList.push(this.newProduct)
        ShoppingCartService.postShopping(this.$store.state.shoppingCart);
      }
      else{
        this.$store.state.shoppingCart.productList.push(this.newProduct)
        ShoppingCartService.patchShopping(this.$store.state.shoppingCart);
      }
      this.showSnackBar("Product added to Shopping cart")
      },
    addComment(){
      this.comment.product.id = this.newProduct.id
      CommentService.postComment(this.comment)
      this.showSnackBar("Comment added")
      location.reload(true);
    },
    login(){
      this.$router.push('/login')
    },
    showSnackBar(msg){
      this.snackbar = true;
      this.snackbarText = msg
    }
  },

  mounted(){
      const urlParams = new URLSearchParams(window.location.search);
        ProductService.getProductById(urlParams.get('id')).then(product => this.newProduct = product)
        CommentService.getCommentsById(urlParams.get('id')).then(comments => this.comments = comments)
  },
    name: 'Product-See',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>