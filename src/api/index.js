import request from 'superagent'

export const fetchBeers = async () => {
    const {body} = await request.get(
        `https://api.punkapi.com/v2/beers?page=1&per_page=12`
    )
    return body
}

export const fetchLoadMoreBeers = async (page) => {
    const {body} = await request.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
    )
    return body
}