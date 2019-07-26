import React from 'react';
import BentoList from '../components/BentoList';
import BentoForm from '../components/BentoForm';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#F6F8FA',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0 0',
      minHeight: '70rem',
      overflow: 'hidden'
    },
    bentolist: {
      backgroundColor: '#F6F8FA',
      margin: '0 1.6rem',
      flex: 1,
    },
    bentoform: {
      maxWidth: '40rem',
      margin: '1rem 1.6rem',
      flexGrow: '999',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100vw',
        maxWidth: '100vw',
        margin: '1rem 0',
      }
    }
  });

  export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
        <Header/>
        <div className={classes.root}>
        <div  className={classes.bentolist} >
        <BentoList/>
        </div>
        <div className={classes.bentoform}>
        <BentoForm 
        header={"Make a Bento.  "}
        remove={false}
        />
        </div>
        </div>
        </div>
    );
  }
