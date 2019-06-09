import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './components/routes/AppRouter';
import configureStore from './components/store/configureStore';
import { addBento } from './components/actions/bento';
import getVisibleBento from './components/selectors/bento';
import 'normalize.css/normalize.css';


const store = configureStore();
store.dispatch(addBento({ name: 'Adobo and Rice', cost: '12.99', cuisine: 'Filipino', ingredients: 'Soy Sauce, Laurel, Vinegar, Peppercorns' }))
store.dispatch(addBento({ name: 'Lumpia and Cucumber Salad with Rice', cost: '8.99', cuisine: 'Filipino', ingredients: 'Bean Sprouts, Cucumber, Rice' }))
store.dispatch(addBento({ name: 'Tapa with Rice', cost: '12.99', cuisine: 'Filipino', ingredients: 'Beef, Soy Sauce, Vinegar, Suger' }))

const state = store.getState();
const visibleBento = getVisibleBento(state.bento, state.filters);
console.log(visibleBento)

function App() {
  return (
    <div className="App">
    <Provider store={store}> 
    <AppRouter />
    </Provider>
    </div>
  );
}

export default App;
