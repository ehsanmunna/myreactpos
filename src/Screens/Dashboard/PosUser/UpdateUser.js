import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import auth from '../../../Service/auth';
import Notify from '../../../Service/Notify';
import JsonNullToString from '../../../Service/JsonNullHandle';

// function cloneObject(obj) {
//     var clone = {};
//     for(var i in obj) {
//         if(obj[i] != null &&  typeof(obj[i])=="object")
//             clone[i] = cloneObject(obj[i]);
//         else
//             clone[i] = obj[i];
//     }
//     return clone;
// }

class UserUpdate extends React.Component {

    state = {
        formValue: {
        // userId: '',
        // personId: '',
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            address: ''
        }
        , DBValue: null
    }

    componentDidMount(){
        auth.GetUser(this.props.match.params.id)
            .then(response=>{
                const res = JsonNullToString.ToString(response.data);
                this.setState({DBValue: res});
                this.setState({formValue: res.person});
            });
    }

    UpdateUser = () => {
        var sData = this.state.formValue;
        let dbData = this.state.DBValue;
        dbData.person = sData;
        auth.UpdateUser(dbData.userId, dbData)
            .then((res)=>{
                Notify.Alert('successfully updated');
            })
        // console.log(this.state.DBValue)
    }

    handelChange = (_newValue) => {
        var item = Object.assign({}, this.state.formValue, _newValue);
        //{...this.state.formValue, ..._newValue};
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
                                <Input onChange={(e)=> this.handelChange({firstName: e.target.value})} value={this.state.formValue.firstName} id="user-first-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="user-last-name">Last Name</InputLabel>
                                <Input onChange={(e)=> this.handelChange({lastName: e.target.value})} value={this.state.formValue.lastName} id="user-last-name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="user-mobile">Mobile</InputLabel>
                                <Input onChange={(e)=> this.handelChange({mobile: e.target.value})} value={this.state.formValue.mobile} id="user-mobile" aria-describedby="my-helper-text" />
                            </FormControl>
                            
                            <FormControl>
                                <InputLabel htmlFor="user-email">Email</InputLabel>
                                <Input onChange={(e)=> this.handelChange({email: e.target.value})} value={this.state.formValue.email} id="user-email" aria-describedby="my-helper-text" />
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
                                    value={this.state.formValue.address}
                                />
                            </FormControl>
                        </Box>
                        <div style={{marginTop: '25px'}}>
                            <Button variant="contained" onClick={ () => this.UpdateUser()}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Box>
                
            </div>
          );
    }
  
}

export default UserUpdate;
