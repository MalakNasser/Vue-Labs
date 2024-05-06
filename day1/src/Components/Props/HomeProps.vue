<template>
  <div class="container home mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <child-one-props @send="HandleSendOne" />
        <div class="btn-group mt-3" role="group">
          <button
            type="button"
            class="btn btn-primary"
            :class="{ active: selectedRole === 'Admin' }"
            @click="toggleRole('Admin')"
          >
            Admins
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :class="{ active: selectedRole === 'User' }"
            @click="toggleRole('User')"
          >
            Users
          </button>
        </div>
        <div class="mt-3">
          <div v-if="selectedRole === 'Admin'">
            <child-two-props :data="admins" @send="HandleSendTwo" />
          </div>
          <div v-else-if="selectedRole === 'User'">
            <child-two-props :data="users" @send="HandleSendTwo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChildOneProps from "./ChildOneProps.vue";
import ChildTwoProps from "./ChildTwoProps.vue";

export default {
  name: "HomeProps",
  components: {
    ChildOneProps,
    ChildTwoProps,
  },
  data() {
    return {
      admins: [],
      users: [],
      selectedRole: "",
    };
  },
  methods: {
    getNextId() {
      let lastId = 0;
      if (this.admins.length > 0) {
        lastId = Math.max(...this.admins.map((member) => member.id));
      }
      if (this.users.length > 0) {
        lastId = Math.max(lastId, ...this.users.map((member) => member.id));
      }
      return lastId + 1;
    },
    HandleSendOne(newMember) {
      if (newMember.role === "Admin") {
        this.admins.push({ ...newMember });
      } else if (newMember.role === "User") {
        this.users.push({ ...newMember });
      }
      newMember.id = this.getNextId();
      newMember.name = "";
      newMember.age = null;
      newMember.role = "User";
    },
    HandleSendTwo(id) {
      this.admins = this.admins.filter((member) => member.id !== id);
      this.users = this.users.filter((member) => member.id !== id);
    },
    toggleRole(role) {
      this.selectedRole = this.selectedRole === role ? "" : role;
    },
  },
};
</script>

<style scoped>
.home {
  width: 70%;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

.btn-group {
  display: flex;
  justify-content: center;
}

.btn.active {
  background-color: rgb(9, 85, 165) f;
  color: #fff;
}
</style>
