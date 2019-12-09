import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from 'containers/home-page'
import BeerList from 'components/beer-list'

export default (
    <Switch>
        <Route path='/' exact>
            <Home>
                <Switch>
                    <Route path='/favorites'>FAV</Route>
                    <Route path ='cart'><div>CART</div></Route>
                    <Route path='/:page'>
                        <BeerList />
                    </Route>
                </Switch>
            </Home>
        </Route>
        <Route path='/favorites' />
        <Route path='/cart' />
    </Switch>
)