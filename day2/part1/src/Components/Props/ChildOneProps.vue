<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Add New Member</h2>
        <form @submit.prevent="$emit('send', newMember)" class="mt-3">
          <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input
              type="text"
              id="name"
              v-model="newMember.name"
              class="form-control"
              placeholder="Enter Name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age:</label>
            <input
              type="number"
              id="age"
              v-model.number="newMember.age"
              class="form-control"
              placeholder="Enter Age"
              required
            />
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">Role:</label>
            <select
              id="role"
              v-model="newMember.role"
              class="form-select"
              required
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Add Member</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildOneProps",
  emits: ["send"],
  data() {
    return {
      newMember: {
        id: 1,
        name: "",
        age: null,
        role: "User",
      },
    };
  },
};
</script>

<style scoped></style>
