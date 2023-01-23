$(function () {

	$('.hoverable').hover(function () {
		console.log("wow")
		$(this).parent().parent().children('img').css({ "filter": "brightness(50%)", "transition": "all 0.5s ease" })
	}, function () {
		$(this).parent().parent().children('img').css({ "filter": "brightness(100%)", "transition": "all 0.5s ease" })
	})
});
const hamburgerBtn = document.getElementById("js-hamburger");
const mMenuLink = document.getElementsByClassName("m-menu-link")
const mMenuLinks = Array.from(mMenuLink);
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");
const body = document.getElementById("body")

const mobileMenuToggle = () => {
	body.classList.toggle("body-hidden")
	topLine.classList.toggle("active");
	centerLine.classList.toggle("active");
	bottomLine.classList.toggle("active");
	nav.classList.toggle("show");
}
hamburgerBtn.addEventListener("click", () => {
	mobileMenuToggle()
});
mMenuLinks.map((link) => link.addEventListener("click", () => {
	mobileMenuToggle();
}))