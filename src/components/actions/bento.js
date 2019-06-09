import uuid from 'uuid';

//ADD_EXPENSE

export const addBento = (
    { name = '', cuisine = '', cost = 0, ingredients = ''} = {}
    ) => ({
    type: 'ADD_BENTO',
    bento: {
        id: uuid(),
        name,
        cuisine, 
        cost,
        ingredients
    }
})

//REMOVE_EXPENSE

export const removeBento = (
    id = {}
) => (
    {
    type: 'REMOVE_BENTO',
    bento: {
        id
    }
})

//EDIT_EXPENSE

export const editBento = (id, updates) => {
    return (
    
    {
        type: 'EDIT_BENTO',
        id,
        updates
    }
);}