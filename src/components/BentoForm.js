import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      background: 'none',
    },
    form: {
        padding: '3.2rem',
        height: '43.5rem',
        minWidth: '30rem',

    }
  });
  

class BentoForm extends React.Component {
    

    constructor(props) {
        super(props)

        this.state = {
            name: props.bento ? props.bento.name : '',
            ingredients: props.bento ? props.bento.ingredients : '',
            cuisine: props.bento ? props.bento.cuisine : '',
            cost: props.bento ? (props.bento.cost).toString() : '',
            currentQuestion: 'name'
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name })
    }

    onCuisineChange = (e) => {
        const cuisine = e.target.value;
        this.setState({ cuisine })
    }

    onCostChange = (e) => {
        const cost = e.target.value;

        if(!cost || cost.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ cost })
        }   else {
            console.log('no match')
        }
    }

    onIngredientsChange = (e) => {
        const ingredients = e.target.value;
        this.setState({ ingredients })
    }

    onImgChange = (e) => {
        const img = e.target.value;
        this.setState({ img })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.currentQuestion === 'name') {
            if(this.state.name.length >= 1) {
                this.setState({
                    currentQuestion: 'cuisine'
                })
            }
        }

        if(this.state.currentQuestion === 'cuisine') {
            if(this.state.cuisine.length >= 1) {
                this.setState({
                    currentQuestion: 'cost'
                })
            }
        }

        if(this.state.currentQuestion === 'cost') {
            if(this.state.cost.length >= 1) {
                this.setState({
                    currentQuestion: 'ingredients'
                })
            }
        }

        if(this.state.currentQuestion === 'ingredients') {
            if(this.state.ingredients.length >= 1) {
                this.setState({
                    currentQuestion: 'img'
                })
            }
        }

        if(this.state.currentQuestion === 'img') {
            if(this.state.img.length >= 1) {
                this.setState({
                    currentQuestion: 'none'
                })
            }
        }

        if(this.state.currentQuestion === 'none') {
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
                <Paper  className={this.props.classes.form} square={true}>

                
                    {
                        
                        this.state.currentQuestion === 'name' &&
                        <div>
                        <Typography gutterBottom variant="h5" component="h2" className={this.props.classes.header}>
                        Make a Bento, 
                        </Typography>
                        <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                        />
                        </div>
                    }
                    
                    {
                        this.state.currentQuestion === 'cuisine' &&
                        <input
                        type="text"
                        autoFocus
                        placeholder="Cuisine"
                        value = {this.state.cuisine}
                        onChange={this.onCuisineChange}
                        />
                    }
                    {
                        this.state.currentQuestion === 'cost' &&
                        <input
                        type="text"
                        placeholder="Cost"
                        autoFocus
                        value={this.state.cost}
                        onChange={this.onCostChange}
                        />
                    }
                    {
                        this.state.currentQuestion === 'ingredients' &&
                        <textarea
                        placeholder="List of Ingredients used (optional)"    
                        value={this.state.ingredients}
                        onChange={this.onIngredientsChange}
                        >
                        </textarea>
                    }
                    { 
                        this.state.currentQuestion === 'img' && 
                        <input
                        type="text"
                        placeholder="Image URL"
                        value={this.state.img}
                        onChange={this.onImgChange}
                        />
                    }
                    <button> Submit Bento </button>
                    </Paper>
                </form>
                
            </div>
        )
    }
}

export default withStyles(styles)(BentoForm);