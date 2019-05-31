
import React from 'react';
import LoginForm from '../Component/LoginForm';
import  Grid  from "@material-ui/core/Grid";

function Home() {
  return (
        <Grid container>
            <Grid item sm>
                Left Messge
            </Grid>
            <Grid item sm>
                <LoginForm/>
            </Grid>
        </Grid>
  );
}

export default Home;
