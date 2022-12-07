<template>
  <div class="MainPage">
    <div>
      <h4 class="testo-grigio">WE ARE A PROFESSIONAL</h4>
      <h1 class="big-2">Full-Service Solution</h1>
    </div>
    <div class="cards">
      <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="../assets/img/avada-movers-serviceonephoto-final-200x128.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">Two Man Teams</h3>
          <p class="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary main-btn">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/avada-movers-serviceonephoto-final-200x128.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary main-btn">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/avada-movers-serviceonephoto-final-200x128.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card
            title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary main-btn">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};

</script>

<style>
.MainPage {
  margin-top: 100px;
}

.cards {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

.card {
  background-color: #e9e9e9;
  padding: 20px;
}

.main-btn {
  background-color: #1975c0;
  color: white;
  border-radius: 20px;
  padding: 5px;
  width: 150px;
  margin: auto;
}
</style>
