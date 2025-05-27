  <template>
    <v-select  v-model="size" :items="[1,2,3]">

    </v-select>
    <div>
      
      <v-btn color="blue-grey-darken-4" @click="changePage(page-1)" v-for="page in payload.totalPages" :key="page">{{ page }}</v-btn>
    </div>
       <div v-for="product in payload.content" v-bind:key="product.id">
        <v-card  class="mb-3" :href="link(product.id)">
          <template v-slot:title>
        <span class="font-weight-black">{{product.name}}</span>
      </template>
          <v-card-text class="bg-surface-light pt-4">
            <v-row>
              <v-col   cols="12" md="6" lg="4" xl="3">
                <v-btn v-if="!product.image"  icon="mdi-image"></v-btn>
                <v-img v-if="product.image" :src="image(product)" alt="product image" width="100" height="100" />
            </v-col>
            <v-spacer></v-spacer>
            <v-col   cols="12" md="6" lg="4" xl="3">
                {{ product.description }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col   cols="12" md="6" lg="4" xl="3">
                {{ product.quantity }} 
                {{ product.categories[0].name }}
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
       payload: "",
       size: 1
    }},
    methods: {
      changeSize(){
        alert("hola")
      }
      ,image(product){

      
      return "data:image/jpeg;base64," + product.image
    },
      link(id){
      return "product?id="+id;
    },
    changePage(page,size=1){
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.has('search'));
      console.log(urlParams.get('search'));
      ProductService.searchProducts(urlParams.get('search'),page,size)
        .then(allProducts => this.payload = allProducts)
        console.log("this is the list")
        console.log(this.payload)
    }
  },
    mounted(){
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.has('search'));
      console.log(urlParams.get('search'));
        ProductService.searchProducts(urlParams.get('search'))
        .then(allProducts => this.payload = allProducts)
        console.log("this is the list")
        console.log(this.payload)
  },
  watch: {
    size: function () {
      this.changePage(0,this.size)
    }
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