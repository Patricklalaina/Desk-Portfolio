const win = document.querySelector('.window')
const titleBar = document.querySelector('.title')
const closeBtn = document.querySelector('.close')
const container = document.querySelector('.container')
let offsetX = 0;
let offsetY = 0;
let isDragging = false;

titleBar.addEventListener("mousedown", function (e) {
	isDragging = true;
	offsetX = e.clientX - win.offsetLeft;
	offsetY = e.clientY - win.offsetTop;
	document.body.style.userSelect = "none"; // évite de sélectionner du texte en même temps
});

document.addEventListener("mousemove", function (e) {
	if (!isDragging) return;

	win.style.left = (e.clientX - offsetX) + "px";
	win.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", function () {
	isDragging = false;
	document.body.style.userSelect = ""; // réactive la sélection
});

closeBtn.addEventListener("click", ()=>{
	container.removeChild(win)
})
