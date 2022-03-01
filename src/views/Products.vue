<template>
<section>
    <div class="row row-cols-1 row projects g-4 pt pad ">
      <div class="section-heading ">
        <h1>My Works.</h1>
        <span>Portfolio</span>
      </div>
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
  </div>
</div>
      </div>
    </div>
    
    <div class="space">

</div>
  </section>
 
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