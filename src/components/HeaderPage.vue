<template>
  <div>
    <div class="HeaderPage">
      <div class="green">
        <div class="icone">
          <i class="fa-solid fa-phone"></i>
          <span>Call us for a Free Quote: 1.800.555.6789</span>
        </div>
        <div>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
    <nav class="barra-navigazione">
      <div class="contenitore">
        <!-- <img alt="Avada movers" src="../assets/img/avada-movers-logo.png"></img> -->
        <ul>
          <li><a href="" class="black">Home</a></li>
          <li><a href="" class="black">Rates</a></li>
          <li><a href="" class="black">Testimonials</a></li>
          <li><a href="" class="black">FAQ</a></li>
          <li><a href="" class="black">Blog</a></li>
          <li><a href="" class="black">Contact</a></li>
        </ul>
        <button class="btn-primary piccolo">
          <a href="" class="nav">FREE QUOTE</a>
        </button>
      </div>
    </nav>
    <div class="simple">
      <div class="testo">
        <h4 class="testo-grigio">MOVING WITHOUT THE HASSLE</h4>
        <h1 class="big">WE MAKE IT SIMPLE</h1>
        <h4 class="testo-grigio">PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</h4>
      </div>
    </div>
    <div>
      <button class="grande">
        <i class="fa-light fa-paper-plane"></i>
        <a href="" class="nav">GET A FREE QUOTE ONLINE NOW!</a>
      </button>
    </div>
    <div class="grigio">
      <div class="secondo-p">
        <h4 class="testo-grigio">HEADACHE FREE</h4>
        <h1 class="big-2">Award Winning Moving Company</h1>
        <p class="paragrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cumque eos placeat delectus mollitia accusamus maxime dignissimos
          magni pariatur tempora laudantium ducimus et odio, tenetur sequi
          similique provident at sint corrupti?</p>
        <button class="btn-primary piccolo centrale">
          <a href="" class="nav">READ OUR TESTIMONIALS</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
};

</script>

<style>
.simple {
  background-image: url(../assets/img/avada-movers-homeherobackground-final.jpg);
  position: relative;
}

.testo {
  text-align: center;
}

.testo-grigio {
  color: #afaeae;
  text-align: center;
}

.big {
  font-size: 50px;
}

.big-2 {
  font-size: 40px;
  color: #69bf14;
  text-align: center;
}

.green {
  display: flex;
  background-color: #6bbb14;
  color: white;
  justify-content: space-around;
  width: 100%;
  height: 50px;
}

.icone {
  margin-top: 10px;
}

.barra-navigazione {
  display: flex;
  justify-content: space-around;
}

ul {
  display: flex;
  justify-content: space-around;
}

li {
  list-style: none;
  display: flex;
  padding: 20px;
}

a {
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}

.grande {
  background-color: #1975c0;
  color: white;
  width: 100%;
  height: 50px;
  margin-top: 22px;
  border: none;
}

.piccolo {
  background-color: #1975c0;
  color: white;
  padding: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 22px;
  border-radius: 25px;
  border: none;
}

.grigio {
  background-color: #e9e9e9;
  text-align: center;
  margin-top: -21px;
}

.contenitore {
  display: flex;
}

.secondo-p {
  padding: 50px;
  margin: 21px auto;
  width: 400px;
}

.paragrafo {
  padding: 10px;
}

.nav {
  text-decoration: none;
  color: white;
}

.black {
  color: black;
}

.centrale {
  color: white;
  margin: auto;
}
</style>
