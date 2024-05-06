<template>
  <div class="container home mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <h1>Book Details</h1>

          <div class="card-body mt-3">
            <h3 class="card-title">{{ book.title }}</h3>
            <h5 class="card-subtitle mb-2 text-muted">{{ book.author }}</h5>
            <p class="card-text">Price: {{ book.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      id: "",
      book: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.book = this.$store.getters.getBookById(this.id);
  },
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 20px;
}

.card-title {
  font-size: 24px;
  margin-bottom: 5px;
}

.card-subtitle {
  font-size: 18px;
  color: #555;
}

.card-text {
  font-size: 16px;
  color: #333;
}
</style>
