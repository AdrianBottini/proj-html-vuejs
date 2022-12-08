<template>
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
        <li><a href="" class="black">&#8250; Home</a></li>
        <li><a href="" class="black">&#8250; Rates</a></li>
        <li><a href="" class="black">&#8250; Testimonials</a></li>
        <li><a href="" class="black">&#8250; Blog</a></li>
        <li><a href="" class="black">&#8250; Free Quote</a></li>
      </ul>
    </div>
    <div class="terzo">
      <h4 class="h4-finale"><a href="" class="black">RECENT POSTS</a></h4>
      <ul>
        <li><a href="" class="black">&#8250; Heading Out To College?</a></li>
        <li><a href="" class="black">&#8250; Moving Your Business?</a></li>
        <li><a href="" class="black">&#8250; Outstanding Quality</a></li>
        <li><a href="" class="black">&#8250; Cost of Moving</a></li>
        <li><a href="" class="black">&#8250; Best Moving Tips</a></li>
      </ul>
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
</style>
