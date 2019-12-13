import * as R from 'ramda'

import {FETCH_BEERS_SUCCESS, LOAD_MORE_BEERS_SUCCESS} from 'actionType'

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCESS:
            return {...state, 
                ids: [...state.ids, ...payload.map( (elem) => {
                    return elem.id;
                } )]}
        case LOAD_MORE_BEERS_SUCCESS:
            return {...state, 
                ids: [...state.ids, ...payload.map( (elem) => {
                    return elem.id;
                } )]}
        default: 
            return state
    }
}