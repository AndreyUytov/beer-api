import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Home from 'containers/home-page'
import BeerList from 'components/beer-list'
import Pagination from 'containers/pagination'
import Search from 'components/search'
import Proba from 'components/proba.js'

export default (
    <Switch>
        <Route exact path='/' >
            <Redirect to='/pages/1'></Redirect>
        </Route>
        <Route path = '/'>
            <Home>
                <Route path='/favorites' />
                <Route path='/cart' />
                <Route path='/pages'>
                    <Search />
                    <Switch>
                        <Route path='/pages/:page'>   
                            <Proba/>
                        </Route>
                    </Switch>
                    <Pagination />
                </Route>
            </Home>
        </Route>
    </Switch>
)