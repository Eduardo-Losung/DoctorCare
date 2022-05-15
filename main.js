window.addEventListener("scroll", onScroll);

function onScroll() {
	showNavOnScroll();
	showBackToButtonOnScroll();
	activateMenuAtCurrentSection(home);
	activateMenuAtCurrentSection(services);
	activateMenuAtCurrentSection(about);
	activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
	// Linha alvo
	const targetLine = scrollY + innerHeight / 2;
	// Topo da seção
	const sectionTop = section.offsetTop;
	// Altura da seção
	const sectionHeight = section.offsetHeight;
	// Término da seçao
	const sectionEndAt = sectionTop + sectionHeight;
	const sectionEndPassedTargetLine = sectionEndAt <= targetLine;
	// O topo da seção chegou ou ultrapasssou a linha alvo
	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
	// Limites da seção
	const sectionBoundaries =
		sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

	const sectionId = section.getAttribute("id");
	const menuElement = document.querySelector(
		`.menu-desktop li a[href*=${sectionId}]`
	);

	menuElement.classList.remove("active");
	if (sectionBoundaries) {
		menuElement.classList.add("active");
	}
}

function showNavOnScroll() {
	if (scrollY > 0) {
		navigation.classList.add("scroll");
	} else {
		navigation.classList.remove("scroll");
	}
}

function showBackToButtonOnScroll() {
	if (scrollY > 1400) {
		btnBackToTop.classList.add("show");
	} else {
		btnBackToTop.classList.remove("show");
	}
}

function openMenu() {
	document.body.classList.add("menu-expanded");
}

function closeMenu() {
	document.body.classList.remove("menu-expanded");
}

ScrollReveal({
	origin: `top`,
	distance: `3rem`,
	duration: 700,
}).reveal(`
  h1,
	h2,
  h3,
  h4,
  p,
  .btn-whatsapp,
  img,
  #services .card,
	#about,
	#about header,
	#about .content,
	#contact ul,
	footer a.logo,
	footer ul`);
