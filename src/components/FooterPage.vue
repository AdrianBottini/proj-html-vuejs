<template>
  <div>
    <div class="contenitore-footer">
      <div class="primo">
        <h4>ABOUT</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <img alt="Avada movers" class="logo-2" src="../assets/img/avada-movers-logo.png">
        </div>
      </div>
      <div class="secondo-2">
        <h4 class="h4-finale-1"><a href="" class="black">AVADA MOVERS</a></h4>
        <ul>
          <li class="li-2"><a href="" class="black">&#8250; Home</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Rates</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Testimonials</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Blog</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Free Quote</a></li>
        </ul>
      </div>
      <div class="terzo">
        <h4 class="h4-finale"><a href="" class="black">RECENT POSTS</a></h4>
        <ul>
          <li class="li-2"><a href="" class="black">&#8250; Heading Out To College?</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Moving Your Business?</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Outstanding Quality</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Cost of Moving</a></li>
          <li class="li-2"><a href="" class="black">&#8250; Best Moving Tips</a></li>
        </ul>
      </div>
    </div>
    <div class="colore">
      <h5 class="copy">
        <a href="" class="white">&copy; Copyright 2012 - 2020 |</a>
        <a href="" class="white">Avada Therme by ThemeFusion |</a>
        <a href="" class="white">All Rights Reserved |</a>
        <a href="" class="white">Powered by WordPress !</a>
      </h5>
      <div>
        <font-awesome-icon icon="fa-brands fa-facebook-f" class="icone-2" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="icone-2" />
        <font-awesome-icon icon="fa-brands fa-instagram" class="icone-2" />
        <font-awesome-icon icon="fa-brands fa-youtube" class="icone-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>

<style>
.logo-2 {
  width: 200px;
  margin-top: 40px;
}

.contenitore-footer {
  display: flex;
  margin: auto;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
}

.primo {
  width: 19%;
  text-align: initial;
}

.secondo-2 {
  width: 14%;
}

.terzo {
  width: 15%;
}

.h4-finale {
  margin-left: -40px;
}

.h4-finale-1 {
  margin-left: -20px;
}

.li-2 {
  list-style: none;
  display: flex;
  padding: 15px;
}

.colore {
  color: white;
  background-color: #6bbb14;
  text-align: center;
  padding: 20px;
  margin-top: 50px;
}

.copy {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.white {
  color: white;
  padding: 5px;
}
</style>
