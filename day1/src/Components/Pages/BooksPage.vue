<template>
  <div class="container home mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h1>Books List</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="b in books" :key="b.id">
              <td>{{ b.id }}</td>
              <td>{{ b.title }}</td>
              <td>{{ b.author }}</td>
              <td>{{ b.price }}</td>
              <td>
                <router-link class="btn btn-info" :to="`/books/${b.id}`"
                  >See More</router-link
                >
                <button class="btn btn-danger" @click="HandleDelete(b.id)">
                  Delete
                </button>
                <router-link class="btn btn-dark" :to="`/add/${b.id}`"
                  >Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import GetAllBooks from "../../../public/Mixins/crud.js";
import DeleteBookById from "../../../public/Mixins/crud.js";

export default {
  name: "BooksPage",
  mixins: [GetAllBooks, DeleteBookById],
  data() {
    return {
      books: [],
    };
  },
  methods: {
    HandleDelete(id) {
      this.DeleteBookById(id);
    },
  },
  created() {
    this.GetAllBooks();
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
}

.btn {
  margin-right: 5px;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-dark {
  background-color: #343a40;
  color: #fff;
}

.btn-dark:hover {
  opacity: 0.8;
}
</style>
