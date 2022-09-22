import { images } from './bancoImg.js'
const container = document.querySelector('#container-img');

export default function loadImg(){
    images.forEach(item => {
        const div = document.createElement('div');
        div.classList = 'img';
        div.style.backgroundImage = `url('./assets/img/${item.name}.png')`;
        container.appendChild(div);
        div.addEventListener('click', openModal);
    })
}


function openModal(e){
    const imgClicked = e.target.style.backgroundImage;
    const urlImg = imgClicked.slice(5, -2);
    const nameImg = urlImg.slice(13, -4);
    const background = document.createElement('div');
    const modal = document.createElement('div');
    const info = document.createElement('div');
    const areaImg = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img'); 
    const body = document.querySelector('body');
    const btnClose = document.createElement('span');
    let description;
    
    images.forEach(item => {
        if(item.name === nameImg){
            description = item.description;
            return;
        }
    })

    btnClose.classList = 'btn-close';
    btnClose.innerHTML = '<i class="fas fa-times"></i>';
    a.setAttribute('href', urlImg);
    a.setAttribute('target', 'blank');
    img.setAttribute('src', urlImg);
    //a.appendChild(img);
    background.classList = 'backModal';
    modal.classList = 'modal';
    info.classList = 'info';
    info.innerHTML = description;
    areaImg.classList = 'imgModal';
    img.onload = () => {
        if(img.clientWidth < 550 || img.clientHeight < 450){
            areaImg.classList.add('imgModal-small-img');
        }
        if(img.clientWidth > 620){
            areaImg.classList.add('imgModal-large-img');
        }
        if(window.innerWidth <= 850){
            areaImg.classList.add('imgModal-small-img');
        }
    };

    areaImg.appendChild(img);
    modal.appendChild(areaImg);
    modal.appendChild(info);
    modal.appendChild(btnClose);
    background.appendChild(modal);
    body.appendChild(background);
    body.classList.add('no-scroll');
    img.addEventListener('click', openImg);
    btnClose.addEventListener('click', closeModal);
}

function closeModal(){
    const background = document.querySelector('.backModal');
    const body = document.querySelector('body');
    body.classList.remove('no-scroll');
    background.parentNode.removeChild(background);
    
}

function openImg({ target }){
    const body = document.querySelector('body');
    const urlImg = target.getAttribute('src');
    const backImg = document.createElement('div');
    const containerImg = document.createElement('div');
    const btnClose = document.createElement('span');
    const img = document.createElement('div');
    btnClose.classList = 'btn-close-2';
    btnClose.innerHTML = '<i class="fas fa-times"></i>';
    img.classList = 'img-open';
    img.style.backgroundImage = `url('${urlImg}')`;
    backImg.classList = 'back-img';
    containerImg.classList = 'container-img-open';
    //img.setAttribute('src', urlImg);
    backImg.appendChild(btnClose);
    containerImg.appendChild(img);
    backImg.appendChild(containerImg);
    body.appendChild(backImg);
    btnClose.addEventListener('click', closeImg);
}

function closeImg(){
    const backImg = document.querySelector('.back-img');
    backImg.parentNode.removeChild(backImg);
}