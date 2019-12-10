import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Home from 'containers/home-page'
import BeerList from 'components/beer-list'
import Pagination from 'components/pagination'
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
                    <Route path='/pages/:page'>
                        <Switch>
                            <div>
                                PAGE!!!
                            </div>
                        </Switch>
                    </Route>
                    <Pagination />
                </Route>
            </Home>
        </Route>
    </Switch>
)