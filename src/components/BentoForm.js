import React from 'react';

class BentoForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: props.bento ? props.bento.name : '',
            ingredients: props.bento ? props.bento.ingredients : '',
            cuisine: props.bento ? props.bento.bento : '',
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

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.cost) {
            // Set error state equal to 'Please provide name and cost'
            this.setState(() => ({error: 'Please provide name and cost'}))
        } else {
            this.setState(() => ({ error: ''}))
            // this.props.onSubmit({
            //     name: this.state.name,
            //     cost: parseFloat(this.state.cost, 10) * 100,
            //     ingredients: this.state.ingredients,
            //     cuisine: this.state.cuisine

            // })
            console.log(this.state)
        }
    }

    render () {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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
                    <button>Add Bento</button>
                </form>
            </div>
        )
    }
}

export default BentoForm;