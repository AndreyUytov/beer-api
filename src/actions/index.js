import {
    FETCH_BEERS_START,
    FETCH_BEERS_SUCCES,
    FETCH_BEERS_FAIL
} from 'actionType'
import {fetchBeers as fetchBeersApi} from 'api'

export const fetchBeers = (page) => async (dispatch) => {
    dispatch({type: FETCH_BEERS_START})

    try {
        const beers = await fetchBeersApi(page)
        dispatch({
            type: FETCH_BEERS_SUCCES,
            payload: beers,
            page: page
        })
    } catch (err) {
        dispatch({
            type: FETCH_BEERS_FAIL,
            payload: err,
            error: true
        })
    }
}