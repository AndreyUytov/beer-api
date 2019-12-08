import * as R from 'ramda'

import {
    FETCH_BEERS_SUCCES,
} from 'actionType'

const initialState = {}

export default (state=initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCES:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        default:
            return state
    }
}