import axios from "axios";
import api from "./apiUrl";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    logIn(formValue, callback, errorcallback){
        axios.post( api.apiUrl  + "Auth/login", formValue)
        .then((res)=>{
            //alert('login successfully')
            //window.location.href = '/dashboard'
            //this.history.pushState(null, '/dashboard');
            localStorage.setItem('token', JSON.stringify(res.data));
            if (callback !== 'undefined') {
                callback();
            }
        }, (e)=>{
            
            if (errorcallback !== 'undefined') {
                errorcallback(e);
            }
        })
        
    }

    logOut(cb){
        localStorage.removeItem('token');
        cb();
    }

    isAuthenticated(){
        const hasToken = localStorage.getItem('token');
        if (hasToken == null) {
            this.authenticated = false;
        } else {
            this.authenticated = true;
        }
        return this.authenticated;
    }
    GetUser(id){
        return axios.get( api.apiUrl  + `PosUser/${id}`)
    }
    UpdateUser(id, data){
        return axios.put( api.apiUrl  + `PosUser/${id}`, data)
    }
}

export default new Auth();