<template>
 <div class="row row-cols-1 row projects g-4 pt pad ">
      <div class="section-heading ">
        <h1>My Works.</h1>
        <span>Portfolio</span>
      </div>
      <li class="nav-item">
              <a
                class="btn btn-secondary me-3 position-relative"
                href="cart.js"
                >Cart
               
              </a>
            </li>
         
 <div
                class="modal fade"
                id="addProductModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                    </div>
                  </div>
                </div>
 </div>
 
                   
                    
    <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="All">All</option>
          <option value="FPS">FPS</option>
          <option value="MMORPG">MMORPG</option>
          <option value="RPG">RPG</option>
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
    <div id="products" class="container d-flex mb-3"></div>
   



   
      <div  v-for="movie in movies"
          :key="movie" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <!-- <div class="sample text-center">
        <h4>{{ movie.name }}</h4>
          <img :src="movie.img" class="img-responsive img-thumbnail" />
          <p>{{movie.price}}</p>
         <p>{{movies.description}}</p>
        </div> -->
        <div class="card" style="width: 18rem;">
  <img :src="movie.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{movie.name}}</h5>
    <p class="card-text">{{movie.description}}</p>
    <p>{{movie.price}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    </div>
    
    <div class="space">

</div>
  

      
    
   
  
</template>

<script>
export default {
  data() {
    return {
      movies: [],
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
}
</script>

<style>
img{
    width: 10%;
  height: 400px;
}

</style>