<template>
    <div class="contact__me-section container" id="contact">
<h1 class="contact_title">
    Contact
</h1>
<p class="contact__text">
Here you can send all your information and options you have <span>I will contact  shortly</span>
</p>

<form class="send__offer-form">
      <input type="text" name="name" v-model="name" placeholder="Enter you name..."/>
      <input type="email" name="email"  v-model="email" placeholder="Enter your email..."/>
      <input type="tel" name="number"  v-model="number" placeholder="Enter you phone number..."/>
      <input type="text" name="message" v-model="message" placeholder="Enter your message..." class="offer__area">
      <!-- <div class="text-div">
      <textarea cols="12" rows="3" ref="textarea" name="message" v-model="message" placeholder="Enter your message..." class="text__area"></textarea>
      </div> -->

      <button @click="submitForm" type="submit" class="submit__btn">Submit</button>
    </form>
    </div>
</template>

<script setup>
// web3forms
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = "a9968e35-5252-4084-80e6-77e2699725f9";

const name = ref('')
const email = ref('')
const number = ref('')
const message = ref('')

// const textarea = ref(null)
// textarea.value.style.width = '300px'

const submitForm = async () => {
    
    if (name.value.trim() === '' || email.value.trim() === '' || number.value.trim() === '' || message.value.trim() === '') {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

try {
    
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      number: number.value,
      message: message.value,
    }),
  });
  // нужно продумать функцию при которой мне не будут отпрвляться пустые инпуты
  const result = await response.json();
  if (result.success) {
    console.log(result);
    name.value= '',
 email.value = '',
number.value = '',
 message.value = ''
  } else {
    name.value= '',
 email.value = '',
number.value = '',
 message.value = ''
 alert('Error, please try again')
  } 
} catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again later.');
}

}



</script>

<style>
.text-div{
    width: 500px !important;
    overflow: hidden;
}
.send__offer-form{
    display: flex;
    flex-direction: column;
gap: 50px;
}
.send__offer-form input {
  width: 700px;
  height: 70px;
  font-family: 'Poppins';
  font-size: 18px;
  border: none;
  padding: 20px;
  outline: none;
  color: rgba(255, 255, 255, 0.856);
  background: transparent;
  border-inline-start: 5px solid transparent;
  border-block-end: 5px solid transparent;
  border-image-source: radial-gradient(at bottom left, 
    rgb(148, 93, 214), rgb(136, 226, 83),
    rgba(19, 173, 199), transparent 55%);
  border-image-slice: 1;
  animation: borderAnimation 10s ease-in-out infinite;
}

@keyframes borderAnimation {
  0% {
    border-image-source: radial-gradient(at bottom left, 
      rgb(148, 93, 214), rgb(136, 226, 83),
      rgba(19, 173, 199), transparent 55%);
  }
  25% {
    border-image-source: radial-gradient(at bottom right, 
      rgb(148, 93, 214), rgb(136, 226, 83),
      rgba(19, 173, 199), transparent 55%);
  }
  50% {
    border-image-source: radial-gradient(at top right, 
      rgb(148, 93, 214), rgb(136, 226, 83),
      rgba(19, 173, 199), transparent 55%);
  }
  75% {
    border-image-source: radial-gradient(at top left, 
      rgb(148, 93, 214), rgb(136, 226, 83),
      rgba(19, 173, 199), transparent 55%);
  }
  100% {
    border-image-source: radial-gradient(at bottom left, 
      rgb(148, 93, 214), rgb(136, 226, 83),
      rgba(19, 173, 199), transparent 55%);
  }
}

.submit__btn{
    background: transparent;
    border: none;
    outline: none;
    width: 250px;
    height: 100px;
    color: rgba(255, 255, 255, 0.856);
    font-family: 'Poppins';
    font-size: 50px;
    font-weight: 600;
    line-height: 45px;
    max-width: 790px;
    padding-top: 50px;
    margin: 0 auto;
    cursor: pointer;
}
.offer__area{
    min-height: 100px;
}
.contact__me-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contact_title{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 64px;
font-weight: 600;
line-height: 45px;
margin-top: 150px;
}
.contact__text{
    color: rgba(255, 255, 255, 0.856);
font-family: 'Poppins';
font-size: 25px;
font-weight: 600;
line-height: 45px;
max-width: 790px;
padding-top: 50px;
}
.contact__text span{
    display: flex;
   justify-content: center;
   padding-bottom: 75px;
}
@media (max-width:1399.99px) {
    .contact_title{
        font-size: 48px;
    }
    .contact__text{
        font-size: 23px;
    }
    .submit__btn{
        font-size: 40px;
    }
}


@media (max-width:1001.99px) {
    .contact_title{
        font-size: 40px;
    }
    .contact__text{
        font-size: 16px;
        padding-top: 10px;
    }
    .submit__btn{
        font-size: 35px;
    }
    .send__offer-form{
        display: flex;
        align-items: center;
        max-width: 550px;
    }
    .send__offer-form input {
        height: 50px;
        width: 550px;
        font-size: 14px;
    }
    .text__area{
width: 550px !important;
/* max-height: 250px; */
/* min-height: 140px; */
min-width: 700px;
font-family: 'Poppins';
font-size: 18px;
font-weight: 300; 
    }
}
@media (max-width:920.99px) {
    .contact_title{
        font-size: 36px;
    }
    
}

@media (max-width:800.99px) {
    .contact_title{
        font-size: 33px;
    }
    .contact__text{
        font-size: 12px;
        line-height: 18px;
        padding-top: 10px;
    }
    
    .submit__btn{
        font-size: 35px;
    }
    .send__offer-form{
        display: flex;
        align-items: center;
        max-width: 550px;
    }
    .send__offer-form input {
        height: 50px;
        width: 400px;
        font-size: 14px;
    }
    .text__area{
width: 550px !important;
/* max-height: 250px; */
/* min-height: 140px; */
min-width: 700px;
font-family: 'Poppins';
font-size: 18px;
font-weight: 300; 
    }
    .submit__btn{
        font-size: 33px;
    }
    .send__offer-form input{
   font-size: 12px;

}
} 
@media (max-width:650.99px) {
    .contact_title{
        font-size: 30px;
    }
    .contact__text{
        font-size: 10px;
        line-height: 18px;
        padding-top: 10px;
    }
    
    .submit__btn{
        font-size: 30px;
    }
    .send__offer-form{
        display: flex;
        align-items: center;
        max-width: 550px;
    }
    .send__offer-form input {
        height: 50px;
        width: 300px;
        font-size: 14px;
    }
    .text__area{
width: 550px !important;
/* max-height: 250px; */
/* min-height: 140px; */
min-width: 700px;
font-family: 'Poppins';
font-size: 18px;
font-weight: 300; 
    }
    .submit__btn{
        font-size: 30px;
    }
    .send__offer-form input{
   font-size: 11px;
}
} 
@media (max-width:436.99px) {
    .contact_title{
        font-size: 25px;
    }
    .send__offer-form input {
        height: 50px;
        width: 240px;
        font-size: 12px;
        border-inline-start: 3px solid transparent;
  border-block-end: 3px solid transparent;
    }
    
}
@media (max-width:395.99px) {
.contact__text{
    line-height: 20px;
}

}
@media (max-width:330.99px) {
    .send__offer-form input {
        height: 30px;
        width: 220px;
    }
  
}
</style>