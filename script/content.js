const hContent = `<div class="presentation-top">
					<h1>Hi! I'm <span style="color: rgb(63, 255, 127);">Patrick</span></h1>
					<h2>FullStack Developer</h2>
					<ul>
						<li>
							<div>
								<i class="fas fa-gamepad"></i>
							</div>
							<p>Game Developer</p>
						</li>
						<li>
							<div>
								<i class="fas fa-globe"></i>
							</div>
							<p>Web Developer</p>
						</li>
						<li>
							<div>
								<i class="fas fa-computer"></i>
							</div>
							<p>Desktop Developer</p>
						</li>
						<li>
							<div>
								<i class="fas fa-chart-simple"></i>
							</div>
							<p>Data Analyst</p>
						</li>
					</ul>
				</div>`;

const aContent = '';

const API_URL = 'https://starfish123.pythonanywhere.com/api/projects/';

// Variable pour stocker les projets récupérés
let projectsData = [];

// Fonction pour récupérer les projets depuis le backend
async function fetchProjects() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		projectsData = data;
		console.log('Projets récupérés:', projectsData);
		return data;
	} catch (error) {
		console.error('Erreur lors de la récupération des projets:', error);
		return [];
	}
}

// Fonction pour générer le HTML d'un projet
function generateProjectHTML(project) {
	// Joindre les langages en une chaîne séparée par des virgules
	const langages = Array.isArray(project.langages) 
		? project.langages.join(', ') 
		: project.langages || 'N/A';
	
	
	return `
		<div class="project-container">
			<img src="${project.img}" alt="${project.title || 'preview'}" onerror="this.src='assets/bg.png'">
			<h1 class="title">${project.title || 'Project Name'}</h1>
			<p class="description-projet">${project.description || 'No description available.'}</p>
			${project.url ? `<p class="link"><i class="fa fa-eye"></i><a href="${project.url}" target="_blank">Voir le projet</a></p>` : ''}
			<p class="list-project">${langages}</p>
		</div>
	`;
}

// Fonction pour générer le contenu des projets par catégorie
async function generateProjectsByCategory(category) {
	// Charger les projets si ce n'est pas déjà fait
	if (projectsData.length === 0) {
		await fetchProjects();
	}
	
	// Filtrer les projets selon la catégorie
	const filteredProjects = projectsData.filter(project => {
		// Normaliser la catégorie pour la comparaison (lowercase et trim)
		const projectCategory = project.category ? project.category.toLowerCase().trim() : '';
		const searchCategory = category.toLowerCase().trim();
		
		return projectCategory === searchCategory;
	});
	
	console.log(`Projets filtrés pour la catégorie "${category}":`, filteredProjects);
	
	if (filteredProjects.length === 0) {
		return '<p style="text-align:center; padding: 20px; color: #888;">Aucun projet dans cette catégorie pour le moment.</p>';
	}
	
	return filteredProjects.map(project => generateProjectHTML(project)).join('');
}

// Fonction pour générer le contenu complet de la section projets
async function generateProjectsContent() {
	// Charger les projets si ce n'est pas déjà fait
	if (projectsData.length === 0) {
		await fetchProjects();
	}

	return `<div class="left">
				<ul>
					<li class="active-fold" data-category="game">
						<i class="fas fa-angle-right"></i>
						<i class="fas fa-folder"></i>
						<p>Game Projects</p>
					</li>
					<li data-category="web">
						<i class="fas fa-angle-right"></i>
						<i class="fas fa-folder"></i>
						<p>Web Projects</p>
					</li>
					<li data-category="desktop">
						<i class="fas fa-angle-right"></i>
						<i class="fas fa-folder"></i>
						<p>Desktop Projects</p>
					</li>
					<li data-category="data">
						<i class="fas fa-angle-right"></i>
						<i class="fas fa-folder"></i>
						<p>Data Projects</p>
					</li>
				</ul>
			</div>
			<div class="right">
				${await generateProjectsByCategory('game')}
			</div>`;
}

const cContent = `<div class="contact-top">
					<h2>Contact me!</h2>
					<p>Looking for an ambitious and competent employee? Contact me..</p>
				</div>
				<div class="contact-bottom">
					<div class="left-contact">
						<div class="contact-item">
							<div class="contact-icon">
								<i class="fas fa-envelope"></i>
							</div>
							<div class="contact-details">
								<h4>Email</h4>
								<p>patrickrandriamanambola@gmail.com</p>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">
								<i class="fa-brands fa-linkedin"></i>
							</div>
							<div class="contact-details">
								<h4>Linkedin</h4>
								<a href="https://www.linkedin.com/in/patrick-randriamanambola">Patrick Randriamanambola</a>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">
								<i class="fas fa-phone"></i>
							</div>
							<div class="contact-details">
								<h4>Telephone</h4>
								<p>+261 34 89 002 21</p>
							</div>
						</div>
					</div>
					<div style="width: 15%;margin: 10px;text-align: center;"><h3>- OR - </h3></div>
					<div class="right-contact">
						<form>
							<input type="email" name="email" id="email" placeholder="your@mail.com">
							<input type="text" name="objet" id="objet" placeholder="Object: ...">
							<textarea name="message" id="message" placeholder="your message ..."></textarea>
							<input type="submit" value="Submit">
						</form>
					</div>
				</div>`;

async function checkContent(name){
	if (name == 'Presentation')
		return hContent;
	if (name == 'About')
		return aContent;
	if (name == 'Projects')
		return await generateProjectsContent();
	else
		return cContent;
}

// Initialiser le chargement des projets au démarrage
fetchProjects();
