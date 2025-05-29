// document.addEventListener('DOMContentLoaded', () => {
//   const skillList = document.querySelector('.skill');
//   if (skillList) {
//     skillList.innerHTML += skillList.innerHTML;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
	const topButton = document.querySelector(".btn_top");

	window.addEventListener("scroll", function () {
		if (window.scrollY === 0) {
			topButton.style.display = "none";
		} else {
			topButton.style.display = "block";
		}
	});
});

function scrollIntoStart(id) {
	const x = document.getElementById(id);
	x.scrollIntoView({ behavior: "smooth", block: "start" });
}