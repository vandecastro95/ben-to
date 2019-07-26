import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard'
import LandingPage from '../Pages/LandingPage';
import AddBentoPage from '../Pages/AddBentoPage';
import EditBentoPage from '../Pages/EditBentoPage';
import NotFoundPage from '../Pages/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path='/' component={LandingPage} exact={true}/>
            <Route path='/home' component={Dashboard}/>
            <Route path='/create' component={AddBentoPage} />
            <Route path='/edit/:id' component={EditBentoPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;
