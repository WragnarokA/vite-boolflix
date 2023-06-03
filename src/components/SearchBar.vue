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
            console.log("ricerca", this.store.searchText);

            const moviesSearchUrl = `${this.store.apiUrl}movie?api_key=${this.store.apiKey}&query=${this.store.searchText}`


            axios.get(moviesSearchUrl).then(r => {
                const movies = r.data.results;
                console.log("richiesta", movies);

                this.store.movies = movies


            })

        }
    }
}

</script>

<template>
    <input type="text" v-model="store.searchText" placeholder="digita qualcosa">
    <button @click="avviaRicerca">cerca</button>
</template>

<style lang="scss" scoped></style>
