import {
    FETCH_BEERS_SUCCES,
} from 'actionType'

const initialState = []

export default function allBeers (state=initialState, {type, payload}) {
    switch (type) {
        case FETCH_BEERS_SUCCES:
            return [...state, ...payload]
        default:
            return state
    }
}