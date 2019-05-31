import axios from "axios";
import api from "./apiUrl";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    logIn(formValue, cb){
        axios.post( api.apiUrl  + "Auth/login", formValue)
        .then((res)=>{
            //alert('login successfully')
            //window.location.href = '/dashboard'
            //this.history.pushState(null, '/dashboard');
            localStorage.setItem('token', JSON.stringify(res.data));
            cb();
        }, (e)=>{
            alert(e);
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
}

export default new Auth();