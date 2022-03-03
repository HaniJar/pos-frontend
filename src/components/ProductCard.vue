<template>
  <div>
        <div class="section-heading space">
    <h1>Movies</h1>
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
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="row row-cols-1 row projects g-4 pt pad">
         <div v-for="(movie, index) in movies" :key="index" class="col-md-6">
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
              <button v-on:click="addToCart(movie)" class="btn btn-outline-danger w-100">Add To Cart</button>
            </div>
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
        movies: []
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
      addToCart(movie){
          this.$emit('addToCart', movie)
      }    
      },
}
</script>

<style>

</style>