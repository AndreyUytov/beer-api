export const getBeersById = (state, id) => {
  return state.beers[id]
}

export const getBeers = state => {
  return state.beersPage.ids.map((elem) => {
    return getBeersById(state, elem)
  })
}

export function indexById (arr) {
  return Object.fromEntries(arr.reduce((res, cur) => {
      return res.set(cur.id, cur)
  }, new Map()))
}