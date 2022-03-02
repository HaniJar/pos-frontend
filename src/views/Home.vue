<template>
  <div class="background d-flex space text-center text-white font-content ">
<div class="cover-container d-flex w-100 pt-5  mx-auto flex-column text-center">
    


    <h1 style="font-size: 100px;
  font-weight: 600;  text-align: center;">Newest movies 2022 </h1>
    <p class="lead">
                      <router-link :to="{name: 'Login'}">

 <button id="submit" type="submit" class="btn btn-success">
                  Watch Now
                </button>
                </router-link>   
                 </p>
  </div>
</div>

 


 
</template>

<script>
export default {};
</script>

<style>
body{
  overflow-x: hidden;
}
button{
    color: #42b983;
}
.space{
  padding-top: 15%;
}
.pt-5{
  padding: 20%;
}
.background {
    background:linear-gradient(0deg, rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.6)), url(https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/674bf691-e2b5-4490-aef5-6352533aab45/ZA-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg);
height: 888px;
width: 100%;
  
background-repeat: no-repeat;
background-size: cover;
    
    
}

.form-content h1 {
  color: #fff;
  text-align: center;
  font-size: 300px !important;
  font-weight: 900;
  margin-bottom: 5px;
}

</style>



