
var mainEl = document.getElementsByTagName(`main`);
console.log(mainEl[0]);

mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h>`;
mainEl[0].classList.add(`flex-ctr`);

var topMenuEl = document.getElementById(`top-menu`)
console.log(topMenuEl);

topMenuEl.style.height = `100%`
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add(`flex-around`)