// SPLASH
document.getElementById("enterBtn").onclick = function(){
document.getElementById("splash").style.display="none";
document.getElementById("mainSite").classList.remove("hidden");
};

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#00f0ff";
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.x+=p.dx;
p.y+=p.dy;
});
requestAnimationFrame(animate);
}
animate();

// CHATBOT
const btn=document.getElementById("chatbotBtn");
const bot=document.getElementById("chatbot");
const messages=document.getElementById("chatMessages");

btn.onclick=function(){
bot.style.display=bot.style.display==="flex"?"none":"flex";
};

function addMsg(text){
let div=document.createElement("div");
div.style.margin="10px 0";
div.innerText=text;
messages.appendChild(div);
}

addMsg("👋 Hi, I'm Haron AI.");
addMsg("Ask me about Haroun or his social links.");
