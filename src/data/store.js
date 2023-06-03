import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  movies: [],
  series: [],
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiKey: "f18988a3f51b07c295a9f95346659b98",

});

