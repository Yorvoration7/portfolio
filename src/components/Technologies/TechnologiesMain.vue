<template>
    <div class="wrapper" id="technologies">
<h1 class="techno__title own_container">
    Technologies
</h1>
<Knowledge/>


<h1 class="techno__title own_container">
    Skills
</h1>
<Skills/>
    </div>
</template>

<script setup>
import Knowledge from "./Knowledge.vue";
import Skills from "./Skills.vue";
</script>

<style>
.techno__title{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 64px;
font-weight: 600;
line-height: 96px;
padding-top: 230px;
padding-bottom: 133px;
}

@media (max-width:1649.99px) {
    .techno__title{
        font-size: 54px;
        padding-top: 200px;
        padding-bottom: 50px;
    }
    .language__item-title{
        font-size: 33px;
    }
    .knowledge__level{
        font-size: 22px;
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
  max-width: 1250px;
  min-height: 32px;
  width: 100%;
  border-radius: 83px;
}
}
@media (max-width:1400.99px) {
   
    .overline{
  position: relative;
top: 0;
left: 0;
min-height: 32px;
border-radius: 83px;
}
.underline{
  position: absolute;
  max-width: 1100px;
  min-height: 32px;
  width: 100%;
  border-radius: 83px;
}
}
@media (max-width:1220.99px) {

.overline{
  position: relative;
top: 0;
left: 0;
min-height: 32px;
border-radius: 83px;
}
.underline{
  position: absolute;
  max-width: 850px;
  min-height: 32px;
  width: 100%;
  border-radius: 83px;
}
}
@media (max-width:1001.99px) {
  .skill__title{
    font-size: 20px;
  }
    .techno__title{
        font-size: 40px;
    }
    .language__item-title{
        font-size: 26px;
    }
    .knowledge__level{
        font-size: 20px;
    }
 
    .knowledge__line{
        max-height: 25px;
    }
    .knowledge__line::after {
  content: "";
  max-width: 650px;
}
.overline{
  position: relative;
top: 0;
left: 0;
min-height: 25px;
border-radius: 83px;
}
.underline{
  position: absolute;
  max-width: 700px;
  min-height: 25px;
  width: 100%;
  border-radius: 83px;
}
}
@media (max-width:920.99px) {
    .techno__title{
        font-size: 36px;
    }
    .language__item-title{
        font-size: 24px;
    }
    .knowledge__level{
        font-size: 18px;
    }
    .knowledge__line{
        max-height: 18px;
    }
    .knowledge__line::after {
  content: "";
  max-width: 450px;
}
.overline{
  position: relative;
top: 0;
left: 0;
min-height: 18px;
border-radius: 83px;
}
.skill__title{
    font-size: 18px;
  }
.underline{
  position: absolute;
  max-width: 500px;
  min-height: 18px;
  width: 100%;
  border-radius: 83px;
}
}
@media (max-width:800.99px) {
    .techno__title{
        font-size: 33px;
        padding-top: 125px;
    }
    .skill__title{
    font-size: 15px;
}
.my__skills{
    padding-top: 10px;
  margin-bottom: 20px;
}
    .languages__items{
        gap: 50px;
    }
    .language__item-title{
        font-size: 18px;
        padding-left:10px ;
    }
    .knowledge__level{
        font-size: 14px;
        padding-right:10px ;
    }
    .knowledge__line{
        max-height: 18px;
    }
    .knowledge__line::after {
  content: "";
  max-width: 350px;
}
.overline{
  position: relative;
top: 0;
left: 0;
min-height: 18px;
border-radius: 83px;
}
.underline{
  position: absolute;
  max-width: 380px;
  min-height: 18px;
  width: 100%;
  border-radius: 83px;
}
} 
@media (max-width:650.99px) {
    .techno__title{
        font-size: 30px;
        padding-top: 125px;
    }
} 
@media (max-width:560.99px) {
  .techno__title{
        font-size: 25px;
        padding-top: 100px;
    }
    .underline{
    max-width: 320px;
   }
   .skill__title{
    font-size: 12px;
}
.my__skills{
    padding-top: 10px;
  margin-bottom: 20px;
}
} 
@media (max-width:436.99px) {
  .techno__title{
        font-size: 23px;
        padding-top: 100px;
    }
    .language__item-title{
      font-size: 16px;
    }
    .knowledge__level{
      font-size: 12px;
    }
    .underline{
    max-width: 270px;
    min-height: 15px;
   }
   .overline{
    min-height: 15px;
   }
   .skill__title{
    font-size: 10px;
}
.my__skills{
    padding-top: 10px;
  margin-bottom: 20px;
}
}
@media (max-width:395.99px) {
  .underline{
    max-width: 210px;
    height: 13px;
   }
   .overline{
    height: 13px;
   }
   .skill__title{
    font-size: 10px;
}
.skills-list{
  display: grid;
  grid-template-columns: 2fr 2fr;
}
}
</style>