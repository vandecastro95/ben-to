import React from 'react';
import { connect } from 'react-redux';
import BentoListItem from './BentoListItem'
import selectBento from './selectors/bento';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bento: {
        margin: '1.6rem 1.6rem'
    }
  });

  function BentoList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
    {
        props.bento.length === 0 ? (
            <p> No bento </p>
        ) : (
            
            props.bento &&
            props.bento.map((expense) => {
                return (
                    <Paper
                    className={classes.bento}>

                    <BentoListItem
                    
                    {...expense} 
                    key={expense.id}
                    />
                    </Paper>
                )
            })
        )
    }
        
    </div>
    );
  }

const mapStatetoProps = (state) => {
    return {
        bento: selectBento(state.bento, state.filters)
    }
}

export default connect(mapStatetoProps)(BentoList);