import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Home from 'containers/home-page'
import BeerList from 'components/beer-list'
import Search from 'components/search'

export default (
    <Switch>
        <Route exact path='/' >
            <Redirect to='/pages'></Redirect>
        </Route>
        <Route path = '/'>
            <Home>
                <Route path='/favorites' />
                <Route path='/cart' />
                <Route path='/pages'>
                    <Search />
                    <BeerList />
                </Route>
            </Home>
        </Route>
    </Switch>
)