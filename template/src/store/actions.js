import * as types from './mutation-types'
import Api from '../api/douban'

export const increase = ({commit}) => {
  commit(types.INCREASE)
}

export const getDoubanMovie = ({commit}) => {
  return new Promise((resolve) => {
    Api.getDoubanMovie().then((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
      // 跨域 假设成功
      commit(types.GET_DOUBAN_MOVIE, err.list)
      resolve()
    })
  })
}
