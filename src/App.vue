<template id="app">
  <section>
    <div id="nav">
      <nav class="container-fluid fixed-top navbar navbar-expand-lg p-3 navbar-light bg-light">
        <a class="navbar-brand" href="#"
          ><font-awesome-icon icon="fa-duotone fa-film"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-brand  d-flex">
            
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/Login" class="nav-item nav-link"
              >Login</router-link
            >
            <router-link to="/Register" class="nav-link">Register</router-link>
            <router-link to="/Products" class="nav-link">Products</router-link>
                        <router-link to="/Cart" class="nav-link">Cart</router-link>

            
          </div>
        </div>
      </nav>
    </div>
  </section>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
