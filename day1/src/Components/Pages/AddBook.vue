<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1>Add Book</h1>
        <form
          action=""
          @submit.prevent="id ? HandlePutReq() : HandlePostReq()"
          class="form-container mt-3"
        >
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              type="text"
              id="title"
              v-model.lazy.trim="title"
              placeholder="Enter title"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="author">Author:</label>
            <input
              type="text"
              id="author"
              v-model.lazy.trim="author"
              placeholder="Enter author"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              v-model.lazy.number="price"
              placeholder="Enter price"
              class="form-input"
            />
          </div>
          <button type="submit" class="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AddBook from "../../../public/Mixins/crud.js";
import UpdateBookById from "../../../public/Mixins/crud.js";
import GetBookById from "../../../public/Mixins/crud.js";

export default {
  name: "AddProduct",
  mixins: [AddBook, UpdateBookById, GetBookById],
  data() {
    return {
      title: "",
      author: "",
      price: "",
      id: "",
      book: {},
    };
  },
  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.book = await this.GetBookById(this.id);
      this.title = this.book.title;
      this.author = this.book.author;
      this.price = this.book.price;
    }
  },
  methods: {
    HandlePostReq() {
      this.AddBook(this.title, this.author, this.price);
    },
    HandlePutReq() {
      this.UpdateBookById(this.id, this.title, this.author, this.price);
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
