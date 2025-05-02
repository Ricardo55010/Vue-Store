import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class ProductService{
     getProducts(){
        return  axios.get(Util.urlAPI()+"/products",{ headers: authHeader() })
        .then(Util.handleResponse)
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("Not found, error:" + error.status)
         
        }
        )
    }
    getProductById(id){
      return  axios.get(Util.urlAPI()+"/products/"+id,{ headers: authHeader() })
      .then(Util.handleResponse)
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
    searchProducts(x){
      return  axios.get(Util.urlAPI()+"/search/"+x,{ headers: authHeader() })
      .then(Util.handleResponse)
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
       console.log("Not found, error:" + error.status)
       
      }
      )
  }
  searchProductsByUser(id){
    return  axios.get(Util.urlAPI()+"/searchByUser/"+id,{ headers: authHeader() })
    .then(Util.handleResponse)
    .then(res=> {
      console.log(res.data)
      return res.data
    }).catch( error=>{
     console.log("Not found, error:" + error.status)
     
    }
    )
}

     postProduct(newProduct){
        axios.post(Util.urlAPI()+"/products",newProduct,{ headers: authHeader() })
        .then(Util.handleResponse)
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x},{ headers: authHeader() })
        .then(Util.handleResponse)
        .then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Error:" + error.status)
        
       }
       )
     }
     patchProduct(updatedProduct){
      axios.patch("http://localhost:8080/products",updatedProduct,{ headers: authHeader() })
      .then(Util.handleResponse)
      .then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        console.log("Errror:" + error.status)
        
       }
       )
     }
}

export default new ProductService()