<template>
    <h1 id="head1">moives</h1>
   <div class="skills-header">
       
     </div>
  <div class="movies" v-if="movies.length">
    <div v-for="Movie of movies" :key="Movie.id" class="Movie">
      <div class="card2">
        <img :src="movies.img" alt="Avatar" style="width: 100%" />
        <div class="container2">
          <h4>
            <b>{{ movies.name }}</b>
           dfghjk
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Projects...</p>
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
    fetch("Loading Project")
      .then((res) => res.json())
      .then((data) => (console.log(data)))
      .catch((err) => console.log(err.message));
  },
}
</script>

<style>

</style>