
import React from 'react';
import  Grid  from "@material-ui/core/Grid";
import UserCard from '../../Component/userCard';
import LeftMenu from '../../Component/dash.leftmenu';
import { Route } from "react-router-dom";
import ProductListPage from './Product/product.list';
import ProductCreatePage from './Product/product.create';
import ProductUpdatePage from './Product/product.update';
import UserUpdate from './PosUser/UpdateUser';
import ItemListPage from './Item/item.list';
import ItemCreatePage from './Item/item.create';

function Dashboard() {
  return (
        <Grid container>
            <Grid item sm={3}>
                <UserCard/>
                <LeftMenu/>
            </Grid>
            <Grid item sm={9}>
                {/* <h3>Welcome to Dashboard</h3>
                <div>
                    Right content
                </div> */}
                
                    <Route path="/dashboard/productlist" component={ProductListPage} />
                    <Route path="/dashboard/productcreate" component={ProductCreatePage} />
                    <Route path="/dashboard/productedit/:id" component={ProductUpdatePage} />
                
                    <Route path="/dashboard/itemlist" component={ItemListPage} />
                    <Route path="/dashboard/itemcreate" component={ItemCreatePage} />

                    <Route path="/dashboard/updateuser/:id" component={UserUpdate} />
                
            </Grid>
        </Grid>
  );
}

export default Dashboard;
