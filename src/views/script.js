

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(movie) {
  document.querySelector("#movie").innerHTML = "";
  products.forEach((movie, position) => {
    document.querySelector("#movie").innerHTML += `

    <div class="card" style="width: 18rem;">
    <h2 class="card-title"> ${movie.name}</h2>
    <img src="${movie.img}" class="card-img-top" alt="${movie.name}">
  <div class="card-body">
  <p class="card-text">R${movie.price}</p>
  <div class="d-flex justify-content-end card-footer">
<input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
<button type="button" class="btn btn-danger ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
</div>
  </div>
  <div class="d-flex mb-3">
  <button type="button" class="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
  Edit
</button>
<button type="button" class="btn btn-warning w-50 ms-3" onclick="deleteProduct(${position})" >
  Delete
</button>
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
                        Edit ${movie.name}
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
                          value="${movie.name}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="Fruit">Fruit</option>
                          <option value="Vegetables">Vegetables</option>
                          <option value="Meat">Meat</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${movie.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${movie.img}"
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
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
  });
}

readProducts(movie);
showCartBadge();

// CREATE
function createProduct() {
  let name = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!name || !price || !img) throw new Error("Please fill in all fields");
    movie.push({
      name,
      category,
      price,
      img,
    });
    localStorage.setItem("movie", JSON.stringify(movie));
    readProducts(movie);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let name = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!name || !price || !img) throw new Error("Please fill in all fields");
    movie[position] = {
      name,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(movie));
    readProducts(movie);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    movie.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(movie));
    readProducts(movie);
  }
}

// ADD TO CART
function addToCart(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  let added = false;
  cart.forEach((movie) => {
    if (movie.name == movie[position].name) {
      alert(
        `You have successfully added ${qty} ${movie[position].name} to the cart`
      );
      movie.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...movie[position], qty });
    alert(
      `You have successfully added ${qty} ${movie[position].name} to the cart`
    );
  }

  showCartBadge();

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Badge
function showCartBadge() {
  document.querySelector("#badge").innerHTML = cart ? cart.length : "";
}

// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(movie);
  }

  let foundMovie = movie.filter((movie) => {
    return movie.category == category;
  });

  readProducts(foundMovie);
  console.log(foundMovie);
}

// SORT BY NAME

function sortName() {
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
  readProducts(Movie);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedMovie = movie.sort((a, b) => a.price - b.price);

  console.log(sortedMovie);

  if (direction == "descending") sortedMovie.reverse();
  readProducts(sortedMovie);
}
