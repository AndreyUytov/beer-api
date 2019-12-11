import * as R from 'ramda'

import {FETCH_BEERS_SUCCES} from 'actionType'

const initialState = {}

export default (state = initialState, {type, payload, page}) => {
    switch (type) {
        case FETCH_BEERS_SUCCES:
            return R.merge(state, {
                [`${page}`]: R.pluck('id', payload)
            })
        default: 
            return state
    }
}