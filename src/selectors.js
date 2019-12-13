import * as R from 'ramda'

export const getBeersById = (state, id) => {
  for (let elem of Object.entries(state.beers).keys()) {
    // return elem Найти по id объект
  }
}

export const getBeers = state => {
  const beers = R.map(id => getBeersById(state, id), state.beersPage.ids)

  return beers
}

export function indexById (arr) {
  return Object.fromEntries(arr.reduce((res, cur) => {
      return res.set(cur.id, cur)
  }, new Map()))
}