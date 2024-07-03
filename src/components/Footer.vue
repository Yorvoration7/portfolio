<template>
    <div class="personal__info own_container">
<div class="personal__info-items">
    <p class="personal__info-item">Call me: <br>
+998 33-133-00-70</p>
    <p class="personal__info-item">Email: <br>
yorvoration7@gmail.com</p>
</div>
<div class="contact__icons-footer">
    <a href="https://github.com/Yorvoration7" target="_blank">
        <img src="../assets/icons/github.svg" alt="" class="icon__pic">
    </a>

    <a href="https://t.me/yorvoration7" target="_blank">
        <img src="../assets/icons/telegramm.webp" alt="" class="icon__pic">
    </a>

    <a href="" target="_blank">
        <img src="../assets/icons/whatsapp.svg" alt="" class="icon__pic">
    </a>
</div>
    </div>
</template>

<script setup>

</script>

<style>
.contact__icons-footer{
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: center;
}
.personal__info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
}
.personal__info-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
}
.personal__info-item{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 42px;
font-weight: 600;
line-height: 63px;

}
.icon__pic{
    width: 69px;
height: 67.3px;
}
@media (max-width:1649.99px) {
 
.personal__info-item{
    font-size: 38px;
}
.icon__pic{
    width: 55px;
    height: 57px;
}
}

@media (max-width:1399.99px) {
    .personal__info-item{
    font-size: 35px;
}
.icon__pic{
    width: 53px;
    height: 55px;
}
}

@media (max-width:1215px) {
    .personal__info-item{
    font-size: 25px;
}
.icon__pic{
    width: 35px;
    height: 35px;
}
}
@media (max-width:1001.99px) {
    .personal__info-item{
    font-size: 20px;
    max-height: 150px;
}
.icon__pic{
    width: 30px;
    height: 30px;
}
}
@media (max-width:920.99px) {
    .footer{
        margin-top: 150px;
    }
    .personal__info-item{
    font-size: 18px;
    max-height: 150px;
}
.icon__pic{
    width: 30px;
    height: 30px;
}
}
@media (max-width:800.99px) {
  .personal__info-items{
gap: 30px;

  }
  .personal__info-item{
    line-height: 22px;
  }
} 
@media (max-width:650.99px) {
    .personal__info-items{
gap: 20px;

  }
  .personal__info-item{
    line-height: 22px;
    font-size: 16px;
}
.personal__info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.contact__icons-footer{
    padding-top: 20px;
}
} 
@media (max-width:560.99px) {
.personal__info-items{
    display: flex;
    flex-direction: column;
    align-items: start;
}
.personal__info-item{
    line-height: 22px;
    font-size: 14px;
}
.icon__pic{
    width: 27px;
    height: 27px;
}
} 




</style>