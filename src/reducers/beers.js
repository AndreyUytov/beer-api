import {
    GET_BEERS_START,
    GET_BEERS_SUCCES,
    GET_BEERS_FAIL
} from 'actionType'

const initialState = {
    beers: 'beers'
}

export default function beers (state=initialState, {type, payload}) {
    switch (type) {
        case GET_BEERS_START:
            
    
        default:
            return state
    }
}