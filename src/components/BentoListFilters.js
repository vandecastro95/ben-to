import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './actions/filters';
import '../styles/components/header.css'

export class BentoListFilters extends React.Component {
   state = {
       
   };

   onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
    }

    render() {
    return (
        <div>
        
        <input type="text"
         
            placeholder="search"
            value={this.props.filters.onTextChange}
            onChange={this.onTextChange} />
    </div>
    )}}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

const mapStateToProps = (state) => ({ filters: state.filters })


export default connect(mapStateToProps, mapDispatchToProps)(BentoListFilters);