import * as R from 'ramda'

import {
    FETCH_BEERS_SUCCESS,
    LOAD_MORE_BEERS_SUCCESS

} from 'actionType'

const initialState = {}

export default (state=initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BEERS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case LOAD_MORE_BEERS_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        default:
            return state
    }
}