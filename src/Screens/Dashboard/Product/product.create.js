import React from "react";
import Product from "../../../Service/Product";
import { FormControl, Box, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import Notify from "../../../Service/Notify";
import NavBarProduct from "../../../Component/Nav.Product";


class ProductCreatePage extends React.Component {
    state = {
        formValue: null
    }

    Save = () => {
        const data = this.state.formValue;
        Product.Save(data)
            .then(()=>{
                Notify.Alert("successfully saved");
            });
    }

    handelChange = (_newValue) => {
        var item = Object.assign({}, this.state.formValue, _newValue);
        // var item = { this.state.formValue,..._newValue};
        this.setState({formValue: item});
      }

    render(){
        return (
            <div>
                <NavBarProduct/>
                <div>
                <form noValidate autoComplete="off">
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <FormControl>
                            <InputLabel htmlFor="user-input">Product Name</InputLabel>
                            <Input onChange={(e)=> this.handelChange({name: e.target.value})} id="user-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Product Name is required.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="user-input">Description</InputLabel>
                            <Input onChange={(e)=> this.handelChange({description: e.target.value})} id="user-input" aria-describedby="my-helper-text" />
                        </FormControl>


                        <div style={{marginTop: '25px'}}>
                            <Button variant="contained" onClick={ () => this.Save()}>
                                Save
                            </Button>
                        </div>


                    </Box>
                
                </form>
                </div>
            </div>
        )
    }
}

export default ProductCreatePage; 