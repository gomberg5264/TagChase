import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import boxPic from './box.png';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 100,
    },
    image:{
        width: 500,
        height: 604,
        marginTop: -100,
    },
    title:{
        textAlign: "left",
        fontWeight: 600,
    },
    subtitle:{
        textAlign: "left",
        fontSize: 20,
    },
    button:{
        backgroundColor: '#EA3C53',
        marginLeft: -500,
        marginTop: 20,
    }
  }));
  
  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
         
          <Grid item xs={6}>
            <div className={classes.container}>
                <Typography variant="h3" className={classes.title} gutterBottom>
                    Get the best deal on your next online purchase.
                 </Typography>
                 <Typography variant="body1" className={classes.subtitle} gutterBottom>
                     TagChase is a free price tracker for Amazon.in, search from Amazon's millions of 
                     products here, add your favourite products into your ChaseList, track their prices and buy them immediately when they drop.

                     We help you decide what to buy and save money on your next purchase from Amazon, easily wiht an intuitive user interface.
    
                </Typography>
                <Button variant="contained" className={classes.button}>START CHASING</Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.container}>
             <img className={classes.image} src={boxPic}></img>
            </div>
          </Grid>
          
        </Grid>
      </div>
    );
  }
