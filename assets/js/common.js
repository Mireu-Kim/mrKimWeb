document.addEventListener("DOMContentLoaded", function (){
	// 스크롤 여부에 따른 헤더 스타일 & 탑버튼 노출
	const topButton = document.querySelector(".btn_top");
	const pageHeader = document.querySelector("#header");

	window.addEventListener("scroll", function () {
		if (window.scrollY === 0) {
			topButton.style.display = "none";
			pageHeader.classList.remove("on");
		} else {
			topButton.style.display = "block";
			pageHeader.classList.add("on");
		}
	});


let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      el.classList.remove('up', 'down');
      el.classList.add(direction);

      lastScrollY = currentScrollY;
    } else {
      el.classList.remove('up', 'down');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.scroll-text').forEach(el => {
  observer.observe(el);
});
});


function scrollIntoStart(id) {
	const x = document.getElementById(id);
	x.scrollIntoView({ behavior: "smooth", block: "start" });
}


