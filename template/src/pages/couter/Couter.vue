<template>
  <div class="couter-container">
    <p>
      \{{sum}}
    </p>
    <p>
      <button @click="onHandleIncrease">+1</button>
    </p>
    <router-link :to="{name: 'home'}">return Home</router-link>
    <p>
      <button @click="onHandleGetMovies">get douban coming soon movies</button>
    </p>
    <ul v-show="moveList.length > 0">
      <li v-for="(movie, idx) in moveList" :key="idx">\{{movie.name}}</li>
    </ul>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  created () {
  },
  methods: {
    onHandleIncrease () {
      this.increase()
    },
    onHandleGetMovies () {
      this.getDoubanMovie().then(() => {
        console.log('finish get movies')
      })
    },
    ...mapActions([
      'increase',
      'getDoubanMovie'
    ])
  },
  computed: {
    ...mapGetters({
      sum: 'getCouterSum',
      moveList: 'getDoubanMovieList'
    })
  }
}
</script>
