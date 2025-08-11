const container = document.querySelector('.container');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');

let addBtnEvent = (element, name, parent)=>{
	element.addEventListener('click', ()=>{
		if (!Object.keys(createdWin).includes(name)){
			createdWin[name]= new win(name, parent, element);
		}
		else if (createdWin[name].reduced()){
			createdWin[name].restore(); // Appelle la méthode restore
		}
	})
	// Ajoute aussi l’événement sur le marqueur coloré pour restaurer
	let marker = element.querySelector('div');
	marker.addEventListener('click', (e)=>{
		e.stopPropagation(); // Empêche le clic sur le dock de rouvrir
		if (Object.keys(createdWin).includes(name) && createdWin[name].reduced()){
			createdWin[name].restore();
		}
	});
}

addBtnEvent(home, "Presentation", container);
addBtnEvent(about, "About", container);
addBtnEvent(project, "Projects", container);
addBtnEvent(contact, "Contact", container);
