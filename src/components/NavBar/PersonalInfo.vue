<template>
    <div class="intro__own-info container">
        <div class="own__info-item">
    <div class="own__info">
<h1 class="intro__title">
Front-End Developer 👋🏻
</h1>
<p class="intro__text">
    Hi, I'm Tony. A passionate Front-End Developer based in Tashkent, Uzbekistan📍
</p>    
<br>
    </div>
    <div class="photo">  
    <img src="../../assets/images/yorvoration2.jpg" alt="" class="my__photo">
    </div>
</div>
<div class="button__item">
    <button class="begin">
<a @click.prevent="scrollToPosition(0,650)" href="" class="intro__start-title">
        Let’s begin
    </a>
    
        </button>  
</div>

</div>

</template>
<script setup>

const scrollToPosition = (x,y) => {
window.scrollTo({top:y,left:x,behavior:'smooth'})
}

</script>

<style>
.own__info-item{
    display: flex;
    justify-content: space-between;

}
.intro__start-title{
    color: rgb(255, 255, 255);
font-family: 'Poppins';
font-size: 23px;
font-weight: 600;
line-height: 42px;

}
.intro__own-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.photo{
margin-top: 165px;
background: rgba(0,0,0,0.3);
   /* border: 20px solid rgba(0,0,0,0.3); */
   border-radius:  30px 5px 30px 5px;
   /* background-color: rgb(7, 19, 43); */
   width: 345px;
    height: 345px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
transition: 1s;
}
.photo::after{
    content: "";
    position: absolute;
    width: 495px;
    height: 495px;
    background-image: conic-gradient(transparent,transparent,transparent,#0000ff93,#61e217cb);
    animation: circle 8s linear infinite;
    animation-delay: -4s;
}
.photo::before{
    content: "";
    position: absolute;
    width: 475px;
    height: 475px;
    background-image: conic-gradient(transparent,transparent,transparent,#00ccffbe,#935dd6c8);
    animation: circle 8s linear infinite;
}
@keyframes circle {
    0%{
transform: rotate(0deg);
    }
    100%{
transform: rotate(360deg);
        
    }
}
.my__photo{
    position: absolute;
inset: 5px;
border-radius: 16px;
background: #0c1020;
z-index: 2;
width: 320px;
    height: 320px;
    margin:  auto;
}
.my__photo:hover,
.my__photo:focus-within{
    transition: 1s;
transform: scale(1.1);
z-index: 4;
}
/* .my__photo{
position: absolute;
inset: 5px;
border-radius: 16px;
background: #0c1020;
z-index: 2;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 320px;
    height: 320px;
} */
.own__info{
    padding-top: 180px;
}
.intro__title{
    color: rgba(255, 255, 255, 0.924);
font-family: 'Poppins';
font-size: 54px;
font-weight: 600;
margin-left: -65px;
}
.intro__text{
    color: rgb(188, 188, 188);
font-family: 'Poppins';
font-size: 30px;
font-weight: 600;
line-height: 54px;
max-width: 550px;
max-height: 162px;
}
.begin{
    display: flex;
    align-items: center;
    justify-content: center;
    width:250px ;
    height: 75px;
    color: rgb(255, 255, 255);
font-family: 'Poppins';
font-size: 26px;
font-weight: 600;
line-height: 42px;
margin-left: 40px;
border: none;
margin-top: 37px;
    padding: 18px 62px;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(270.00deg, rgb(19, 173, 199),rgb(105, 120, 209) 66.667%,rgb(148, 93, 214) 100%);
    border-radius: 83px;

}
@media (max-width:1649.99px) {
.container{
        width: 100%;
    max-width: 1250px;
    margin: 0 auto;
}
.own__info{
    padding-top: 150px;
}
.intro__title{
    font-size: 40px;
    margin-left: -45px;
}
.intro__text{
    font-size: 27px;
    line-height: 44px
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 280px;
    height: 280px;
    margin: 15px auto;
}
.photo{
margin-top: 165px;
   /* border: 20px solid rgba(0,0,0,0.3); */
   /* background-color: rgb(7, 19, 43); */
     width: 315px;
    height: 310px;
    position: relative;

}
}


@media (max-width:1399.99px) {
    .container{
        width: 100%;
    max-width: 1100px;
    margin: 0 auto;
}
.own__info{
    padding-top: 150px;
}
.intro__title{
    font-size: 35px;
    margin-left: -40px;
}
.intro__text{
    font-size: 24px;
    line-height: 44px
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 250px;
    height: 250px;
    margin: 15px auto;

}
.photo{
margin-top: 165px;
     width: 280px;
    height: 280px;
    position: relative;

}
.intro__start-title{
    font-size: 23px;
}
.begin{
    padding: 14px 55px;
}
}



@media (max-width:1215.99px) {
    .container{
        width: 100%;
    max-width: 850px;
    margin: 0 auto;
}
.begin{
    width:200px ;
    height: 75px;
}
.intro__start-title{
    font-size: 16px;
}
.own__info{
    padding-top: 130px;
}
.intro__title{
    font-size: 30px;
    margin-left: -40px;
}
.intro__text{
    font-size: 22px;
    line-height: 44px;
    max-width: 480px;
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 220px;
    height: 220px;
    margin: 15px auto;
}
.photo{
margin-top: 135px;
     width: 250px;
    height: 250px;
    position: relative;

}

.begin{
    padding: 14px 55px;
}
}
@media (max-width:1001.99px) {
    .container{
        width: 100%;
    max-width: 700px;
    margin: 0 auto;
}
.own__info{
    padding-top: 130px;
}
.begin{
    width:170px ;
    height: 65px;
}
.intro__start-title{
    font-size: 14px;
}
.intro__title{
    font-size: 28px;
    margin-left: -40px;
}
.intro__text{
    font-size: 20px;
    line-height: 44px;
    max-width: 480px;
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 180px;
    height: 180px;
    margin: 12.5px auto;
}
.photo{
margin-top: 135px;
   /* border: 20px solid rgba(0,0,0,0.3); */
   /* background-color: rgb(7, 19, 43); */
     width: 205px;
    height: 205px;
    position: relative;

}
.begin{
    padding: 10px 45px;
}

}
@media (max-width:920.99px) {
    .container{
        width: 100%;
    max-width: 500px;
    margin: 0 auto;
}
.own__info{
    padding-top: 130px;
}
.intro__title{
    font-size: 25px;
    margin-left: -40px;
}
.intro__text{
    font-size: 17px;
    line-height: 40px;
    max-width: 250px;
    min-height: 170px;
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 160px;
    height: 160px;
    margin: 10px auto;
}
.photo{
margin-top: 135px;
     width: 180px;
    height: 180px;
    position: relative;

}
.intro__start-title{
    font-size: 14px;
}
.begin{
    padding: 8px 40px;
    width:160px ;
    height: 60px;
}

}
@media (max-width:800.99px) {
    .intro__own-info{
        display: flex;
        flex-direction: column;
    }
    .container{
        width: 100%;
    max-width: 380px;
    margin: 0 auto;
}
.own__info{
    padding-top: 100px;
}
.intro__title{
    font-size: 20px;
    margin-left: -40px;
}
.intro__text{
    font-size: 14px;
    line-height: 40px;
    max-width: 250px;
    min-height: 170px;
}

.my__photo{
    position: absolute;
top: 0;
left: 0;
    box-shadow: 12px 12px 2px 1px rgba(7, 19, 43, .2);
    width: 125px;
    height: 125px;
    margin: 7.5px 7px;
}
/* .photo{
    display: none;
} */
.photo{
margin-top: 135px;
     width: 150px;
    height: 140px;
    position: relative;

}
.intro__start-title{
    font-size: 16px;
}

.intro__start-title{
    font-size: 11px;
    line-height: 20px;
}
.begin{
    padding: 8px 40px;
    width:145px ;
    height: 50px;
}
.own__info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.own__info-item{
    gap: 10px;
}
} 
@media (max-width:650.99px) {
   
.own__info-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.photo{
    margin-top: 10px;
     width: 145px;
    height: 145px;
    position: relative;
}
.my__photo{
    margin: 10px 10px;
}
.button__item{
    display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
}
.begin{
    margin-left: 0px;
}
.photo{
    margin-top: -30px;
}
.own__info{
    padding-top: 55px;
}
} 
 @media (max-width:560.99px) {
    .container{
        width: 100%;
    max-width: 320px;
    margin: 0 auto;
}
    .own__info-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
/* .photo{
    margin-top: 5px;
    border: 20px solid rgba(0,0,0,0.3);
     width: 165px;
    height: 160px;
    margin-top: -50px;
}
.my__photo{
    margin: 20px 12.5px;
} */
.photo{
    margin-top: 10px;
     width: 145px;
    height: 145px;
}
.my__photo{
    margin: 10px 10px;
}
.button__item{
    display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
}
.begin{
    margin-left: 0px;
}

.own__info{
    padding-top: 55px;
}
.intro__title{
    font-size: 18px;
}
/* .photo{
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
}
.my__photo{
    margin-left: -4px;
position: absolute;
top: 0;
left: 0;
    box-shadow: 10px 10px 2px 1px rgba(7, 19, 43, .2);
    width: 100px;
    height: 100px;
} */
.photo{
    margin-top: 10px;
     width: 130px;
    height: 130px;
}
.my__photo{
    margin: 10px 10px;
    width: 110px;
    height: 110px;
}



.intro__text{
    font-size: 13px;
        line-height: 30px;
        max-width: 250px;
        max-height: 140px; 
}
.begin{
    padding: 8px 40px;
    width:115px ;
    height: 40px;
}
.intro__start-title{
    font-size: 10px;
        line-height: 15px;
        min-width: 65px;
}
}  
@media (max-width:436.99px) {
    .container{
        width: 100%;
    max-width: 270px;
    margin: 0 auto;
}
.intro__title{
    font-size: 16px;

}
.intro__text{
    font-size: 11px;
    height: 90px;
}
.photo{
    margin-top: -100px;
}
.intro__start-title{
    font-size: 9px;
}
}
@media (max-width:395.99px) {
    .container{
        width: 100%;
    max-width: 210px;
    margin: 0 auto;
}
.intro__title{
    font-size: 14px;

}
.intro__text{
    font-size: 11px;
    line-height: 22px;
}
.photo{
    margin-top: -100px;
}
.intro__start-title{
    font-size: 9px;
}
.begin{
    padding: 8px 40px;
    width:105px ;
    height: 35px;
}
.own__info{
    padding-top: 75px;
}
}
</style>
