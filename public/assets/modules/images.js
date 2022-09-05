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
    btnClose.innerHTML = '<i class="fas fa-times"></i>'; //
    a.setAttribute('href', urlImg);
    a.setAttribute('target', 'blank');
    img.setAttribute('src', urlImg);
    a.appendChild(img);
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

    areaImg.appendChild(a);
    modal.appendChild(areaImg);
    modal.appendChild(info);
    modal.appendChild(btnClose);
    background.appendChild(modal);
    body.appendChild(background);
    body.classList.add('no-scroll');
    btnClose.addEventListener('click', closeModal);
}

function closeModal(){ //se der erro colocar o 'e'
    const background = document.querySelector('.backModal');
    const body = document.querySelector('body');
    body.classList.remove('no-scroll');
    background.parentNode.removeChild(background);
    
}