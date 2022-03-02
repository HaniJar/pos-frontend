<template>
 <!-- <div class="row row-cols-1 row projects g-4 pt pad ">
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
      
        <div class="card" style="width: 18rem;">
  <img :src="movie.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{movie.name}}</h5>
    <p class="card-text">{{movie.description}}</p>
    <p>{{movie.price}}</p>
    <a href="cart.js" class="btn btn-primary">Go somewhere</a>
    <a href="cart.js" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    </div>
    
    <div class="space">

</div>
   -->
<div class="products">

    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">GameStop</a>
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 mr-auto">
            <li class="nav-item">
              <a
                class="btn btn-primary me-3 active"
                aria-current="page"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="btn btn-secondary me-3 position-relative"
                href="cart.js"
                >Cart
                <span
                  id="badge"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                ></span
              ></a>
            </li>
            <li class="nav-item">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
              >
                Add a product
              </button>

              <!-- Modal -->
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
                      <h5 class="modal-title" id="exampleModalLabel">
                        Add product
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="addTitle" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addTitle"
                          id="addTitle"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="addCategory"
                          id="addCategory"
                        >
                        <option value="FPS">FPS</option>
                        <option value="MMORPG">MMORPG</option>
                        <option value="RPG">RPG</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="addPrice" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addPrice"
                          id="addPrice"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="addImg" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addImg"
                          id="addImg"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="createProduct()"
                      >
                        Create Product
                      </button>
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