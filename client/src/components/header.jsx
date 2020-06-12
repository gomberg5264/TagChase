import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#D3D3D3',
    '&:hover': {
      backgroundColor: '#EA3C53' ,
    },
    marginRight: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  logo: {
    flexGrow: 1,
  },

  appBrand: {
    width: 100,
    height: 100,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#FF0000'" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
          <img className={classes.appBrand}
            src={"https://lh3.googleusercontent.com/Mqxhk037pjHIgMJ_T6DbghPLK86Qr42ya3BJukaFsURSaoC2-g5qJgT1XsjJarGI9la30vdG-r1odbk-bTWpGSUfcIm6GjtXnxMmDHOmHj25jGSdrZO-CKUzjP_FLDShTbfYD2238hekINse2US6ASIZEAVHpkrnpAVoPJhx9LyxTAPNZOQ1kOB0GEuooidmIcB1YQdtx3E7Ow9U0sUinp8JpD7G0B_Y5bzh8i5F7ASgItmhgwvxPxRkqAc90SVRRzMRvxGZK1laKixlXRFhyCrWNLG0iClktONNFv77sip0IOwtCzAcZXPGEyxgcCUhMrXsQrVbDilWEohMkC8UlWbsTODzJSB8-xFaP2Twd9IRStYLCmPpooMKACxGOBpQq2q4EqoIF_mgnHz65srD05KFeXocNlW6NKR8iEQVAcJ3RbQ2GGV8OJvZfUwvzA0QubbZrdD2GVxloOMvP-vz2gEgJgPs1b9u9SI7258oWNvbPNUQr1LiGQ9blIJujKffO4ZLUT316ENl3cW6TVpTocPJMc-yMTFv5099Jl_aJ74Dx7-Ple_cpzOSu0CD72bIUL4hssVPx6p1Jn3E0MbBxwzao1jvYvekgH2XVogtW4-OgSwO6Y9yRwRkxcCqgZuYpEuoocPp8F4uthFkXvY438kZY0bjbj8WaRGpl3IdPox_dOuY7efYRGfxNfAINw=s265-no?authuser=1"}
            alt="Bosch Logo"
          />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Amazon..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="#000000">ChaseList</Button>
          <Button color="#000000">Log In</Button>
          <Button color="#000000">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
