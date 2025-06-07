  <template>
    <div v-for="order in orders" v-bind:key="order.id">
      <v-card  class="mb-3" :href="link(order.id)">
        <template v-slot:title>
      <span class="font-weight-black">Bought by: {{order.user.name}}</span>
      <v-spacer></v-spacer>
      <span class="font-weight-black">Bought : {{order.dateTime}}</span>
      <v-spacer></v-spacer>
      <span class="font-weight-black">Total: ${{order.total}} </span>
    </template>
        <v-card-text class="bg-surface-light pt-4">
          <v-row>

          <v-col v-for="product in order.productList" v-bind:key="product.id"   cols="12" md="6" lg="4" xl="3">
              
            <v-card  class="mb-3" :href="link(product.id)">
                <template v-slot:title>
                  <span class="font-weight-black">{{product.product.name}}</span>
                  
                </template>
                <v-card-text class="bg-surface-light pt-4 ">
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-col   cols="12" md="6" lg="4" xl="3">
                      <v-btn v-if="!product.product.image"  icon="mdi-image"></v-btn>
                      <v-img v-if="product.product.image" :src="image(product.product)" alt="product image" width="100" height="100" />
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                  Amount: {{ product.amount }}
                </v-card-text>

              </v-card>
                          
            </v-col>
          <v-spacer></v-spacer>
          <v-col   cols="12" md="6" lg="4" xl="3">
              {{ order.id}} 
              {{ order.id }}
          </v-col>
        </v-row>

        </v-card-text>
        
        
      </v-card>
      </div>
  </template>
  
  <script>
import OrderService from '@/services/OrderService';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components:{

    },
    data() {
    return {
       orders: ""
    }},
    methods: {
      image(newProduct){

      
      return "data:image/jpeg;base64," + newProduct.image
    },
      link(id){
      return "product?id="+id;
    } 
  },
    mounted(){
        OrderService.getOrders(JSON.parse(localStorage.getItem('user')).id)
        .then(allOrders => this.orders = allOrders)

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