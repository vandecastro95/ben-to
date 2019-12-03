import React, { Fragment, useEffect, Suspense, useState } from 'react';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';

import BentoListFilters from './bentoListFilter';
import BentoItems from './bentoItems';
import { connect } from 'react-redux';
import { Box, Typography, Grid, Paper, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getBentos } from '../../actions/Bento';

const BentoList = ({ getBentos, bento: { bentos, loading } }) => {
  useEffect(() => {
    getBentos();
  }, [getBentos]);

  const [bentoClicked, clickBento] = useState(false)

  const onBentoClick = (bento) => {
    clickBento(!bentoClicked)
    console.log(bento, clickBento)
  }

  const useStyles = makeStyles({
    root: {
      height: 'fit-content',
      minHeight: '50rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '1.6rem'
    },
    header: {
      flexGrow: 1
    },
    headerSearch: {
      marginTop: '0rem'
    },
    bento: {
      margin: '.5rem'
    },
    //bentoList
    BentoList: {
    },
    //bentoselected
    BentoSelected: {
      width: '90%',
      minHeight: '50rem',
      margin: '20px auto'
    },
    card: {
      width: '100%',
      height: '100%'
    },
    image: {
      height: '45 rem',
      width: 'auto'
    },
    BentoSelectedHeader: {

    },
    BentoSelectedDescription: {
      
    },
    BentoSelectedDetailsPaper: {
      width: '100px',
      height: '100px',
      border: 'black 1px'
    }
  });

  const classes = useStyles();

  const BentoListComponent = () => (
    <div className={classes.BentoList}>
    <Suspense fallback={<Spinner />}>
      { 
        bentos.map(bento => {
         return (
             <Paper elevation={2} key={bento._id} className={classes.bento} onClick={() => onBentoClick(bento)}>
               <BentoItems key={bento._id} bento={bento} />
             </Paper>
         );
       })
       }
    </Suspense>
    </div>
  ) 

  const BentoSelected = (bento) => {
    
    const { _id, nameofbento, cuisine, ingredients, cost, image, user, amount } = bento.bento
    
    return (
      <Box className={classes.BentoSelected} m={1}>
      {console.log(bento.bento)}
        <Grid container spacing={6} style={{minHeight: '40rem'}}>

        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={image}  
              title={nameofbento}
            />
          </Card>
        </Grid>

        <Grid item xs={9}>
          <Typography 
          gutterbottom='true'
          variant='h3'
          component='h3'
          className={classes.BentoSeletedHeader}
          >
            {nameofbento}
          </Typography>
          <Typography 
          gutterbottom='true'
          variant='body1'
          component='body1'
          className={classes.BentoSelectedDescription}
          >
            {'Authentic ' + cuisine + ' food, contains ' + ingredients.join(',') + ''}
          </Typography>

          <Box className={classes.BentoSelectedDetails}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{textAlign: 'flex-end'}}>
                <Box style={{width: '100px', marginRight: '10px'}}>
                  Amount
                </Box>
                  20
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )}

  return (
    <Fragment>
      <Paper square elevation={21}>
        <Box boxShadow={1} className={classes.headerContainer}>
          <Typography
            gutterbottom='true'
            variant='h2'
            component='h2'
            className={classes.header}
          >
            <Box
              textAlign='justify'
              m={1}
              p={2}
              fontWeight='fontWeightBold'
              letterSpacing={-1}
            >
              Bento
            </Box>
          </Typography>

          <Box className={classes.headerSearch} gutterbottom='true'>
            {/* <BentoListFilters /> */}
          </Box>
        </Box>
        <div className={classes.root}>
          {
            bentos.length === 0 ? (
              <div className={classes.BentoList}>
               <p> No bento </p>
              </div>
            ) : (
            
              <BentoSelected bento={{...bentos[1]}}/>
            // bentos && bentoClicked == false &&
            // <BentoListComponent />
          )}
        </div>
      </Paper>
    </Fragment>
  );
};

BentoList.propTypes = {
  getBentos: PropTypes.func.isRequired,
  bento: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bento: state.bento
});

export default connect(mapStateToProps, { getBentos })(BentoList);
