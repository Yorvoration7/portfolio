<template>
       <h1 class="projects__title own_container">
            Projects
        </h1>

    <div class="my__projects-section container" id="myprojects">
       
<div class="project__1">
<ProjectItemfirst/>
</div>

<div class="project__2">
    <ProjectItemSecond/>
</div>
    </div>
</template>

<script setup>
import ProjectItemfirst from "./ProjectItemfirst.vue";
import ProjectItemSecond from "./ProjectItemSecond.vue";
</script>

<style>
.my__projects-section{
    display: flex;
    flex-direction: column;
}
.projects__title{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 64px;
font-weight: 600;
line-height: 96px;
padding-top: 200px;
padding-bottom: 97px;
}
.project__2{
    margin-top: 97px;
}
@media (max-width:1649.99px) {
  .projects__title{
    font-size: 54px;
    padding-top: 150px;
    
  }
}
@media (max-width:1399.99px) {
    .projects__title{
    font-size: 48px;
  }
}
@media (max-width:1215.99px) {
    .projects__title{
    font-size: 43px;
  }
}
@media (max-width:1001.99px) {
    .projects__title{
    font-size: 40px;
  }
}
@media (max-width:920.99px) {
  .projects__title{
    font-size: 36px;
  }
  /* .line{
    max-width: 100px;
  } */
}
@media (max-width:800.99px) {
  .projects__title{
    font-size: 33px;
  }

} 
@media (max-width:650.99px) {
  .projects__title{
    font-size: 30px;
  }
  .project__2{
    margin-top: 30px;
}   
   } 
   @media (max-width:560.99px) {
    .projects__title{
    font-size: 25px;
    padding-top: 100px;
  }
  .project__2{
    margin-top: 25px;
}   
} 
@media (max-width:436.99px) {
  .projects__title{
    font-size: 23px;
    padding-top: 80px;
  }
}
</style>