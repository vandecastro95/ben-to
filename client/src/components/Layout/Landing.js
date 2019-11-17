import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, TextField } from '@material-ui/core'
import ImageWithOverlay from '../shared/ImageWithOverlay'
import pansit from '../../assets/bihon.jpg';
import landingBG from '../../assets/steaks.jpg';
import katsu from '../../assets/katsu.jpg';
import ramen from '../../assets/ramen.jpg';

const Landing = ({ isAuthenticated }) => {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent'
    },
    landing: {
      width: '100%',
      maxWidth: '85%',
      position: 'relative',
      height: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    },
    landingContent: {
      width: '100%',
      height: '60vh',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',

      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        height: '50vh',
      },
    },
    landingContentImg: {
      width: '100%',
      height: '100%',
      background: `url(${landingBG}), linear-gradient(red, black)     `,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: '-1'
    },
    landingContentText: {
      margin: '0 auto',
      width: '100%',
      maxWidth: '880px',
      // background: 'rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%,-50%)',
      height: '350px'
    },
    landingHeader: {
      fontSize: '36px',
      textAlign: 'left',
      lineHeight: '1.25',
      fontWeight: '700',
      color: 'white',
      fontStretch: 'normal',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      marginBottom: '0px'
    },
    landingSubtitle: {
      padding: '0',
      textAlign: 'left',
      width: '100%',
      color: '#616161',
      maxWidth: '50rem',
      fontWeight: '600',
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
      margin: '0',
      marginBottom: '5px'
    },
    textField: {
      width: '100%',
      paddingTop: '5px',
      backgroundColor: '#f5f5f5',

      '&:active': {
        outline: 'none',
        border: 'none'
      }
    },
    landingTrending: {
      color: '#fafafa',
      textAlign: 'left',
      fontSize: '13px',
      margin: 0
    }
  });
  
  const classes = useStyles();

  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to='/dashboard' />;
  }

  return (
    <Box className={classes.root}>
      <Box paddingTop={4} className={classes.landingContent}>
        <Box className={classes.landingContentImg}>

        </Box>
        <Box className={classes.landingContentText}>
          <h1 className={classes.landingHeader}>Introducing Bento</h1>
          <p className={classes.landingSubtitle}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                dicta sunt explicabo. </p>
                <TextField
                  className={classes.textField}
                  placeholder="Search Dishes"
                  margin="dense"
                  fullWidth
                  inputProps={{ 'aria-label': 'bare',
                      style: { fontSize: '20px',
                    padding: '10px',
                  border: 'none',
                }
                  }}
                />    
          <p className={classes.landingTrending} >Trending: Filipino, Pasta, Burgers</p>
        </Box>
            
      </Box>
      <Box className={classes.landing}>
          
          <ImageWithOverlay 
              image={ramen} 
              right
              header={'Lorem Ipsum'} 
              subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                dicta sunt explicabo.`}
              mainText={"Less Waste, More Food"}
          />
          
          <ImageWithOverlay 
              image={katsu} 
              header={'Lorem Ipsum'} 
              subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                dicta sunt explicabo.`}
              mainText={"Less Waste, More Food"}
          />
          
          
          <ImageWithOverlay 
              image={pansit} 
              right
              header={'Lorem Ipsum'} 
              subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                dicta sunt explicabo.`}
              mainText={"Less Waste, More Food"}
          />
          </Box>
      </Box>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
