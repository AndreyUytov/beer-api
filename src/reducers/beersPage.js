import * as R from 'ramda'

import {FETCH_BEERS_SUCCESS, LOAD_MORE_BEERS_SUCCESS} from 'actionType'

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case LOAD_MORE_BEERS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        default: 
            return state
    }
}