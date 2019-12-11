import request from 'superagent'

export const fetchBeers = async (page) => {
    const {body} = await request.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    )
    return body
}