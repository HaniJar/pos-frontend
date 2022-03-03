<template>
  <div class="section-heading space">
    <h1>Products</h1>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="row row-cols-1 row projects g-4 pt pad">
        <div v-for="movie in movies" :key="movie" class="col-md-6">
          <div class="card p-2">
            <div class="p-info px-3 py-3">
              <div>
                <h5 class="mb-0">{{ movie.name }}</h5>
              </div>
              <div class="p-price d-flex flex-row">
                <span>R</span>
                <h1>{{ movie.price }}</h1>
              </div>
              <div class="heart"><i class="bx bx-heart"></i></div>
            </div>
            <div class="text-center p-image"><img :src="movie.img" /></div>
            <div class="p-about">
              <p>{{ movie.description }}</p>
            </div>
            <div class="buttons d-flex flex-row gap-3 px-3">
              <!-- <button class="">View</button> -->
              <router-link :to="{name: 'Cart'}">

                <button id="submit" type="submit" class="btn btn-primary">
                  Cart
                </button>
                </router-link>
                <button >ADD TO CART</button>

              <button v-on:click="addItemToCart(product)" class="btn btn-outline-danger w-100">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      cart: [],
    };
  },
  mounted() {
    fetch("https://movies-posbackend.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => {
        this.movies = data;
        console.log(data, this.movies);
      });
  },
methods: {
  addItemToCart(products) {
      this.cart.push(products);
      console.log(this.cart);
    }
    

  }
};
</script>

<style>
/* img {
  width:220px;
  height: 400px;
} */
.space {
  padding-top: 5%;
  color: white;
}
body {
  color: #2c3e50;
}

.wrapper {
  margin-top: 30px;
}

.card {
  width: 550px;
  border: none;
  height: 450px;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 10%;
}

.p-info {
  display: flex;
  justify-content: space-between;
}

.p-price {
  position: absolute;
  right: 10px;
  top: 20px;
}

.heart i {
  font-size: 50px;
  opacity: 0;
  color: red;
}

.heart i:hover {
  color: red;
}

.p-image img {
  width: 240px;
  transform: rotate(15deg);
  transition: all 0.5s;
}

.card:hover .heart i {
  animation: heart 300ms ease-in forwards;
  animation-delay: 500ms;
}

.p-about {
  position: absolute;
  width: 170px;
  font-size: 10px;
  top: 140px;
  left: -125px;
  opacity: 0;
}

.card:hover .p-about {
  animation: content 300ms ease-in forwards;
}

@keyframes content {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    left: 25px;
  }
}

@keyframes heart {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.card:hover .p-image img {
  animation: onimage 300ms ease-in forwards;
}

.card:hover .p-price {
  animation: onprice 500ms ease-in forwards;
}

@keyframes onprice {
  0% {
    right: 10px;
    top: 20px;
  }

  50% {
    right: 60px;
    top: 30px;
  }

  100% {
    right: 267px;
    top: 70px;
  }
}

@keyframes onimage {
  0% {
    width: 250px;
  }

  50% {
    width: 200px;
    transform: translateY(-30px);
    transform: translateX(100px);
  }

  100% {
    width: 180px;
    top: 100px;
    transform: translateY(100px);
    transform: translateX(110px);
  }
}

.buttons {
  position: absolute;
  bottom: -150px;
}

.card:hover .buttons {
  animation: buttons 500ms ease-in forwards;
}

@keyframes buttons {
  0% {
    bottom: -100px;
  }

  100% {
    bottom: 20px;
  }
}

.btn {
  height: 50px;
  font-size: 16px;
  width: 140px !important;
  font-weight: 600;
}
</style>
