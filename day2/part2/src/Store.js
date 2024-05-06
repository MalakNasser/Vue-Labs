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
    ADD_BOOK(state, book) {
      state.Books.push(book);
    },
    UPDATE_BOOK(state, payload) {
      const { id, updatedBook } = payload;
      const index = state.Books.findIndex((book) => book.id === id);
      updatedBook["id"] = id;
      if (index !== -1) {
        state.Books.splice(index, 1, updatedBook);
      }
    },
    DELETE_BOOK(state, id) {
      state.Books = state.Books.filter((book) => book.id !== id);
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
    async addBook({ commit }, newBook) {
      try {
        const response = await axios.post(
          "http://localhost:2000/books",
          newBook
        );
        commit("ADD_BOOK", response.data);
      } catch (error) {
        console.error("Error adding book:", error);
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
