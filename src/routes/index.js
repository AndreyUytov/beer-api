import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from 'containers/home-page'

export default (
    <Switch>
        <Route path='/' component={Home} exact/>
    </Switch>
)