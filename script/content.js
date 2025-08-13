const hContent = '<div class="contact-top">\
					<h1>Hi! I\'m <span style="color: rgb(63, 255, 127);">Patrick</span></h1>\
					<h2>Full-Stack Developer</h2>\
					<p style="color: rgb(65, 65, 65);">As a game and website developer and systems programmer, I am always ready to take on new challenges.</p>\
				</div>\
				<div class="contact-bottom"></div>';
const aContent = '';
const pContent = '';
const cContent = '<div class="contact-top">\
					<h2>Contact me!</h2>\
					<p>Looking for an ambitious and competent employee? Contact me..</p>\
				</div>\
				<div class="contact-bottom">\
					<div class="left-contact">\
						<div class="contact-item">\
							<div class="contact-icon">\
								<i class="fas fa-envelope"></i>\
							</div>\
							<div class="contact-details">\
								<h4>Email</h4>\
								<p>patrickrandri0@gmail.com</p>\
							</div>\
						</div>\
						<div class="contact-item">\
							<div class="contact-icon">\
								<i class="fa-brands fa-linkedin"></i>\
							</div>\
							<div class="contact-details">\
								<h4>Linkedin</h4>\
								<a href="https://www.linkedin.com/in/patrick-randriamanambola">Patrick Randriamanambola</a>\
							</div>\
						</div>\
						<div class="contact-item">\
							<div class="contact-icon">\
								<i class="fas fa-phone"></i>\
							</div>\
							<div class="contact-details">\
								<h4>Telephone</h4>\
								<p>+261 34 89 002 21</p>\
							</div>\
						</div>\
					</div>\
					<div style="margin: 0px 70px;"><h2>- OR - </h2></div>\
					<div class="right-contact">\
						<div class="input-item">\
							<label for="email"><i class="fa-solid fa-envelope"></i></label>\
							<input type="email" name="email" id="email" placeholder="your@mail.com">\
						</div>\
						<div class="input-item">\
							<label for="objet"><i class="fa-solid fa-clipboard-question"></i></label>\
							<input type="text" name="objet" id="objet" placeholder="Object: ...">\
						</div>\
						<div class="input-item text">\
							<textarea name="message" id="message" placeholder="your message ..."></textarea>\
						</div>\
					</div>\
				</div>';


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
