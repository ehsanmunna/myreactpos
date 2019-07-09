import axios from "axios";
import api from "./apiUrl";

class ItemService{

    Get(){
        return axios.get( api.apiUrl  + "item");
    }
    GetById(id){
        return axios.get( api.apiUrl  + `item/${id}`);
    }
    Save(data){
        return axios.post( api.apiUrl  + "item", data);
    }
    Update(id, data){
        return axios.put( api.apiUrl  + `item/${id}`, data);
    }
    Delete(id, cb){
        if (window.confirm('Do you want to delete?')) {
            axios.delete( api.apiUrl + `item/${id}`)
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

export default new ItemService();