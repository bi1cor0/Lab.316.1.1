
var mainEl = document.getElementsByTagName(`main`);
console.log(mainEl[0]);
let backColor = 
mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h>`;
mainEl[0].classList.add(`flex-ctr`);