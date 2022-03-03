<template>
  <div>
           <div class="section-heading space">
    <h1>Cart</h1>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="row row-cols-1 row projects g-4 pt pad">
         <div v-for="(movie, index) in cart" :key="index" class="col-md-6">
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
              <button v-on:click="removeItem(index)" class="btn btn-outline-danger w-100">Remove Item</button>
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
props:["cart"],
methods: {
    removeItem(index){
        this.$emit('removeItem', index)
    }
},
}
</script>

<style>

</style>