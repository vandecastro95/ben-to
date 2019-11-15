import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import BentoListFilters from './bentoListFilter';
import BentoItems from './bentoItems';
import { connect } from 'react-redux';
import { Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getBentos } from '../../actions/Bento';

const BentoList = ({ getBentos, bento: { bentos, loading } }) => {
  useEffect(() => {
    getBentos();
  }, [getBentos]);

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
    }
  });

  const classes = useStyles();
  return (
    <Fragment>
      <Paper elevation={21}>
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
          {bentos.length === 0 ? (
            <p> No bento </p>
          ) : (
            bentos &&
            bentos.map(bento => {
              return (
                <Paper elevation={2} key={bento._id} className={classes.bento}>
                  <BentoItems key={bento._id} bento={bento} />
                </Paper>
              );
            })
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
