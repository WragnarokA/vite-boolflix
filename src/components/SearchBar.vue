<script >
import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            store
        }
    },
    computed: {
        searchTextSanificato() {
            return encodeURIComponent(this.store.searchText); //serve a pulire simboli dannosi per il cosice inseriti dal utente (involontariamente)
        }
    },
    methods: {
        avviaRicerca() {
            this.getSeries();
            this.getMovies();

        },

        getMovies() {
            const moviesSearchUrl = `${this.store.apiUrl}movie?api_key=${this.store.apiKey}&query=${this.searchTextSanificato}`

            axios.get(moviesSearchUrl).then(r => {
                const movies = r.data.results;
                console.log("richiesta", movies);
                this.store.movies = movies
            });
        },


        getSeries() {
            const seriesSearchUrl = `${this.store.apiUrl}tv?api_key=${this.store.apiKey}&query=${this.searchTextSanificato}`

            axios.get(seriesSearchUrl).then(r => {
                const series = r.data.results;
                console.log("richiesta", series);
                this.store.series = series
            });

        }





    }
}

</script>

<template>
    <input type="text" v-model="store.searchText" placeholder="digita qualcosa">
    <button @click="avviaRicerca">cerca</button>
</template>

<style lang="scss" scoped></style>
