import React from "react";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';


const NavBarProduct = props => {
    
    //render(){
        return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Typography style={{flexGrow: 1}} variant="h6" color="inherit">
                        Product
                    </Typography>
                    <Button color="inherit" onClick={
                        () => { props.history.push('/dashboard/productlist') }
                    }>
                        <Icon>list</Icon>
                    </Button>
                    {/* <Link to="/dashboard/productcreate">Add new Product</Link> */}
                </Toolbar>
            </AppBar>
        )
    //}
}

export default withRouter(NavBarProduct);