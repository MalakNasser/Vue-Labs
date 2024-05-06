<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/logo.png" alt="" width="30"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center"
          >
            <li class="nav-item">
              <router-link
                class="nav-link active link-dark"
                aria-current="page"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active link-dark"
                aria-current="page"
                to="/books"
                >Books</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active link-dark"
                aria-current="page"
                to="/add"
                >Add BooK</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-link {
  font-size: 20px;
}
</style>
