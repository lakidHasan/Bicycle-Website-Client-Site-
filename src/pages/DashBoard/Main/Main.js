import React from 'react';
import { Grid } from '@mui/material';
import Orders from '../Orders/Orders';

const Main = () => {
    return (
        <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Orders></Orders>
                </Grid>
              </Grid>
    );
};

export default Main;