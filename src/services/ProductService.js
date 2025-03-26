import axios from 'axios'

class ProductService{
     getProducts(){
        return  axios.get("http://localhost:8080/products")
        .then(res=> {
          console.log(res.data)
          return res.data
        })
    }
     postProduct(newProduct){
        axios.post("http://localhost:8080/products",newProduct)
     }
     deleteProduct(x){
        axios.delete("http://localhost:8080/products",{data:x})
     }
}


export default new ProductService()