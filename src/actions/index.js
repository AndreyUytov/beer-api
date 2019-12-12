import {
    FETCH_BEERS_START,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_FAIL,
    LOAD_MORE_BEERS_FAIL,
    LOAD_MORE_BEERS_START,
    LOAD_MORE_BEERS_SUCCESS
} from 'actionType'
import {
    fetchBeers as fetchBeersApi,
    fetchLoadMoreBeers as fetchLoadMoreBeersApi
} from 'api'

export const fetchBeers = () => async (dispatch) => {
    dispatch({type: FETCH_BEERS_START})

    try {
        const beers = await fetchBeersApi()
        dispatch({
            type: FETCH_BEERS_SUCCESS,
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

export const fetchLoadMoreBeers = (page) => async (dispatch) => {
    dispatch({type: LOAD_MORE_BEERS_START})

    try {
        const beers = await fetchLoadMoreBeersApi(page)
        dispatch({
            type: LOAD_MORE_BEERS_SUCCESS,
            payload: beers
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_BEERS_FAIL,
            payload: err,
            error: true
        })
    }
}