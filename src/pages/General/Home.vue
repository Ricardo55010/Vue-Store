  <template>
    <Carrousel></Carrousel>

    <RowSection></RowSection>
  </template>

  <script>
import Carrousel from '@/components/Sections/Carrousel.vue';
import RowSection from '@/components/Sections/RowSection.vue';
import CategoryService from '@/services/CategoryService';
import ProductService from '@/services/ProductService';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components:{
      Carrousel,
      RowSection
    },
    data() {
    return {
       categories: "",
    }
  },
    mounted(){
      CategoryService.getCategories().then(categories => {
        this.$store.commit('setCategories',categories)
      });
      ProductService.getProducts().then(products => {
        this.$store.commit('setProducts',products)
      });

    },
    methods: {

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