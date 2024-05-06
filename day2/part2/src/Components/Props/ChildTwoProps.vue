<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="data in data" :key="data.id">
              <tr>
                <td>{{ data.id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.age }}</td>
                <td>{{ data.role }}</td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="$emit('send', data.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildTwoProps",
  emits: ["send"],
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
