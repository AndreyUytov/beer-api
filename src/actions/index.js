import {
    FETCH_BEERS_START,
    FETCH_BEERS_SUCCES,
    FETCH_BEERS_FAIL
} from 'actionType'
import {fetchBeers as fetchBeersApi} from 'api'

export const fetchBeers = () => async (dispatch) => {
    dispatch({type: FETCH_BEERS_START})

    try {
        const beers = await fetchBeersApi()
        dispatch({
            type: FETCH_BEERS_SUCCES,
            payload: beers
        })
    } catch (err) {
        dispatch({
            type: FETCH_BEERS_FAIL,
            payload: err,
            error: true
        })
    }
}