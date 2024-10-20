let adDisplayed = false;

function showAd() {
if (!adDisplayed) {
document.getElementById('overlay').style.display = 'block';
document.getElementById('adPopup').style.display = 'block';
adDisplayed = true;

setTimeout(() => {
if (adDisplayed) {
hideAd();
}
}, 20000); // 20 ثانیه
}
}

function hideAd() {
document.getElementById('overlay').style.display = 'none';
document.getElementById('adPopup').style.display = 'none';
adDisplayed = false;
}

document.getElementById('closeButton').onclick = function() {
hideAd();
}

window.onload = function() {
setTimeout(showAd, 5000); // 5 ثانیه
}