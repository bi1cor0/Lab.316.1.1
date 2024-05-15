//Part 1
var mainEl = document.getElementsByTagName(`main`);
console.log(mainEl[0]);

mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h>`;
mainEl[0].classList.add(`flex-ctr`);

//Part 2
var topMenuEl = document.getElementById(`top-menu`)
console.log(topMenuEl);

topMenuEl.style.height = `100%`
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add(`flex-around`)

//Part 3
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
menuLinks.forEach((Link) => {
    let newLink = document.createElement(`a`)
    newLink.setAttribute(`href`, Link.href)
    newLink.textContent = Link.text
    topMenuEl.appendChild(newLink)
})