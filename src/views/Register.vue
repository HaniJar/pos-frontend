<template>
  <div class="container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-6">
        <div class="card2 px-5 py-5">
          <form @submit.prevent="register">
            <h3 class="mt-3">Register Now <br /></h3>
            <div class="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                class="form-control"
                v-model="fullname"
                placeholder="Fullname"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-envelope"></i>
              <input
                type="text"
                class="form-control"
                v-model="email"
                placeholder="Email address"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                class="form-control"
                v-model="phone_number"
                placeholder="Phone number"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="password"
                required
              />
            </div>

            <button class="btn btn-danger mt-4 signup" type="submit">
              Sign up
            </button>

            <div class="text-center mt-5">
              
              <router-link :to="{ name: 'Login' }" class="text-decoration-none">
              </router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone_number: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log(this.password);
      fetch("https://movies-posbackend.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
          fullname: this.fullname,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
.container {
  padding-bottom: 11%;
  padding-top: 5%;
}

.height {
  height: 100vh;
}

.card2 {
  border: 3px solid #fff !important;
  padding-bottom: 500px;
  background-color: #152733;
  color: white;
  min-width: 540px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  height: 40% !important;
}

.form-input {
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
}

.form-input i {
  position: absolute;
  font-size: 18px;
  top: 15px;
  left: 10px;
}

.form-control {
  height: 50px;
  background-color: #152733;
  text-indent: 24px;
  font-size: 15px;
}

.form-control:focus {
  background-color: #152733;
  box-shadow: none;
  color: #fff;
  border-color: #4f63e7;
}

.form-check-label {
  margin-top: 2px;
  font-size: 14px;
}

.signup {
  height: 50px;
  font-size: 14px;
}

.social {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

.social:hover {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
