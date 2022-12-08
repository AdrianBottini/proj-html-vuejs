<template>
  <div class="MainPage">
    <div>
      <h4 class="testo-grigio">WE ARE A PROFESSIONAL</h4>
      <h1 class="big-2">Full-Service Solution</h1>
    </div>
    <div class="cards">
      <div class="card" style="width: 20rem;">
        <img class="card-img-top"
        src="../assets/img/avada-movers-serviceonephoto-final-400x255.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">Two Man Teams</h3>
          <p class="card-text">With our super simple service we can take you from getting a quote,
            right through to being in your new home with all of your belongings
            securely packed and safely.
          </p>
          <a href="#" class="btn btn-primary main-btn">READ MORE</a>
        </div>
      </div>
      <div class="card" style="width: 20rem;">
        <img class="card-img-top"
        src="../assets/img/avada-movers-servicetwophoto-final-400x255.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">We Do All The Lifting</h3>
          <p class="card-text">With our super simple service we can take you from getting a quote,
            right through to being in your new home with all of your belongings
            securely packed and safely.
          </p>
          <a href="#" class="btn btn-primary main-btn">READ MORE</a>
        </div>
      </div>
      <div class="card" style="width: 20rem;">
        <img class="card-img-top"
        src="../assets/img/avada-movers-servicethreephoto-final-600x383.jpg"
          alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">Coast To Coast</h3>
          <p class="card-text">With our super simple service we can take you from getting a quote,
            right through to being in your new home with all of your belongings
            securely packed and safely.
          </p>
          <a href="#" class="btn btn-primary main-btn">READ MORE</a>
        </div>
      </div>
    </div>
    <div class="contenitore-immagine">
      <div class="contenitore-verde">
        <h4>WE RREMOVE THE HEADACHE FROM MOVING</h4>
        <h1 class="bordo">Move WIth Ease</h1>
        <p>With our super simple service we can take you from getting a quote,
          right through to being in your new home with all of your belongings
          securely packed and safely delivered, even in theerooms of your choice.
        </p>
        <a href="#" class="btn btn-primary main-btn-2">GET A FREE QUOTE NOW</a>
      </div>
    </div>
    <div class="contenitore-card-2">
      <div class="testo-2">
        <h4 class="testo-grigio">HAPPY CUSTOMERS</h4>
        <h1 class="big-2">Testimonials</h1>
      </div>
      <div class="card-tonde">
        <div class="card-2" style="width: 18rem;">
          <img src="../assets/img/avada-movers-johndoe-final.jpg" class="card-img" alt="...">
          <div class="card-body-2">
            <h2 class="card-title-2">John Doe</h2>
            <p class="card-text">Some quick example text to build on the card title
              and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card-2" style="width: 18rem;">
          <img src="../assets/img/avada-movers-janedoe-final.jpg" class="card-img" alt="...">
          <div class="card-body-2">
            <h2 class="card-title-2">Jane Doe</h2>
            <p class="card-text">Some quick example text to build on the card title
              and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card-2" style="width: 18rem;">
          <img src="../assets/img/avada-movers-johnsmith-final.jpg" class="card-img" alt="...">
          <div class="card-body-2">
            <h2 class="card-title-2">Jhon Smith</h2>
            <p class="card-text">Some quick example text to build on the card title
              and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="bottone">
        <a href="#" class="btn btn-primary secondo">READ MORE TESTIMONIALS</a>
      </div>
    </div>
    <div class="finale">
      <div class="contenitore-finale">
        <h1 class="big-2">Request A Free Quote</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          doloremque odio, vitae molestiae ut cum quas ullam pariatur consequuntur
          voluptates eaque? Voluptas ducimus ipsa..</p>
          <a href="#" class="btn btn-primary main-btn-3">CLICK HERE</a>
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
  width: 1200px;
  margin: auto;

  margin-top: 100px;
}

img {
  width: 100%;
}

.card {
  background-color: #e9e9e9;
  padding: 20px;
  height: 570px;
}

.card-2 {
  padding: 30px;
  opacity: 0.8;
}

.card-img {
  width: 150px;
  border-radius: 50%;
  margin: auto;
}

.main-btn {
  background-color: #1975c0;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  margin: auto;
  margin-top: 20px;
}

.main-btn-2 {
  background-color: #1975c0;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  margin: auto;
  margin-top: 20px;
}

.main-btn-3 {
  background-color: #1975c0;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  margin: auto;
  margin-top: 30px;
}

.card-body {
  background-color: #fefefe;
  padding: 10px;
  margin-top: 30px;
  padding-bottom: 50px;
}

.card-body-2 {
  padding: 10px;
  margin-top: 30px;
  padding-bottom: 50px;
}

.card-title {
  text-align: center;
  color: #1975c0;
}

.card-title-2 {
  text-align: center;
  color: #1975c0;
}

.card-text {
  padding-bottom: 20px;
  text-align: center;
}

.contenitore-immagine {
  background-image: url(../assets/img/avada-movers-movewithease-background-new.jpg);
  position: relative;
  background-size: cover;
  height: 800px;
  margin-top: 150px;
}

.contenitore-verde {
  width: 530px;
  margin-right: 120px;
  background-color: #69bf14;
  text-align: center;
  position: absolute;
  top: 200px;
  right: 130px;
  padding: 15px;
  border: 20px solid #4c8d53;
  color: white;
}

.bordo {
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  font-size: 50px;
}

.contenitore-card-2 {
  background-image: url(../assets/img/avada-movers-testimonial-background.jpg);
  background-size: cover;
  padding: 10px;
  margin-top: 50px;
}

.card-tonde {
  display: flex;
  width: 1000px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  height: 500px;
  padding-top: 200px;
  position: relative;
}

.bottone {
  background-color: #1975c0;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 280px;
  margin: auto;
  margin-bottom: 90px;
}

.secondo {
  text-decoration: none;
  color: white;
}

.testo-2 {
  padding-top: 10px;
  margin-bottom: -200px;
  margin-top: 100px;
}

.finale {
  height: 600px;
  background-image: url(../assets/img/avada-movers-request-quote-background.jpg);
  border-bottom: 20px solid #69bf14;
}

.contenitore-finale {
  width: 800px;
  margin: auto;
  padding-top: 180px;
  text-align: center;
}

p {
  line-height: 200%;
}

</style>
