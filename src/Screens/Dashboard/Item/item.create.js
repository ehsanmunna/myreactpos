import React from "react";
import { FormControl, Box, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import NavBarProduct from "../../../Component/Nav.Product";
import ItemService from "../../../Service/ItemService";
import Notify from "../../../Service/Notify";


class ItemCreatePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formValue: {
                product: {
                    name: '',
                    description: ''
                }
            }
        }
        this.handelChange = this.handelChange.bind(this);
    }
    

    Save = () => {
        const data = this.state.formValue;
        ItemService.Save(data)
            .then(()=>{
                Notify.Alert("successfully saved");
            })
        //console.log(data);
    }
    
    handelSubChange = (e) => {
        const { product } = { ...this.state.formValue};
        const {name, value} = e.target;
        product[name] = value;
        this.setState({["product"]: product});
    }

    handelChange = (e) => {
        const { formValue } = { ...this.state };
        const {name, value} = e.target;
        formValue[name] = value;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div>
                <NavBarProduct/>
                <div>
                    <form noValidate autoComplete="off">
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <FormControl>
                                <InputLabel htmlFor="user-name">Product Name</InputLabel>
                                <Input onChange={(e)=> this.handelSubChange(e) } id="user-name" name="name" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Product Name is required.</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="user-costPrice">Cost Price</InputLabel>
                                <Input onChange={(e)=> this.handelChange(e) } name="costPrice" id="user-costPrice" aria-describedby="my-helper-text" />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="user-salsePrice">SalsePrice</InputLabel>
                                <Input onChange={(e)=> this.handelChange(e)} name="salsePrice" id="user-salsePrice" aria-describedby="my-helper-text" />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="user-reorderlavel">Reorder lavel</InputLabel>
                                <Input onChange={(e)=> this.handelChange(e)} name="reorderlavel" id="user-reorderlavel" aria-describedby="my-helper-text" />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="user-description">Description</InputLabel>
                                <Input onChange={(e)=> this.handelSubChange(e) } name="description" id="user-description" aria-describedby="my-helper-text" />
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

export default ItemCreatePage; 