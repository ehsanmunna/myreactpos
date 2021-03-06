import React from "react";
import Product from "../../../Service/Product";
import { Link } from "react-router-dom";
import { Table, TableHead, TableRow, TableCell, TableBody, AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";

import Icon from '@material-ui/core/Icon';


class ProductListPage extends React.Component {
    state = {
        data: []
    }
    componentDidMount(){
        this.GetProducts();
    }

    GetProducts(){
        Product.Get()
            .then(res => {
                this.setState({data: res.data});
            })
    }

    Delete(id){
        Product.Delete(id, ()=>{
            this.GetProducts();
        })
    }

    render(){
        return (
            <div>
                <AppBar position="sticky" color="default">
                    <Toolbar>
                        <Typography style={{flexGrow: 1}} variant="h6" color="inherit">
                            Product
                        </Typography>
                        <Button color="inherit" onClick={
                            () => { this.props.history.push('/dashboard/productcreate') }
                        }>
                            <Icon>add</Icon>
                        </Button>
                        {/* <Link to="/dashboard/productcreate">Add new Product</Link> */}
                    </Toolbar>
                </AppBar>
                    
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell>&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table">
                            {this.state.data.map((item,i) =>
                                <TableRow key={i}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <Link to={`/dashboard/productedit/${item.prodId}`}>
                                            <Icon>edit</Icon>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {/* <button onClick={ () => { this.Delete(item.prodId) } }>
                                            <Icon>delete</Icon>
                                        </button> */}
                                        <IconButton onClick={ () => { this.Delete(item.prodId) } } aria-label="Delete">
                                            <Icon>delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                

                </div>
            </div>
        )
    }
}

export default ProductListPage; 