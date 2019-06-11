import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '40rem',
      height: '60rem',
      border: 'none',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: '0',
      elevation: '1'
    },
    form: {
        margin: '1.6rem',
        padding: '3.2rem'
    }
  });
  

class BentoForm extends React.Component {
    

    constructor(props) {
        super(props)

        this.state = {
            name: props.bento ? props.bento.name : '',
            ingredients: props.bento ? props.bento.ingredients : '',
            cuisine: props.bento ? props.bento.cuisine : '',
            cost: props.bento ? (props.bento.cost).toString() : ''
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onCuisineChange = (e) => {
        const cuisine = e.target.value;
        this.setState(() => ({ cuisine }))
    }

    onCostChange = (e) => {
        const cost = e.target.value;

        if(!cost || cost.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({ cost }))
        }   else {
            console.log('no match')
        }
    }

    onIngredientsChange = (e) => {
        const ingredients = e.target.value;
        this.setState(() => ({ ingredients }))
    }

    onImgChange = (e) => {
        const img = e.target.value;
        this.setState(() => ({ img }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.cost) {
            // Set error state equal to 'Please provide name and cost'
            this.setState(() => ({error: 'Please provide name and cost'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                name: this.state.name,
                cost: parseFloat(this.state.cost, 10) * 100,
                ingredients: this.state.ingredients,
                cuisine: this.state.cuisine,
                img: this.state.img

            })
        }
    }

    render () {
        
        return (
            <div className={this.props.classes.root}>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <Paper  className={this.props.classes.form}>

                <Typography gutterBottom variant="h5" component="h2" className={this.props.classes.header}>
                 What Bento are we cooking today?
                </Typography>
                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Cuisine"
                        value = {this.state.cuisine}
                        onChange={this.onCuisineChange}
                    />
                    <input
                        type="text"
                        placeholder="Cost"
                        autoFocus
                        value={this.state.cost}
                        onChange={this.onCostChange}
                    />
                    <textarea
                        placeholder="List of Ingredients used (optional)"    
                        value={this.state.ingredients}
                        onChange={this.onIngredientsChange}
                        >
                    </textarea>
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={this.state.img}
                        onChange={this.onImgChange}
                    />
                    <button> Submit Bento </button>
                    </Paper>
                </form>
                
            </div>
        )
    }
}

export default withStyles(styles)(BentoForm);