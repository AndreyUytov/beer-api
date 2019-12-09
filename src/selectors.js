import * as R from 'ramda'

export const getBeersById = (state, id) => R.prop(id, state.beers)

export const getBeers = state => {
  const beers = R.map(id => getPhoneById(state, id), state.beersPage.ids)

  return beers
}