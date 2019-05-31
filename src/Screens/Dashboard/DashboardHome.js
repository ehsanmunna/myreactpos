
import React from 'react';
import  Grid  from "@material-ui/core/Grid";
import UserCard from '../../Component/userCard';
import LeftMenu from '../../Component/dash.leftmenu';
import ProductList from './Product/product.list';
import { Route } from "react-router-dom";

function Dashboard() {
  return (
        <Grid container>
            <Grid item sm={3}>
                <UserCard/>
                <LeftMenu/>
            </Grid>
            <Grid item sm={9} style={{padding: 10}}>
                {/* <h3>Welcome to Dashboard</h3>
                <div>
                    Right content
                </div> */}
                <Route path="/dashboard/productlist" component={ProductList} />
            </Grid>
        </Grid>
  );
}

export default Dashboard;
