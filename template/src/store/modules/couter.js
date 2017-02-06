import * as types from '../mutation-types'

const state = {
  sum: 0,
  movieList: []
}

const mutations = {
  [types.INCREASE] (state) {
    state.sum++
  },
  [types.GET_DOUBAN_MOVIE] (state, list) {
    state.movieList = list
  }
}

export default {
  state,
  mutations
}
