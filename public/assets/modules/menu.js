const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const ul = document.querySelector('#menu > ul');
const li = ul.querySelectorAll('li');

export default function openMenu(){
    btnMenu.addEventListener('click', () => {
        console.log('clicked');
        const menuOpen = document.createElement('div');
        console.log(li);
        btnMenu.classList.add('animation-btn-menu');
        for(let i = 0; i < 2; i++){
            li[i].style.marginBottom = '10px';
        }
        ul.style.display = 'block';
        menuOpen.classList.add('.animation-menu-open');
        menuOpen.setAttribute('id', 'menu-open');
        menuOpen.appendChild(ul);
        menu.appendChild(menuOpen);
        
    });
}