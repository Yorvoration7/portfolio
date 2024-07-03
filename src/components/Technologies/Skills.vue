<template>
    <div class="my__skills">
<div class="skills-list container">
<ul class="exact__skills-list item1">
<a href="">
    <li class="skill__title">Teamwork</li>
</a>

<a href="">
    <li class="skill__title">Quick learning</li>
</a>

<a href="">
    <li class="skill__title">Creativity</li>
</a>



</ul>

<ul class="exact__skills-list item2">
<a href="">
    <li class="skill__title">Attentiveness</li>
</a>

<a href="">
    <li class="skill__title">Responsibility</li>
</a>





</ul>

<ul class="exact__skills-list item3">
<a href="">
    <li class="skill__title">C2 Russian</li>
</a>

<a href="">
    <li class="skill__title">C1 English</li>
</a>





</ul>
    
</div>
    </div>
</template>

<script setup>

</script>

<style>
.my__skills{
    padding-top: 80px;
    display: flex;
  margin-bottom: 300px;
}
.exact__skills-list{
    display: flex;
    flex-direction: column;

}
.skill__title{
    color: rgba(255, 255, 255, 0.924);
font-family: 'Poppins';
font-size: 36px;
font-weight: 600;
line-height: 54px;
list-style: inside;
}
.skills-list{
    display: flex;
justify-content: space-between;
}


@media (max-width:1649.99px) {
  
    .my__skills{
    
  margin-bottom: 200px;
}

}
@media (max-width:1399.99px) {
  .skill__title{
    font-size: 33px;
  }
}


@media (max-width:920.99px) {
.skill__title{
    font-size: 18px;
}
}



</style>