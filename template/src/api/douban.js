import Axios from 'axios'
const paths = {
  douban_movie: 'https://api.douban.com/v2/movie/coming_soon'
}
export default {
  getDoubanMovie () {
    return new Promise((resolve, reject) => {
      Axios.get(paths.douban_movie).then((data) => {
        resolve(data)
      }, () => {
        reject({list: [{
          name: '金刚狼3'
        }, {
          name: '生化危机6'
        }]})
      })
    })
  }
}
