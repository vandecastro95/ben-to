import React from 'react';
import BentoList from './BentoList';
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
      padding: '3.2rem',
      margin: '0 3.2rem',
      display: 'flex',
      justifyContent: 'center',
    },
  });

  export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
        <Paper className={classes.root}>
        <BentoList />
        </Paper>
        </div>
    );
  }
