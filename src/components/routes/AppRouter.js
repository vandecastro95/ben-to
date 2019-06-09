import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Dashboard from '../Dashboard';
import AddBentoPage from '../AddBentoPage';
import EditBentoPage from '../EditBentoPage';
import Header from '../Header';
import NotFoundPage from '../NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={Dashboard} exact={true}/>
            <Route path='/create' component={AddBentoPage} />
            <Route path='/edit/:id' component={EditBentoPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;
