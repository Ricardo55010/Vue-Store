  <template>
    
    <div v-for="product in products" v-bind:key="product.id">
      <v-card  class="mb-3" :href="link(product.id)">
        <template v-slot:title>
      <span class="font-weight-black">{{product.name}}</span>
    </template>
        <v-card-text class="bg-surface-light pt-4">
          <v-row>
            <v-col   cols="12" md="6" lg="4" xl="3">
              <v-btn v-if="!product.image" icon="mdi-image"></v-btn>
              <v-img v-if="product.image" :src="image(product)" alt="product image" width="100" height="100" />
          </v-col>
          <v-spacer></v-spacer>
          <v-col   cols="12" md="6" lg="4" xl="3">
              {{ product.description }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col   cols="12" md="6" lg="4" xl="3">
              {{ product.quantity }} 
              {{ product.categories[0]?.name }}
          </v-col>
        </v-row>

        </v-card-text>
        
        
      </v-card>
      </div>
  </template>
  
  <script>
import ProductService from '@/services/ProductService';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components:{

    },
    data() {
    return {
       products: ""
    }},
    methods: {
      image(product){

      
      return "data:image/jpeg;base64," + product.image
    },
      link(id){
      return "edit?id="+id;
    } 
  },
    mounted(){
        ProductService.searchProductsByUser(JSON.parse(localStorage.getItem('user')).id)
        .then(allProducts => this.products = allProducts)

  }
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>