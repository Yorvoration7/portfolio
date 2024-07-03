<template>
  <div class="lines__of-knowledge container">
    <div class="languages__items">
     <div v-for="(item, i) in items" :key="i">
      <div class="knowledge__title">
        <ul>
          <h2 class="language__item-title">{{ item.title }}</h2>
          <p class="knowledge__level">{{ item.text }}</p>
        </ul>
        <div :style="`width: ${item.max}%; background: ${item.bg}; height: 15px`" class="underline">
              
          <div :style="`width: ${item.value}%; background:linear-gradient(
    270deg,
    rgb(19, 173, 199) 0%,
    rgb(105, 120, 209) 66.667%,
    rgb(148, 93, 214) 100%
  ); 
  height: 15px`" class="overline"></div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
    const items = ref([
      {
        id: 1,
        title: "HTML",
        text: "Advanced",
        value: "80",
        max: 100,
         bg: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(105, 120, 209) 66.667%, rgb(148, 93, 214) 100%)',
        bg: '#162950'
      },
      {
        id: 2,
        title: "CSS",
        text: "Advanced",
        value: "80",
        max: "100",
        bg: '#162950'

      },
      {
        id: 3,
        title: "SCSS",
        text: "Regular",
        value: "60",
        max: "100",
        bg: '#162950'

      },
      {
        id: 4,
        title: "JavaScript, Vue Js",
        text: "Regular",
        value: "50",
        max: "100",
        bg: '#162950'

      },
    ]);

</script>

<style>
.knowledge__title ul{
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
}
.overline{
  position: relative;
top: 0;
left: 0;
min-height: 32px;
border-radius: 83px;
}
.underline{
  position: absolute;
  max-width: 1330px;
  min-height: 32px;
  width: 100%;
  border-radius: 83px;
}



.progress__line {
  border-radius: 83px;
  width: 100%;
  height: 32.3px;
  background-color: rgb(22, 41, 80);
  z-index: 5;
}

@keyframes animate {
  from {
    width: 0px;
  }
  to {
    width: 990px;
  }
}

.knowledge__line {
  /* position: static; */
  border-radius: 83px;
  width: 100%;
  height: 32.3px;
  background-color: rgb(22, 41, 80);
  z-index: 5;
  position: relative;
}
.knowledge__line::after {
  content: "";
  position: absolute;
  border-radius: 83px;
  height: 100%;
  width: 100%;
  max-width: 990px;
  background: linear-gradient(
    270deg,
    rgb(19, 173, 199) 0%,
    rgb(105, 120, 209) 66.667%,
    rgb(148, 93, 214) 100%
  ); 
  animation: animate 2s alternate 1;
}

.languages__items {
  display: flex;
  flex-direction: column;
  gap: 75px;
}
.language__items {
  display: flex;
  flex-direction: column;
}
.language__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.language__item-title {
  color: rgba(255, 255, 255, 0.924);
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  padding-left: 25px;
}
.knowledge__level {
  color: rgba(255, 255, 255, 0.924);
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  padding-right: 66px;
}
@media (max-width:395.99px) {

}

</style>
