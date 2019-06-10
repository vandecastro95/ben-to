import React from 'react';
import { connect } from 'react-redux';
import BentoListItem from './BentoListItem'
import selectBento from './selectors/bento';

export const BentoList = (props) => (
    <div>
    {
        props.bento.length === 0 ? (
            <p> No bento </p>
        ) : (
            
            props.bento &&
            props.bento.map((expense) => {
                return (
                    <BentoListItem {...expense} key={expense.id}/>
                )
            })
        )
    }
        
    </div>
);

const mapStatetoProps = (state) => {
    return {
        bento: selectBento(state.bento, state.filters)
    }
}

export default connect(mapStatetoProps)(BentoList);