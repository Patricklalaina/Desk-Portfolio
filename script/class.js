const createdWin = {};

class win{
	_parent
	_instance
	_title
	_name
	_offset = {x:0, y:0}
	_isDragging = false
	_reduced = false
	_creator
	_position
	_content
	constructor(name, parent, creator){
		this._parent = parent;
		this._name = name;
		this._creator = creator;
		let content = `\
			<div class="head head-${name}">\
				<div class="title title-${name}"><p>${name}</p></div>\
				<div class="btn-win">\
					<div class="reduce reduce-${name}"><i class="fa-solid fa-down-left-and-up-right-to-center"></i></div>
					<div class="close close-${name}" title="Fermer cette fenetre ?">\
						<i class="fa-solid fa-xmark"></i>\
					</div>\
				</div>
			</div>\
			<div class="wbody wbody-${name}"></div>`;

		this._instance = document.createElement("div");
		this._instance.classList.add('window');
		this._instance.classList.add(name);
		this._instance.innerHTML = content;
		parent.appendChild(this._instance);
		const r = this._instance.getBoundingClientRect();
		this._position = {x: r.left, y: r.top}
		this._instance.style.zIndex = '30';
		this._title = document.querySelector(`.head-${name}`);
		this._content = document.querySelector(`.wbody-${name}`);
		
		// Charger le contenu de manière asynchrone
		this.loadContent(name);
		
		let close = document.querySelector(`.close-${name}`);
		let reduce = document.querySelector(`.reduce-${name}`);
		reduce.addEventListener('click', ()=>{
			const rp = creator.getBoundingClientRect();
			const centerThis =  { x: r.left + r.width/2, y: r.top + r.height/2 };
			const dockIcon = {x: rp.left + rp.width / 2, y: rp.top + rp.height/2};
			const centerTranslate = {};
			centerTranslate.x = (dockIcon.x - centerThis.x);
			centerTranslate.y = (dockIcon.y - centerThis.y);
			this._reduced = true;
			this._instance.style.setProperty('--centerX', centerTranslate.x + 'px');
			this._instance.style.setProperty('--centerY', centerTranslate.y + 'px');
			this._instance.classList.add('hide-win');
			creator.querySelector('div').classList.remove('hide');
		});
		close.addEventListener('click', ()=>{
			delete createdWin[this._name];
			parent.removeChild(this._instance);
		});

		this._title.addEventListener("mousedown", (e)=>{
			this._isDragging = true;
			this._offset.x = e.clientX - this._instance.offsetLeft;
			this._offset.y = e.clientY - this._instance.offsetTop;
			document.body.style.userSelect = "none";
			for (let n of Object.keys(createdWin)){
				createdWin[n].thisInstance().style.zIndex = '10';
			}
			this._instance.style.zIndex = '20';
		});

		document.addEventListener("mousemove", (e)=>{
			if (!this._isDragging) return;
			this._instance.style.left = (e.clientX - this._offset.x) + "px";
			this._instance.style.top = (e.clientY - this._offset.y) + "px";
		});

		document.addEventListener("mouseup", ()=>{
			this._isDragging = false;
			document.body.style.userSelect = "";
		});
	}

	// Nouvelle méthode asynchrone pour charger le contenu
	async loadContent(name) {
		const content = await checkContent(name);
		this._content.innerHTML = content;
		
		// Si c'est la page Projects, ajouter les événements pour filtrer par catégorie
		if (name === 'Projects') {
			this.setupProjectFilters();
		}
	}

	// Méthode pour gérer les filtres de projets par catégorie
	setupProjectFilters() {
		const categoryItems = this._content.querySelectorAll('.left ul li');
		categoryItems.forEach(item => {
			item.addEventListener('click', async () => {
				// Retirer la classe active de tous les éléments
				categoryItems.forEach(li => li.classList.remove('active-fold'));
				// Ajouter la classe active à l'élément cliqué
				item.classList.add('active-fold');
				
				// Récupérer la catégorie depuis l'attribut data-category
				const category = item.getAttribute('data-category');
				
				console.log('Catégorie sélectionnée:', category);
				
				// Filtrer les projets
				const rightDiv = this._content.querySelector('.right');
				if (rightDiv && category) {
					// Afficher un message de chargement
					rightDiv.innerHTML = '<p style="text-align:center; padding: 20px;">Chargement...</p>';
					
					// Générer et afficher les projets filtrés
					const projectsHTML = await generateProjectsByCategory(category);
					rightDiv.innerHTML = projectsHTML;
				}
			});
		});
	}

	thisInstance(){
		return this._instance;
	}

	reduced(){
		return this._reduced;
	}
	
	position(){
		return this._position;
	}
	
	restore() {
		if (!this._reduced) return;
		this._instance.classList.remove('hide-win');
		this._instance.classList.add('restore-win');
		this._creator.querySelector('div').classList.add('hide');
		this._reduced = false;
		this._instance.addEventListener('animationend', () => {
			this._instance.classList.remove('restore-win');
		}, { once: true });
	}

	getContent(content){
		this._content.innerHTML = content;
	}
}