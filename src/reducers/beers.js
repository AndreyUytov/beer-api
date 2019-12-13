import * as R from 'ramda'

import {
    FETCH_BEERS_SUCCESS,
    LOAD_MORE_BEERS_SUCCESS

} from 'actionType'
import {indexById} from 'selectors.js'

const initialState = {}

export default (state=initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCESS:
            return {...state, ...indexById(payload)}
        case LOAD_MORE_BEERS_SUCCESS:
            return {...state, ...indexById(payload)}
        default:
            return state
    }
}