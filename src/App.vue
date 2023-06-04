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
      store,
      availableFlag: ["it", "en", "es", "pt", "fr", "de", "nl"],
      stelle: [],
    }
  },
  computed: {
    votoArrontondato() {
      return this.movie.vote_average;
    }
  },
  methods: {
    getFlag(percorsoBandiera) {
      return new URL(percorsoBandiera, import.meta.url).href;
    },
    getTitle(item) {
      if (item.title) {
        return item.title;
      } else {
        return item.name;
      }
    },
    getOriginalTitle(item) {
      if (item.original_title) {
        return item.original_title;
      } else {
        return item.original_name;
      }
    }

  },
  created() {

  }


}
</script>

<template>
  <SearchBar />
  <section id="muviesWrapper">
    <h2>movies</h2>
    <div class="items">
      <div class="card" v-for="movie in store.movies">
        <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`">
        <img v-else src="./assets/altreImg/placeHolder.png">
        <h3>{{ getTitle(movie) }}</h3>
        <h4>{{ getOriginalTitle(movie) }}</h4>
        <img v-if="availableFlag.includes(movie.original_language)"
          :src="getFlag(`./assets/flags/${movie.original_language}.svg`)" />
        <p v-else>{{ movie.original_language }}</p>
        <p>{{ Math.round(movie.vote_average / 2) }}</p>
        <span v-for="n in Math.round(movie.vote_average / 2)">*</span>
      </div>
    </div>
  </section>


  <section id="seriesWrapper">
    <h2>series</h2>
    <div class="items">
      <div class="card" v-for="serie in store.series">
        <img v-if="serie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`">
        <img v-else src="./assets/altreImg/placeHolder.png">
        <h3>{{ getTitle(serie) }}</h3>
        <h4>{{ getOriginalTitle(serie) }}</h4>
        <img v-if="availableFlag.includes(serie.original_language)"
          :src="getFlag(`./assets/flags/${serie.original_language}.svg`)" />
        <p v-else>{{ serie.original_language }}</p>
        <p>{{ Math.round(serie.vote_average / 2) }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './styles/mixins.scss' as *;

.items {
  @include flex(row, space-between, center, wrap)
}

.card {
  background-color: #c607c6;
  margin: 1rem;
  padding: 1rem;

  img {
    width: 60px;
  }
}
</style>

