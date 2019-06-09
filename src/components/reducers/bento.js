//bentos Reducer
const bentoReducerDefaultState = [];

export default (state = bentoReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BENTO':
            return [
                ...state,
                action.bento
            ]
        case 'REMOVE_BENTO':
            return state.filter(({ id }) => id !== action.bento.id)
        case 'EDIT_BENTO':
            return state.map((bento) => {
                
                if (bento.id === action.id) {
                    return {
                        ...bento,
                        ...action.updates
                    }
                } else {
                    return bento;
                }
            })
        default: 
            return state;
    }
};
