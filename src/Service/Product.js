import axios from "axios";
import api from "./apiUrl";

class Product{

    Get(){
        return axios.get( api.apiUrl  + "Product")
    }
    GetById(id){
        return axios.get( api.apiUrl  + `Product/${id}`)
    }
    Save(data){
        return axios.post( api.apiUrl  + "Product", data)
    }
    Update(id, data){
        return axios.put( api.apiUrl  + `Product/${id}`, data)
    }
    Delete(id, cb){
        if (window.confirm('Do you want to delete?')) {
            axios.delete( api.apiUrl + `Product/${id}`)
                .then((rec)=>{
                    alert('successfully Delete!!!');
                    if(typeof cb !== 'undefined'){
                        cb();
                    };
                }, (e)=>{
                    alert(e);
                })
        }
    }
}

export default new Product();