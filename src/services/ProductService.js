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
          return error
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
        return error
      }
      )
  }
    searchProducts(x,page=0){
      return  axios.get(Util.urlAPI()+"/search/"+x+"?page="+page,{ headers: authHeader() })
      .then(res=> {
        console.log(res.data)
        return res.data
      }).catch( error=>{
        Util.handleResponse(error)
        return error
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
      return error
    }
    )
}

     postProduct(newProduct){
        return axios.post(Util.urlAPI()+"/products",newProduct,{ headers: authHeader() })
        .then(res=> {
         console.log("Created" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }
     deleteProduct(x){
        return axios.delete("http://localhost:8080/products",{data:x},{ headers: authHeader() })
        .then(res=> {
         console.log("Deleted" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }
     patchProduct(updatedProduct){
      return axios.patch("http://localhost:8080/products",updatedProduct,{ headers: authHeader() })
      .then(res=> {
         console.log("Updated" + res.data)
         return res.data
       }).catch( error=>{
        Util.handleResponse(error)
        return error
       }
       )
     }
}

export default new ProductService()