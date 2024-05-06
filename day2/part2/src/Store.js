import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state() {
    return {
      Books: [],
    };
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.Books = books;
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get("http://localhost:2000/books");
        commit("SET_BOOKS", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
  },
  getters: {
    getBookById: (state) => (id) => {
      return state.Books.find((book) => book.id === id);
    },
  },
});

export default store;
