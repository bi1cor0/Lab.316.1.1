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
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
menuLinks.forEach((Link) => {
    let newLink = document.createElement(`a`)
    newLink.setAttribute(`href`, Link.href)
    newLink.textContent = Link.text
    topMenuEl.appendChild(newLink)
})

//Part 4
//Set up sub toolbar menu for a dropdown menu

var subMenuEl = document.getElementById(`sub-menu`);

subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'
subMenuEl.classList.add(`flex-around`);

//Part 5
//adding interactivity
var topMenuLinks = topMenuEl.getElementsByTagName(`a`)
function topGhost(event) {
  event.preventDefault();
  console.log(`hi`)
}

topMenuEl.addEventListener('hover', topGhost)