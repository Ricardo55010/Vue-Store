  <template>
    
    <div v-for="x in products" v-bind:key="x.id">
      <v-card  class="mb-3">
        <template v-slot:title>
      <span class="font-weight-black">{{x.name}}</span>
    </template>
        <v-card-text class="bg-surface-light pt-4">
          <v-row>
            <v-col   cols="12" md="6" lg="4" xl="3">
              <v-btn icon="mdi-image"></v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col   cols="12" md="6" lg="4" xl="3">
              {{ x.description }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col   cols="12" md="6" lg="4" xl="3">
              {{ x.quantity }} 
              {{ x.categories[0].name }}
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

  },
    mounted(){
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.has('search'));
      console.log(urlParams.get('search'));
        ProductService.searchProducts(urlParams.get('search'))
        .then(allProducts => this.products = allProducts)
        console.log("this is the list")
        console.log(this.products)
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