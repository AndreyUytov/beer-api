import {
    FETCH_BEERS_SUCCES,
} from 'actionType'

const initialState = {
    allBeers: []
}

export default function allBeers (state=initialState, {type, payload}) {
    switch (type) {
        case FETCH_BEERS_SUCCES:
            return {...state, allBeers: state.allBeers.concat(payload) }
        default:
            return state
    }
}