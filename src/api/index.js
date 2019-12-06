import request from 'superagent'

export const fetchBeers = async () => {
    const {body} = await request.get(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10'
    )
    console.log(body.map((el) => {
        return el.name
    }))
    return body
}