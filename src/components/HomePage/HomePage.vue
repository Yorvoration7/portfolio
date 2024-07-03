<template>
    <div>
        <router-link to="/">
  <PersonalInfo/>
  <Projects id="myprojects"/>
  <TechnologiesMain/>
  <AboutMe id="myself"/>
  <Contactme/>
</router-link>
    </div>
</template>

<script setup>
import PersonalInfo from "../NavBar/PersonalInfo.vue";
import Projects from "../Projects/Projects.vue";
import TechnologiesMain from "../Technologies/TechnologiesMain.vue";
import AboutMe from "../AboutMe.vue";
import Contactme from "../Contactme.vue";


</script>

<style>

</style>