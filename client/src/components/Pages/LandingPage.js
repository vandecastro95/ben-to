import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Image from '../../images/Image01.jpg';
import Box from '@material-ui/core/Box';
import TopBar from '../components/LandingPageTopBar';
import '../../styles/components/landingPage.css';
import BentoForm from '../components/BentoForm'


const useStyles = makeStyles({
    root: {
      minHeight: '100vh',
      width: 'auto',
      backgroundImage: `linear-gradient(to right top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .5  ) ),  url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    },
    form: {
      position: 'fixed',
      top: '20%',
      left: '10%'
    }
  });

  export default function LandingPage() {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
        <TopBar />
          <Box className={classes.form}>
            <BentoForm 
            header={"Sell home cooked meals from the comfort of your own home."}
            />
          </Box>
        </div>
    );
  }
