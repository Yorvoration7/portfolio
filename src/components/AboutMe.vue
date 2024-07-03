<template >
    <h1 class="about__me-title own_container">
        <a href="" class="about__me-title">
About me 
</a>
    </h1>
    
    <div class="about__me-text container">
        
        <p class="about__me-text-item-title">
            Hello! I'm Tony Bentony, and I'm a Front-End Developer with a year of practical programming experience.
</p>
<ul class="about__me-text-items">
<p class="about__me-text-item-long">
    My key qualities:

Commitment to continuous development: I always strive to improve my skills and stay up to date with the latest trends in the field of Front-End development. Over the past year I have paid special attention to learning programming languages   like Html, Css, Scss, JavaScript, and framework like Vue JS.
</p>
<p class="about__me-text-item-short">
    I strive for further development in the field of Front-End development. I am interested in new opportunities and ready to contribute to your team.
</p>
</ul>
<p class="about__me-text-item">
    Thank you for your time and I look forward to discussing our collaboration!
</p>
    </div>
</template>

<script setup>

</script>

<style>
.about__me-title{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 64px;
font-weight: 600;
line-height: 96px;
line-height: 45px;
padding-top: 50px;
overflow: hidden;
/* animation: 
typing 2s ,
cursor .4s step-end forwards alternate; */
}
.about__me-text{
display: flex;
flex-direction: column;
padding-top: 87px;
}
.about__me-text-items{
    display: flex;
    justify-content: space-between;
    gap: 100px;
    padding-top: 35px;
}
.about__me-text-item-long{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 28px;
font-weight: 600;
max-width: 640px;
max-height: 250px;
width: 100%;
padding-bottom: 35px;
}
.about__me-text {
    gap: 50px;
}

.about__me-text-item-short{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 28px;
font-weight: 600;
max-width: 450px;

}
.about__me-text-item{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 28px;
font-weight: 600;
line-height: 42px;
max-height: 42px;
max-width: 1330px;

padding-top: 50px;
/* -webkit-box-reflect: below 1px linear-gradient(transparent,#0008); */
outline: none;

}
.about__me-text-item-title{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 28px;
font-weight: 600;
line-height: 42px;
max-height: 42px;

/* max-width: 1330px; */

}

@media (max-width:1649.99px) {
    .about__me-title{
        font-size: 54px;
    }
   

}
@media (max-width:1399.99px) {
    .about__me-title{
        font-size: 48px;
    }
    .about__me-text-item{
        padding-top: 150px;
    }
}




@media (max-width:1215px) {
    .about__me-title{
        font-size: 48px;
    }
    .about__me-text-item{
        padding-top: 150px;
    }
    .about__me-text-item-long{
        font-size: 24px;
    }
    .about__me-text-item-short{
        max-width: 350px;
        font-size: 24px;

    }
}
@media (max-width:1001.99px) {
    .about__me-title{
        font-size: 40px;
    }
    .about__me-text-item{
        padding-top: 50px;
    }
    .about__me-text-item-long{
        font-size: 20px;
    }
    .about__me-text-item-short{
        max-width: 250px;
        
        font-size: 20px;

    }
}
@media (max-width:920.99px) {
    .about__me-text-item-title{
        font-size: 20px;
    }
    .about__me-title{
        font-size: 36px;
    }
    .about__me-text-items{
        padding-top: 50px;
        gap: 25px;
    }
    .about__me-text-item{
        padding-top: 50px;
    }
    .about__me-text-item-long{
        font-size: 16px;
    }
    .about__me-text-item-short{
        max-width: 250px;
        
        font-size: 16px;

    }
    .about__me-text-item{
        font-size: 16px;

    }
}

@media (max-width:800.99px) {
    .about__me-text-item-title{
        font-size: 16px;
        line-height: 20px;
    }
    .about__me-title{
        font-size: 33px;
    }
    .about__me-text-items{
        display: flex;
        justify-content: center ;
        flex-direction: column;
        padding-top: 20px;
    }
    .about__me-text-item{
        padding-top: 50px;
    }
    .about__me-text-item-long{
        font-size: 14px;
    }
    .about__me-text-item-short{
        max-width: 250px;
        font-size: 14px;
padding-top: -25px;
    }
    .about__me-text-item{
        font-size: 16px;
line-height: 25px;
margin-top: -20px;
}
    .about__me-text{
        gap: 20px;
    }
} 
@media (max-width:560.99px) {
    .about__me-text-item-title{
        font-size: 14px;
        line-height: 20px;
    }
    .about__me-title{
        font-size: 25px;
    }
    .about__me-text-items{
        display: flex;
        justify-content: center ;
        flex-direction: column;
        padding-top: 20px;
    }
    .about__me-text-item{
        padding-top: 50px;
    }
    .about__me-text-item-long{
        font-size: 13px;
    }
    .about__me-text-item-short{
        max-width: 250px;
        font-size: 13px;
margin-top: -25px;
    }
    .about__me-text-item{
        font-size: 14px;
line-height: 25px;
margin-top: -35px;
}
    .about__me-text{
        gap: 20px;
        padding-top: 60px;
    }
}
</style>