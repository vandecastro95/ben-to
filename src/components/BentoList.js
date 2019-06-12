import React from 'react';
import { connect } from 'react-redux';
import BentoListItem from './BentoListItem'
import selectBento from './selectors/bento';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BentoListFilters from './BentoListFilters';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '50rem'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    header: {
        flexGrow: 1
    },
    headerSearch: {
        marginTop: '3.2rem'
    },
    bento: {
        margin: '.5rem'
    }
  });

  function BentoList(props) {
    const classes = useStyles();
    return (
        <Paper>
        <div className={classes.headerContainer}>

            <Typography 
                gutterBottom 
                variant="h2"
                component="h2" 
                className={classes.header}>
                    <Box 
                        textAlign="justify" 
                        m={1}
                        p={2}
                        fontWeight="fontWeightBold"
                        letterSpacing={-1} >
                            Bento
                    </Box>
            </Typography>

            <Box
            className={classes.headerSearch}
            gutterBottom
            >
            <BentoListFilters/>
            </Box>
        </div>
        <div  className={classes.root}>
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
    </Paper>
    );
  }

const mapStatetoProps = (state) => {
    return {
        bento: selectBento(state.bento, state.filters)
    }
}

export default connect(mapStatetoProps)(BentoList);