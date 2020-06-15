import React from 'react';
import { Grid } from '@material-ui/core';
import Header from "./components/header";
import Landing from "./components/landing";


const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Landing />
      </Grid>
    </Grid>
  );
};

export default App;
