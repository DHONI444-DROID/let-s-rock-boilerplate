// Setting time interval
setInterval(checkBackground,200);

function checkBackground() {
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

// Generating random color
function generateRandomColor() {
return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

// Changing background color
function changeBackgroundColor() {
const colorBg = document.getElementById("color-overlay");
colorBg.style.backgroundColor=generateRandomColor();
}

// Changing background text
function changeBackgroundText() {
let textg = document.getElementById("text-bg");
if(textg.innerHTML=='LETS ROCK AND ROLL')
textg.innerHTML='ON THE FLOOR BABY';
if(textg.innerHTML=='ON THE FLOOR BABY')
textg.innerHTML='HIT IT HARD';
if(textg.innerHTML=='HIT IT HARD')
textg.innerHTML='ROCK THE PARTY BABY';
if(textg.innerHTML=='ROCK THE PARTY BABY')
textg.innerHTML='LETS ROCK AND ROLL';
}
// Setting time interval
setInterval(checkBackground,200);

function checkBackground() {
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

// Generating random color
function generateRandomColor() {
return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

// Changing background color
function changeBackgroundColor() {
const colorBg = document.getElementById("color-overlay");
colorBg.style.backgroundColor=generateRandomColor();
}

// Changing background text
function changeBackgroundText() {
let textbg = document.getElementById("text-bg");
if(textbg.innerHTML=='LETS ROCK AND ROLL')
textbg.innerHTML='ON THE FLOOR BABY';
else if(textbg.innerHTML=='ON THE FLOOR BABY')
textbg.innerHTML='HIT IT HARD';
else if(textbg.innerHTML=='HIT IT HARD')
textbg.innerHTML='ROCK THE PARTY BABY';
else if(textbg.innerHTML=='ROCK THE PARTY BABY')
textbg.innerHTML='LETS ROCK AND ROLL';
}
