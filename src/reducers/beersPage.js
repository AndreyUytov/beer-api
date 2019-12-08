import * as R from 'ramda'

import {FETCH_BEERS_SUCCES} from 'actionType'

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCES:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })

        default: 
            return state
    }
}