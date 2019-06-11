

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  card: {
    minWidth: 345,
    maxHeight: 250,
    textDecoration: 'none'
  },
  media: {
    height: 80,
    transition: 'all .2s ease-in-out',
    '&:hover': {
        height: 200,
        transition: 'all .2s ease-in-out'
    }
  },
  header: {
      color: 'black',
      textDecoration: 'none',
      justifyContent: 'space-between',
      marginBottom: '1.6rem'
  },
  edit: {
      color: 'black',
      textDecoration: 'none',
      marginBottom: '1.6rem',
      padding: '0',
  },
  button: {
      height: '2.4rem',
    '&:hover': {
        backgroundColor: 'none',
        color: 'blue'
    }
    },
  content: {
      marginBottom: '-1rem'
  }
});

function BentoListItem({ name, cuisine, cost, id, ingredients, img }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
        
        <CardContent className={classes.content}>

          
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          { name } ${cost}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
          {cuisine}, {ingredients}
          </Typography>
        </CardContent>
      
      <CardActions>

        <Button variant="outlined" className={classes.button}>
        <Link to={"/edit/" + id + ""}  className={classes.edit}> Edit</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect()(BentoListItem);