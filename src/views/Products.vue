<template>
  <div>
                         <div class="container d-flex justify-content-end">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="All">All</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
          <option value="K-Drama">K-Drama</option>
           <option value="Anime">Anime</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  </div>
   
    <header>
      {{cart.length}} in cart
      <button v-on:click="navigateTo('cart')">view cart</button>
      <button v-on:click="navigateTo('movies')">view movies</button>
    </header>


    <div v-if="page === 'cart'">
   <Cart v-on:removeItem="removeItem" :cart="cart" />
    </div>

    <div v-if="page === 'movies'">
    <ProductCard v-on:addToCart="addToCart" />
    </div>


 
</template>

<script>

import ProductCard from '../components/ProductCard.vue';
import Cart from '../components/Cart.vue';
export default {
  data() {
    return {
      page: 'movies',
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
   components: {ProductCard, Cart},
methods:{
   removeItem(movie){
    this.cart.splice(this.cart.indexOf(movie),1);
  },
  addToCart(movie){
  this.cart.push(movie);
  },
  navigateTo(page){
    this.page = page;
  },
// SORT BY CATEGORY
 sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readMovies(movie);
  }

  let foundMovie = movie.filter((movie) => {
    return movie.category == category;
  });

  readProducts(foundMovie);
  console.log(foundMovie);
},

// SORT BY NAME

 sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedMovie = movie.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedMovie.reverse();
  console.log(sortedMovie);
  readProducts(movie);
},

// SORT BY PRICE

 sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedMovie = Movie.sort((a, b) => a.price - b.price);

  console.log(sortedMovie);

  if (direction == "descending") sortedMovie.reverse();
  readProducts(sortedMovie);
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
