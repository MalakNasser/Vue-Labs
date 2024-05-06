import axios from "axios";

export default {
  methods: {
    AddBook(title, author, price) {
      axios
        .post("http://localhost:2000/books", { title, author, price })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push("/books");
    },
    GetAllBooks() {
      axios
        .get("http://localhost:2000/books")
        .then((res) => {
          this.books = res.data;
        })
        .catch((err) => console.log(err));
    },
    GetBookById(id) {
      return axios
        .get(`http://localhost:2000/books/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    DeleteBookById(id) {
      axios
        .delete(`http://localhost:2000/books/${id}`)
        .then(() => {
          this.GetAllBooks();
        })
        .catch((err) => console.log(err));
    },
    UpdateBookById(id, title, author, price) {
      axios
        .put(`http://localhost:2000/books/${id}`, { title, author, price })
        .then((res) => {
          console.log(res);
          this.$router.push("/books");
        })
        .catch((err) => console.log(err));
    },
  },
};
