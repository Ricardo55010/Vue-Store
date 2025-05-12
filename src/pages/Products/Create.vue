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
          categories: [],
          user: JSON.parse(localStorage.getItem('user'))
       },
       option : 0
    };
  },
  methods: {
    addCategory(x){
      this.newProduct.categories.push(x)
      this.showSnackBar("Category " + x.name+ " added")
    },
    deleteCategory(x){
      this.newProduct.categories.splice(this.newProduct.categories.indexOf(x),1)
      this.showSnackBar("Category " + x.name+ " deleted")
    }
    ,
    async postProduct() {

        const res = await ProductService.postProduct(this.newProduct)
        console.log(res)
        if(res.status != 400){
          this.$store.commit('increment')
          console.log("projects created: " +this.$store.state.count)
          setTimeout( () => this.$router.push({ path: '/login'}), 2000);
          this.showSnackBar("Product created")
        }else{
          const propertyNames = Object.keys(res.response.data);
          var msgValidations = ""
          for (var i = 0; i < propertyNames.length; i++) {
              var value = res.response.data[propertyNames[i]];
              msgValidations = msgValidations+value
          }
          this.showSnackBar("Product not created:" + msgValidations )
        }
    },
    showSnackBar(msg){
      this.snackbar = true;
      this.snackbarText = msg
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