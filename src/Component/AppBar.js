import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import auth from "../Service/auth";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const AppNavBar = props => {
    
    //render(){
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            POS
                        </Typography>
                        {
                                !auth.isAuthenticated()
                                ? 
                                <Button color="inherit" onClick={
                                    () => { props.history.push('/login') }
                                }>Login</Button>
                                :
                                <Button color="inherit" onClick={
                                    () => { auth.logOut(()=>{
                                        props.history.push('/login')
                                    }) }
                                }>LogOut</Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    //}
}

export default withRouter(AppNavBar);