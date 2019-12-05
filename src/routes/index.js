import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from 'components/home-page'

export default (
    <Switch>
        <Route path='/' component={Home} exact/>
    </Switch>
)