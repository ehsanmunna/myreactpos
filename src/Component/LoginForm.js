import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import auth from "../Service/auth";
import {withRouter} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';


const style = {
  contentSpacing: {
    margin: 10
  }
}

class LoginForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      //props: props,
      loading: false,
      formValue: {
        userName: '',
        password: ''
      }
      , messages: null
    }
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handelChange = (_newValue) => {
    var item = Object.assign({}, this.state.formValue, _newValue);
    // var item = { this.state.formValue,..._newValue};
    this.setState({formValue: item});
  }

  handleSubmit = (event) => {
    this.setState({loading: true});
    auth.logIn(this.state.formValue
      , () => {
        this.setState({loading: false});
        const path = '/dashboard';
        this.props.history.push(path);
      }, (e)=>{ 
        this.setState({loading: false, messages: e.message});
      }
    );
    event.preventDefault();
  }

  render(){
    return (
          <div>
              <Box display="flex" alignItems="center" flexDirection="column">
                <h2>Login to your account</h2>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                  <Box display="flex" alignItems="center" flexDirection="column">
                      <Box display="flex" alignItems="center" flexDirection="column">
                        <Button style={style.contentSpacing} variant="contained">Continue With Facebook</Button>
                        <Button style={style.contentSpacing} variant="contained">Continue With Google</Button>
                      </Box>

                      <div>--- Or ---</div>

                    <FormControl>
                        <InputLabel htmlFor="user-input">User Name</InputLabel>
                        <Input onChange={(e)=> this.handelChange({userName: e.target.value})} id="user-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Username is required.</FormHelperText>
                      </FormControl>

                      <FormControl>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <Input type="password" onChange={(e)=> this.handelChange({password: e.target.value})} id="password-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Password is required.</FormHelperText>
                      </FormControl>

                      {/* <pre>
                      {this.state.formValue}
                      </pre> */}
                      <div style={{color: 'red', padding: 5}}>{this.state.messages}</div>
                      <div style={{ flex: 1, flexDirection: 'row', marginTop: '25px'}}>
                        
                        {/* <ServerMessage message={this.props.message} /> */}
                        <Button type="submit" variant="contained">
                          {
                            this.state.loading ? <span><CircularProgress size={20} /> Checking...</span> : <span>Continue</span>
                          }
                        </Button>
                      </div>

                      <Link to="/usercreate">Create Account</Link>

                  </Box>
                  
                </form>
              </Box>
          </div>
      );
  }
}

export default withRouter(LoginForm);