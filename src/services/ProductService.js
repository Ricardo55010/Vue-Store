import axios from 'axios'
import authHeader from './AuthHeader'
import Util from './Util'
class ProductService{
     getProducts(){
        return  axios.get(Util.urlAPI()+"/products",{ headers: authHeader() })
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
          Util.handleResponse(error)
        }
        )
    }
    getProductById(id){
      return  axios.get(Util.urlAPI()+"/products/"+id,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
        Util.handleResponse(error)
       
      }
      )
  }
    searchProducts(x){
      return  axios.get(Util.urlAPI()+"/search/"+x,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
        Util.handleResponse(error)
      }
      )
  }
  searchProductsByUser(id){
    return  axios.get(Util.urlAPI()+"/searchByUser/"+id,{ headers: authHeader() })
    .then(res=> {
      console.log(res.data)
      return res.data
    }).catch( error=>{
      Util.handleResponse(error)
     
    }
    )
}

     postProduct(newProduct){
        axios.post(Util.urlAPI()+"/products",newProduct,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        
       }
       )
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x},{ headers: authHeader() })
        .then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
       }
       )
     }
     patchProduct(updatedProduct){
      axios.patch("http://localhost:8080/products",updatedProduct,{ headers: authHeader() })
      .then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
       }
       )
     }
}

export default new ProductService()