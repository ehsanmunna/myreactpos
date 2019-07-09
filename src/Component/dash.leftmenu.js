import React from "react";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const LeftMenu = () => {
    
    return (
        <div>
            <List component="nav" aria-label="Main mailbox folders">
                <ListItemLink button component="a" href="/dashboard/productlist">
                    <ListItemText primary="Product" />
                </ListItemLink>
                <ListItemLink button component="a" href="/dashboard/itemlist">
                    <ListItemText primary="Item" />
                </ListItemLink>
                <ListItemLink button>
                    <ListItemText primary="Drafts" />
                </ListItemLink>
            </List>
        </div>
    )

}

export default LeftMenu; 