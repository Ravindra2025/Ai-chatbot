// ==============================
// Select Elements
// ==============================

const hero = document.querySelector(".hero");
const chatSection = document.querySelector(".chat-section");

const input = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".send-btn");

const cards = document.querySelectorAll(".prompt-card");

// ==============================
// AI Replies
// ==============================

const replies = [

"Sure! I can help you with that. 😊",

"Let's build a professional website together.",

"I'll generate a clean HTML, CSS and JavaScript solution.",

"That's a great project idea 🚀",

"Here is the best approach for your request."

];

// ==============================
// Create Message
// ==============================

function addMessage(text,type){

const chat=document.createElement("div");

chat.className=`chat ${type}`;

if(type==="user"){

chat.innerHTML=`

<div class="chat-box">

<h4>You</h4>

<p>${text}</p>

<span>Now</span>

</div>

<img src="https://i.pravatar.cc/100?img=12">

`;

}else{

chat.innerHTML=`

<div class="chat-icon">

<i class="ri-sparkling-2-fill"></i>

</div>

<div class="chat-box">

<h4>AI Assistant</h4>

<p>${text}</p>

<span>Now</span>

</div>

`;

}

chatSection.appendChild(chat);

chatSection.scrollTop=chatSection.scrollHeight;

}

// ==============================
// Send Message
// ==============================

function sendMessage(){

const text=input.value.trim();

if(text==="") return;

// Hide Hero

hero.style.display="none";

// Show Chat

chatSection.style.display="flex";

// User Message

addMessage(text,"user");

input.value="";

// Typing...

setTimeout(()=>{

const reply=replies[Math.floor(Math.random()*replies.length)];

addMessage(reply,"ai");

},1000);

}

// ==============================
// Button Click
// ==============================

sendBtn.addEventListener("click",sendMessage);

// ==============================
// Enter Key
// ==============================

input.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});

// ==============================
// Suggestion Cards
// ==============================

cards.forEach(card=>{

card.addEventListener("click",()=>{

const title=card.querySelector("h3").innerText;

input.value=title;

sendMessage();

});

});

const themeBtn=document.querySelector(".theme-btn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

}