
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'cost'
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
        
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_COST':
            return {
                ...state,
                sortBy: 'cost'
            }
        default:
            return state;
    }
}