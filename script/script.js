// let	createdWin = {}

// class win {
// 	_parent
// 	_instance
// 	_title
// 	_name
// 	_offset = {x:0, y:0}
// 	_isDragging = false
// 	constructor(name, parent){
// 		this._parent = parent;
// 		this._name = name;
// 		let content = `\
// 			<div class="head">\
// 				<div class="title title-${name}"><p>${name}</p></div>\
// 				<div class="close close-${name}" title="Fermer cette fenetre ?">\
// 					<i class="fa-solid fa-xmark"></i>\
// 				</div>\
// 			</div>\
// 			<div class="wbody"></div>`;
		
// 		this._instance = document.createElement("div");
// 		this._instance.classList.add('window');
// 		this._instance.classList.add(name);
// 		this._instance.innerHTML = content;
// 		parent.appendChild(this._instance);

// 		this._instance.style.zIndex = '30';
// 		this._title = document.querySelector(`.title-${name}`);

// 		let close = document.querySelector(`.close-${name}`);
// 		close.addEventListener('click', ()=>{
// 			delete createdWin[this._name];
// 			parent.removeChild(this._instance);
// 		});

// 		this._title.addEventListener("mousedown", (e)=>{
// 			this._isDragging = true;
// 			this._offset.x = e.clientX - this._instance.offsetLeft;
// 			this._offset.y = e.clientY - this._instance.offsetTop;
// 			document.body.style.userSelect = "none"; // évite de sélectionner du texte en même temps
// 			for (let n of Object.keys(createdWin)){
// 				createdWin[n].thisInstance().style.zIndex = '10';
// 			}
// 			this._instance.style.zIndex = '20';
// 		});

// 		document.addEventListener("mousemove", (e)=>{
// 			if (!this._isDragging) return;
// 			this._instance.style.left = (e.clientX - this._offset.x) + "px";
// 			this._instance.style.top = (e.clientY - this._offset.y) + "px";
// 		});

// 		document.addEventListener("mouseup", ()=>{
// 			this._isDragging = false;
// 			document.body.style.userSelect = ""; // réactive la sélection
// 		});
// 	}

// 	thisInstance(){
// 		return this._instance;
// 	}
// }



const container = document.querySelector('.container');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');


let addBtnEvent = (element, name, parent)=>{
	element.addEventListener('click', ()=>{
		if (!Object.keys(createdWin).includes(name)){
			createdWin[name]= new win(name, parent);
		}
	})
}

addBtnEvent(home, "Presentation", container);
addBtnEvent(about, "About", container);
addBtnEvent(project, "Projects", container);
addBtnEvent(contact, "Contact", container);
