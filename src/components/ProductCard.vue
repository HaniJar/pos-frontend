<template>
  <div>
        <div class="section-heading space">
    <h1>Movies</h1>
     <div class="mb-3">
    
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
               <div class="d-flex mb-3">
  <button type="button" class="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
  Edit
</button>
<button type="button" class="btn btn-warning w-50 ms-3" onclick="deleteProduct(${position})" >
  Delete
</button>
  </div>
              <button v-on:click="addToCart(movie)" class="btn btn-outline-danger w-100">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     </div>
        </div>
         <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit {{movie.name}}
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
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="text"
                          name:{{position}}
                          id:{{position}}
                          value=movie.img
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
                        v-on:click="updateMovie (position)"
                      >
                        Save changes
                      </button>
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
      },
      // CREATE
 createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
},

// UPDATE
 updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
},

// DELETE
 deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}    
      },
}

</script>

<style>

</style>