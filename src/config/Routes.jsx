import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Watched from '../pages/Watched';
import List from '../pages/List';
import Favorite from '../pages/Favorite';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
             <Route
                path='/list'
                component={List}
            />
             <Route
                path='/favorite'
                component={Favorite}
            />
             <Route
                path='/watched'
                component={Watched}
            />
            
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
