import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BentoListItem = ({ name, cuisine, cost, id, ingredients }) => (
    <div>
    <hr></hr>
    <Link to={"/edit/" + id + ""}>
        <h3>{ name }</h3>
        
    </Link>
    <h5> { cuisine } </h5>
    <p> {cost} - {ingredients} </p>
        
    </div>
)

export default connect()(BentoListItem);