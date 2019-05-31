import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import auth from "../Service/auth";
import axios from "axios";
import api from "../../Service/apiUrl";

function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

class UserCreate extends React.Component {

    state = {
        formValue: {
            firstName: '',
            lastName: '',
            userName: '',
            mobile: '',
            email: '',
            address: '',
            password: ''
        }
    }

    CreateUser = () => {
        var sData = this.state.formValue;
        var userData = {
            firstName: sData.firstName,
            lastName: sData.lastName,
            userName: sData.userName,
            person: {
                mobile: sData.mobile,
                email: sData.email,
                address: sData.address
            },
            password: sData.password
        }
        axios.post(api.apiUrl + "PosUser", userData)
            .then((res)=>{
                alert('successfully created')
            })
        console.log(userData)
    }

    handelChange = (_newValue) => {
        var item = {...this.state.formValue, ..._newValue};
        this.setState({formValue: item});
      }


    render(){
        return (
            <div>
                <Box display="flex" alignItems="center" flexDirection="column">
                
                    <h3>Create an account</h3>
                    <form noValidate autoComplete="off">
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <FormControl>
                                <InputLabel htmlFor="user-first-name">First Name</InputLabel>
                                <Input onChange={(e)=> this.handelChange({firstName: e.target.value})} id="user-first-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="user-last-name">Last Name</InputLabel>
                                <Input onChange={(e)=> this.handelChange({lastName: e.target.value})} id="user-last-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="user-user-name">User Name</InputLabel>
                                <Input onChange={(e)=> this.handelChange({userName: e.target.value})} id="user-user-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="user-mobile">Mobile</InputLabel>
                                <Input onChange={(e)=> this.handelChange({mobile: e.target.value})} id="user-mobile" aria-describedby="my-helper-text" />
                            </FormControl>
                            
                            <FormControl>
                                <InputLabel htmlFor="user-email">Email</InputLabel>
                                <Input onChange={(e)=> this.handelChange({email: e.target.value})} id="user-email" aria-describedby="my-helper-text" />
                            </FormControl>
                
                            <FormControl>
                                <InputLabel htmlFor="user-password">Password</InputLabel>
                                <Input type="password" onChange={(e)=> this.handelChange({password: e.target.value})} id="user-password" />
                            </FormControl>
                
                            
                            <FormControl>
                                <InputLabel htmlFor="user-mobile"></InputLabel>
                                <TextField
                                    id="user-mobile"
                                    label="Address"
                                    multiline
                                    rows="4"
                                    onChange={(e)=> this.handelChange({address: e.target.value})}
                                    margin="normal"
                                />
                            </FormControl>
                        </Box>
                        <div style={{marginTop: '25px'}}>
                            <Button variant="contained" onClick={ () => this.CreateUser()}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Box>
                
            </div>
          );
    }
  
}

export default UserCreate;
