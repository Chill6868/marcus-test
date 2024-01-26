const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav");
const burgerMenu = document.querySelector(".hamburger");
const navMobileItems = document.querySelectorAll(".nav-mobile__item");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	burgerMenu.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("nav-bar-active");
};

const removeBodyOverflow = () => {
	burgerMenu.classList.remove("is-active");
	navMobile.classList.remove("nav-mobile--active");
	document.body.classList.remove("nav-bar-active");
	navMobileItems.forEach((item) => {
		item.classList.remove("nav-mobile__item--active");
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

navMobileItems.forEach((item) => {
	item.addEventListener("click", () => {
		removeBodyOverflow();
	});
	burgerMenu.addEventListener("click", () => {
		item.classList.toggle("nav-mobile__item--active");
	});
});

burgerMenu.addEventListener("click", handleNav);

handleCurrentYear();
