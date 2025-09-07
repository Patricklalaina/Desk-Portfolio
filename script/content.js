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
const pContent = `<div class="left">
				<ul>
					<li class="active-fold"><i class="fas fa-angle-right"></i><i class="fas fa-folder"></i><p>Game Projects</p></li>
					<li><i class="fas fa-angle-right"></i><i class="fas fa-folder"></i><p>Web Projects</p></li>
					<li><i class="fas fa-angle-right"></i><i class="fas fa-folder"></i><p>Software Projects</p></li>
					<li><i class="fas fa-angle-right"></i><i class="fas fa-folder"></i><p>Data Projects</p></li>
				</ul>
			</div>
			<div class="right">
				<div class="project-container">
					<img src="assets/bg.png" alt="preview">
					<h1 class="title">Project Name</h1>
					<p class="description-projet">Lorem ipsum dolor sit ame.</p>
					<p class="link"><i class="fa fa-eye"></i>See project</p>
					<p class="list-project">C, C++</p>
				</div>
			</div>`;
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
								<p>patrickrandri0@gmail.com</p>
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


function checkContent(name){
	if (name == 'Presentation')
		return hContent;
	if (name == 'About')
		return aContent;
	if (name == 'Projects')
		return pContent;
	else
		return cContent;
}
