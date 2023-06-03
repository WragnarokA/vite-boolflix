<script >
import SearchBar from './components/SearchBar.vue';

import { store } from './data/store';


export default {
  name: "app",
  components: {
    SearchBar,

  },
  data() {
    return {
      store
    }
  },
  methods: {

  },
  created() {

  }


}
</script>

<template>
  <SearchBar />
  <section id="mvies">
    <h2>movies</h2>
    <div id="movies">
      <div class="card" v-for="movie in store.movies">
        <h3>{{ movie.title }}</h3>
        <h4>{{ movie.original_title }}</h4>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './styles/mixins.scss' as *;

#movies {
  @include flex(row, space-between, center, wrap)
}

.card {
  background-color: #c607c6;
  margin: 1rem;
  padding: 1rem;
}
</style>

