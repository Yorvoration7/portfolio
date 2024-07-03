<template>

    <nav class="intro own_container">
        <router-link to="/">
        <div class="portfolio">
            
            <a href="" class="portfolio__img">
                <img src="../../assets/images/logo.svg" alt="" class="portfolio__pic">
            </a>
            <a href=""> <h1 class="portfolio-title" >
            Portfolio
        </h1></a>
 
        </div>   
    </router-link>       
        
<div class="more__info">
    <ul class="more__info-items">
        <li>
            <router-link to="/projects">
            <a href="" class="more__info-item">
                Projects
            </a></router-link>
        </li>
        <li>
            <router-link to="/technologies">
            <a href="" class="more__info-item">Technologies</a> </router-link>
        </li>
        <li>
<router-link to="/about-me">
            <a href="" class="more__info-item">About me</a>
        </router-link>
        </li>
        <li>
            <router-link to="/contact">
            <a href="" class="more__info-item">
                Contact
                </a></router-link>
        </li>
    </ul>
    <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden">
        <label for="checkbox1"
         >
            <div class="hamburger hamburger1 burger-main" @click="burgerMenu">
                <span :class="`bar bar1 ${burger ? 'bar-x1' : ''}`"  ></span>
                <span :class="`bar bar2 ${burger ? 'bar-x2' : ''}`"></span>
                <span :class="`bar bar3 ${burger ? 'bar-x3' : ''}`"></span>
                <span :class="`bar bar4 ${burger ? 'bar-x4' : ''}`"> </span>
                <div class="burger__menu" v-if="burger">
                    <ul class="more__info-items-burger">
        <li class="section__title">
            <router-link to="/projects" class="more__info-item">
                Projects
            </router-link>
        </li>
        <li class="section__title">
            <router-link to="/technologies" class="more__info-item">
           Technologies</router-link>
        </li>
        <li class="section__title">
<router-link to="/about-me" class="more__info-item">
             About me
        </router-link>
        </li>
        <li class="section__title">
            <router-link to="/contact" class="more__info-item">
                Contact
             </router-link>
        </li>
</ul>
                </div>
            </div>
        </label>

    <div class="contact__icons">
    <a href="https://github.com/Yorvoration7" target="_blank">
        <img src="../../assets/icons/github.svg" alt="" class="user__pic">
    </a>

    <a href="https://t.me/yorvoration7" target="_blank">
        <img src="../../assets/icons/telegramm.webp" alt="" class="user__pic">
    </a>

    <a href="" target="_blank">
        <img src="../../assets/icons/whatsapp.svg" alt="" class="user__pic">
    </a>
</div>
</div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import './projectmedia.css';
const burger = ref(false)

const burgerMenu = () =>{
    burger.value = !burger.value
};
</script>
<style>
.burger-main{
    position: relative;
}
.section__title{
    max-height: 17px;
    margin-bottom: 0.5rem;
    transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.burger__menu{
    position: relative;
    /* margin-top: 105px; */
    top: 100px;
    left: 80px;
  width: 100px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
    
}
.more__info-items-burger{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    animation: appear 0.8s ease-in-out;
    
}
@keyframes appear{
0% {
    transform:translateX(100%);
    opacity: 0;
}
100%{
    transform:translateX(0);
    opacity: 1;
}
}
.more__info-item{
    color: rgba(255, 255, 255, 0.856);
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    line-height: 63px;
}
.checkbox1 {
    display: none;
}
.hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 30px;
    height: 25px;
    position: relative;
}

.hamburger .bar {
    padding: 0;
    width: 28px;
    height: 2px;
    background-color:rgb(255, 255, 255);
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
}

.bar1 {
    top: 0;
}

.bar2,
.bar3 {
    top: 10.5px;
}

.bar3 {
    right: 0;
}

.bar4 {
    top: 20px;
    bottom: 0;
}

.bar-x1{
    transform: rotate(58deg);
    transform-origin: 20%;
    width: 34px;
    margin-top: 2px;
}

.bar-x2 {
    transform: translateX(-30px);
    background-color: transparent;
    opacity: 0;
}

.bar-x3 {
    transform: translateX(30px);
    background-color: transparent;
    opacity: 0;
}

.bar-x4 {
    transform-origin: 5%;
    transform: rotate(-55deg);
    width: 34px;
}
.contact__icons{
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: center;
}
.intro{
    padding-top: 30px;
}
.user__pic{
    display: flex;
    max-width: 35px;
    max-height: 35px;

}
.intro {
    display: flex;
    align-items: center;
}
.portfolio{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap:15px;
}
.more__info{
    display: flex;
    /* flex-direction: row; */
    gap:65px;
   justify-content: right;
    /* align-items: center; */
    flex-direction: row;
}
.more__info-item{
    color: rgb(255, 255, 255);
font-family: 'Poppins';
font-size: 30px;
font-weight: 500;
line-height: 45px;
}
.portfolio-title{
    color: rgb(255, 255, 255);
font-family: 'Poppins';
font-size: 30px;
font-weight: 500;
line-height: 45px;
}

.more__info-items{
    display: flex;
    flex-direction: row;
    align-items: center;
      gap:50px;
   
      margin-right: 300px;
      margin-left: 108px;
     
}
.own_container{
    width: 100%;
max-width: 1620px;
margin: 0 auto;
display: flex;
align-items: center;
}



@media (max-width:1649.99px) {
    body{
        background: rgb(16, 88, 182);
    }
    .own_container{
        max-width: 1350px;
    }
.more__info-items{
    margin-right: 100px;
}
.more__info-items{
    gap: 45px;
}
.more__info-item{
font-size: 25px;
}
}


@media (max-width:1399.99px) {
    body{
        background: rgb(16, 88, 182);
    }
    .own_container{
        max-width: 1201px;
    }
.more__info-items{
    margin-right: 70px;
}
.more__info-items{
    gap: 27px;
}
.more__info-item{
font-size: 24px;
}
}
@media (max-width:1215.99px) {
    .own_container{
        max-width: 1050px;
    }
.more__info-items{
    margin-right: 45px;
}
.more__info-items{
    gap: 25px;
}
.more__info-item{
font-size: 22px;
}
.more__info-items{
    margin-left: 55px;
}
}
@media (max-width:1215px) {
    .own_container{
        max-width: 900px;
    }
.more__info-items{
    margin-right: 40px;
}
.more__info-items{
    gap: 25px;
}
.more__info-item{
font-size: 20px;
}
.user__pic{
    width: 25px;
    height: 25px;
}
.more__info{
    gap: 10px;
}

}
@media (max-width:920.99px) {
    .own_container{
        max-width: 780px;
    }
.more__info-items{
    margin-right: 30px;
}
.contact__icons {
    gap: 21px;
}
.portfolio__pic{
    width: 45px;
    height: 45px;
}
.more__info-items{
    gap: 25px;
}
.more__info-item{
font-size: 15px;
}
.portfolio-title{
    font-size:28px ;
}
.more__info{
    gap: 15px;
}

}
 @media (max-width:800.99px) {
    .own_container{
        max-width: 641px;
    }
    .portfolio-title{
    font-size:22px;
    }
    .portfolio__pic{
       width: 35px;
       height: 35px; 
    }
.more__info-items{
    margin-right: 5px;
}
.portfolio{
    max-width: 150px;
}
.more__info-items{
    gap: 20px;
}
.more__info-item{
font-size: 14px;
}
.user__pic{
    width: 20px;
    height: 20px;
}
.more__info{
    margin-left: -30px;
}
} 
@media (max-width:650.99px) {
    .contact__icons{
        display: none
    }
  
    .own_container{
        max-width: 450px;
    }
    .portfolio-title{
    font-size:20px;
    }
    .portfolio__pic{
       width: 30px;
       height: 30px; 
    }

.portfolio{
    max-width: 150px;
}
.more__info-items{
    gap: 10px;
}
.more__info-item{
font-size: 13px;
}
.hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 30px;
    height: 30px;
    position: relative;
}
.visuallyHidden {
    display: none;
}
.more__info-items{
    display: none;
}
.intro{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
} 
@media (max-width:560.99px) {
    .own_container{
        max-width: 360px;
    }

    .portfolio-title{
    font-size:22px;
    }
    .portfolio__pic{
       width: 27px;
       height: 27px; 
    }

.portfolio{
    max-width: 130px;
}
.more__info-items{
    gap: 8px;
}
.more__info-item{
font-size: 12px;
}
.hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 27px;
    height: 28px;
    position: relative;
}

.intro{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

} 
@media (max-width:436.99px) {
    .own_container{
        max-width: 310px;
    }

    .portfolio-title{
    font-size:20px;
    }
    .portfolio__pic{
       width: 25px;
       height: 25px; 
    }
.more__info-items-burger{
    gap: 8px;
    margin-bottom: 30px;
}
.more__info-item{
font-size: 12px;
}
}
@media (max-width:395.99px) {
    .own_container{
        max-width: 240px;
    }
}
@media (max-width:330.99px) {
    .own_container{
        max-width: 210px;
    }
}
</style>