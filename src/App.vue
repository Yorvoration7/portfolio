<template>
  <div class="wrapper" >
    <header class="header">
    <NavBar/>
  </header>
  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">
    <Footer/>
  </footer>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.container{
  width: 100%;
max-width: 1330px;
margin: 0 auto;

} 

.wrapper{
  background-color: rgb(7, 19, 43);
 /* height: 350vh; */
width: 100%;
}
.footer{
  margin-top: 250px;
}
@media (max-width:920.99px) {
.footer{
  margin-top: 150px;
}
}
</style>
