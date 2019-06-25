//get visible bento

export default (bento, { text, sortBy }) => (
    
    bento.filter((bento) => {
        
        const nameMatch = bento.name.toLowerCase().includes(text.toLowerCase())
        const cuisineMatch = bento.cuisine.toLowerCase().includes(text.toLowerCase())
        const ingredientsMatch = bento.ingredients.toLowerCase().includes(text.toLowerCase())

        return nameMatch || cuisineMatch || ingredientsMatch;
    }).sort((a,b) => {
        if (sortBy === 'cost') {
            
            return a.cost < b.cost ? 1 : -1; 
        }
        else {
            return (a, b);
        }
    })
)