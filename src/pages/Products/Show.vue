<template>
  <v-card>
    <template v-slot:title>
      <span class="font-weight-black">Product</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Please fill in the following parameters</span>
    </template>
      <img :src="image()" width="100" height="100" />
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
        v-model="newProduct.price"
        label="Price"
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
      <v-text-field v-model="wantedByUser" type="number" label="Wanted"></v-text-field>
      <v-btn v-if="user!=null" @click="addToShoppingCar()" color="deep-orange-accent-4" > add to car</v-btn>
  </form>
  </v-card>
{{ newProduct }}

{{ comments }}

<Comments :comments="comments"></Comments>


</template>
<script>
import ProductService from '@/services/ProductService';
import ShoppingCartService from '@/services/ShoppingCartService';
import CommentService from '@/services/CommentService';
import Comments from '@/components/Sections/Comments.vue';

export default {
    components: {Comments},
    data() {
    return {
       name: "Nope",
       message: "",
       products: "",
       user:  JSON.parse(localStorage.getItem('user')),
       wantedByUser:0,
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
          price: 0,
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
        this.$store.state.shoppingCart.productList.push({product:this.newProduct,amount:this.wantedByUser})
        ShoppingCartService.postShopping(this.$store.state.shoppingCart);
      }
      else{
        this.$store.state.shoppingCart.productList.push({product:this.newProduct,amount:this.wantedByUser})
        ShoppingCartService.patchShopping(this.$store.state.shoppingCart);
      }
      this.$store.commit('setSnackbar',"Product added to Shopping cart")
      },
    async addComment(){
      this.comment.product.id = this.newProduct.id
      const res = await CommentService.postComment(this.comment)
      if(res.status == 400){
        const propertyNames = Object.keys(res.response.data);
          var msgValidations = ""
          for (var i = 0; i < propertyNames.length; i++) {
              var value = res.response.data[propertyNames[i]];
              msgValidations = msgValidations+value
          }
          this.$store.commit('setSnackbar',msgValidations)
          return
      }
      this.$store.commit('setSnackbar',"Comment added")
      location.reload(true);
    },

    login(){
      this.$router.push('/login')
    },
    image(){

      
      return "data:image/jpeg;base64," + this.newProduct.image
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