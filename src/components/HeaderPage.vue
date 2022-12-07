<template>
  <div class="HeaderPage">
    <div class="green">
      <div>
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
    <nav class="barra-navigazione">
      <img alt="Avada movers" src="../assets/img/avada-movers-logo.png"></img>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Rates</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <button>FREE QUOTE</button>
    </nav>
    <div>
      <button class="grande">
        <i class="fa-light fa-paper-plane"></i>
        GET A FREE QUOTE ONLINE NOW!
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderPage',
};

</script>

<style>
.HeaderPage {
  background-image: url(../assets/img/avada-movers-homeherobackground-final.jpg);
}
  .green {
    display: flex;
    background-color: #6bbb14;
    color: white;
    justify-content: space-around;
  }
  .barra-navigazione {
    display: flex;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .grande {
    background-color: #1975c0;
    color: white;
    width: 100%;
  }
</style>
