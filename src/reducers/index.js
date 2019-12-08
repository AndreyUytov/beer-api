import { combineReducers } from 'redux'

import beers from 'reducers/beers.js'
import beersPage from 'reducers/beersPage'

export default (combineReducers ({
    beers,
    beersPage
}))