<template>
  <v-card>
    <template v-slot:title>
      <span class="font-weight-black">Product Creation</span>
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
        v-model="newProduct.price"
        label="Price"
        required
      ></v-text-field>
      <v-text-field
        v-model="newProduct.description"
        label="Description"
        required
      ></v-text-field>
       <input type="file" @change="handleFileUpload( $event )"/>
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
               {{ category }} 
               {{ newProduct.categories }}
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
</template>
<script>
import ProductService from '@/services/ProductService';
export default {
    
    data() {
    return {
       name: "Nope",
       message: "",
       products: "",
       image: '',
       items: [
        {id: 1, 
         name: "Technology",
         description: "Geek stuff"
        },
        {id: 2, 
         name: "Sports",
         description: "Fit life"
        },
        {id: 3, 
         name: "Games",
         description: "Let it play!"
        }
      ],
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
          image: [],
          categories: [],
          user: JSON.parse(localStorage.getItem('user'))
       },
       option : 0
    };
  },
  methods: {
    addCategory(x){
      this.newProduct.categories.push(x)
      this.$store.commit('setSnackbar',"Category " + x.name+ " added")
    },
    deleteCategory(x){
      this.newProduct.categories.splice(this.newProduct.categories.indexOf(x),1)
      this.$store.commit('setSnackbar',"Category " + x.name+ " deleted")
    }
    ,

    handleFileUpload(event){
      this.image = event.target.files[0]
      },
    async postProduct() {

        const res = await ProductService.postProduct(this.newProduct,this.image)
        console.log(res)
        if(res.status != 400){
          this.$store.commit('increment')
          console.log("projects created: " +this.$store.state.count)
          this.$store.commit('setLoading',true);
          setTimeout( () => {
            this.$store.commit('setLoading',false);
            this.$router.push({ path: '/login'})}, 2000);
          this.$store.commit('setSnackbar',"Product created: ")
        }else{
          const propertyNames = Object.keys(res.response.data);
          var msgValidations = ""
          for (var i = 0; i < propertyNames.length; i++) {
              var value = res.response.data[propertyNames[i]];
              msgValidations = msgValidations+value
          }
          this.$store.commit('setSnackbar',msgValidations)
        }
    }

  },
  mounted(){
        this.name = "Richard"
        ProductService.getProducts().then(allProducts => this.products = allProducts)
        console.log("this is the list")
        console.log(this.products)
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>