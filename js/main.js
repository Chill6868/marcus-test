const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav");
const burgerMenu = document.querySelector(".hamburger");
const burgerBars = document.querySelector(".hamburger-inner");
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

const navShadow = () => {
	if (scrollY >= 100 && innerWidth >= 992) {
		navDesktop.classList.add("navBg");
	} else {
		navDesktop.classList.remove("navBg");
	}
};

const burgerShadow = () => {
	if (scrollY >= 900) {
		burgerBars.classList.add("burger-black");
	} else {
		burgerBars.classList.remove("burger-black");
	}
};

document.addEventListener("scroll", navShadow);
document.addEventListener("scroll", burgerShadow);
burgerMenu.addEventListener("click", handleNav);

handleCurrentYear();
