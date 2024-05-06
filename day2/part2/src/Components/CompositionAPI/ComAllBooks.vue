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
                <router-link class="btn btn-info" :to="`/${b.id}`"
                  >See More</router-link
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
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "ComAllBooks",
  setup() {
    const store = useStore();
    const books = computed(() => store.state.Books);

    onMounted(async () => {
      try {
        await store.dispatch("fetchBooks");
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    });

    return {
      books,
    };
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
