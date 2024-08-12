<template>
    <div class="my__projects container">
<div class="second__projects">
<a href="">
    <img src="../../assets/images/likeproject.svg" alt="" class="project__pic">
</a>

<h1 class="project__title">
    Nikee
</h1>
<div class="line"></div>
<p class="project__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<a href="https://github.com/Yorvoration7/grayson">
    <button onclick="window.location.href='https://yorvoration7.github.io/nikee/'" class="get__project">Look it up</button>
</a>
</div>

<div class="second__projects">
    <a href="">
    <img src="../../assets/images/likeproject.svg" alt="" class="project__pic">
</a>
<h1 class="project__title">
    Weather
</h1>
<div class="line"></div>

<p class="project__text">
    Project crated along with using framework Vue js, there we can write any city name and then get weather condition and info for a week
</p>
<a href="">
    <button onclick="window.location.href='https://github.com/Yorvoration7/weather-app'" class="get__project">Look it up</button>
</a>

</div>
    </div>
</template>

<script setup>

</script>

<style>
.my__projects{
    display: flex;
    justify-content: space-between;
}
.second__projects{
    background-color: rgb(7, 19, 43);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
border: 2px solid rgb(7, 19, 43);; 
box-shadow: 0 0 15px rgb(255, 255, 255); 
border-radius: 50px 5px 50px 5px;
}

.project__title{
    color: rgb(255, 255, 255,0.870);
font-family: 'Poppins';
font-size: 36px;
font-weight: 600;
padding: 25px 225px;
margin-bottom: 25px;

}
.line{
    width: 300px;
  height: 2px;
  padding: 0 127px;
  /* margin-left: 127px; */
  background: linear-gradient(to right, rgba(19,173,199), rgb(97, 226, 23), rgb(148, 93, 214) , #00ffff, #0000ff, #ff00ff);
  background-size: 200% auto;
  animation: glowing 2s linear infinite;
}
@keyframes glowing {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
.project__text{
padding: 25px;
color: rgb(255, 255, 255,0.870);
font-family: 'Poppins' !important;
font-size: 28px;
font-weight: 600;
line-height: 42px;
}
.get__project{
    color: rgb(255, 255, 255);
font-family: 'Poppins';
font-size: 20px;
font-weight: 600;
line-height: 30px;
border-radius: 83px;
padding: 15px 0px;
width: 200px;
border: none;
margin:35px 0 45px 0px;
background: linear-gradient(270.00deg, rgb(19, 173, 199),rgb(105, 120, 209) 66.667%,rgb(148, 93, 214) 100%);
}

@media (max-width:1649.99px) {
.project__pic{
    width: 450px;
height: 271px;
}
.second__projects{
    width: 530px;
}
.project__title{
    font-size: 33px;
}
.project__text{
    font-size: 25px;
}
}
@media (max-width:1399.99px) {
    .project__pic{
    width: 430px;
height: 241px;
}
.second__projects{
    width: 490px;
    height: 700px;
}
.project__title{
    font-size: 29px;
    padding: 2px;
}
.project__text{
    font-size: 22px;
}
}


@media (max-width:1215px) {
    .my__projects{
    display: flex;
   gap: 30px;
   align-content: center;
   justify-content: center;
   margin: 0 auto;
}
.second__projects{
    width: 420px;
}
.project__title{
    font-size: 26px;
}
.project__text{
    font-size: 20px;
}
.project__pic{
    padding: 15px 45px;
}
}
@media (max-width:1215px) {
    .my__projects{
    display: flex;
   gap: 30px;
   align-content: center;
   justify-content: center;
   margin: 0 auto;
}
   .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 420px;
    height: 670px;
}
.project__title{
    font-size: 24px;

}
.project__text{
    font-size: 20px;
}
.project__pic{
    padding: 15px 35px;
}
}

@media (max-width:1001.99px) {
    .my__projects{
    display: flex;
   gap: 30px;
   align-content: center;
   justify-content: center;
   margin: 0 auto;
}
   .get__project{
    margin: 20px 0 7px 0px;

   }
.second__projects{
    width: 390px;
    height: 670px;
}
.project__title{
    font-size: 24px;

}
.project__text{
    font-size: 20px;
}
.project__pic{
    padding: 15px 35px;
}
}
@media (max-width:1001.99px) {
    .my__projects{
    display: flex;
   gap: 30px;
   align-content: center;
   justify-content: center;
   margin: 0 auto;
}
   .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 390px;
    height: 670px;
}
.project__title{
    font-size: 24px;

}
.project__text{
    font-size: 20px;
}
.project__pic{
    padding: 25px 45px;
}
}
@media (max-width:920.99px) {
    .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 340px;
    height: 630px;
}
.line{
    max-width: 170px;
  }
.project__pic{
    max-width: 380px;
    max-height:200px ;
}
.project__title{
    font-size: 24px;
    padding: 25px 55px;
    margin-bottom: 1px;
}
.project__text{
    font-size: 20px;
    padding: 10px;
}
.get__project{
    font-size: 18px;
}
}
@media (max-width:800.99px) {
    .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 260px;
    height: 475px;
}

.project__pic {
        max-width: 280px;
        max-height: 150px;
        padding: 20px;
    }
.line{
    padding: 0 70px ;
    margin-top: 10px;
}
.project__title{
    font-size: 12px;
    padding: 10px 55px;
    margin-bottom: 1px;
}
.project__text{
    font-size: 14px;
        padding: 10px;
        line-height: 35px;
}
.get__project{
    width: 125px;
        height: 45px;
font-size: 14px;
display: flex;
    align-items: center;
    justify-content: center;
}
}
@media (max-width:650.99px) {
    .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 240px;
    height: 425px;
}
.line{
    padding: 0 70px ;
    margin-top: 8px;
}

.project__pic {
        max-width: 280px;
        max-height: 150px;
        padding: 25px;
    }
.project__title{
    font-size: 12px;
    padding: 5px 55px;
    margin-bottom: 1px;
    padding-top: 5px;
}
.project__text{
    font-size: 13px;
        padding: 10px;
        line-height: 25px;
max-width: 230px;
    }
.line{
    max-width: 150px ;
}
.get__project{
    width: 125px;
        height: 45px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
}
.my__projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

} 
@media (max-width:436.99px) {
    .get__project{
    margin: 20px 0 7px 0px;
   }
.second__projects{
    width: 200px;
    height: 405px;
}
.line{
    padding: 0 70px ;
    margin-top: 8px;
}

.project__pic {
        max-width: 260px;
        max-height: 130px;
        padding: 25px;
    }

.project__text{
    font-size: 11px;
        padding: 10px;
        line-height: 25px;
max-width: 230px;
}
.line{
    max-width: 150px ;
}
.get__project{
    width: 105px;
        height: 40px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
margin: 15px 0;
}
   }
</style>
