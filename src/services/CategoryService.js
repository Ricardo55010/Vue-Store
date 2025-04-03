import axios from 'axios'

class CategoryService{
     getCategories(){
        return  axios.get("http://localhost:8080/categories")
        .then(res=> {
          console.log(res.data)
          return res.data
        }).catch( error=>{
         console.log("No se encontró, error:" + error.status)
         
        }
        )
    }

}


export default new CategoryService()