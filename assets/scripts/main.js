import Images from './function.js';
const container = document.querySelector('#container-img');

function loadImg(){
    Images.forEach(item => {
        const div = document.createElement('div');
        div.classList = 'img';
        div.style.backgroundImage = `url('./assets/img/${item.name}.png')`;
        container.appendChild(div);
        div.addEventListener('click', openImgInfo);
    })
}


function openImgInfo(e){
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
    
    Images.forEach(item => {
        if(item.name === nameImg){
            description = item.description;
            return;
        }
    })

    btnClose.classList = 'btn-close';
    btnClose.innerHTML = '<i class="fas fa-times"></i>';
    a.setAttribute('href', urlImg);
    img.setAttribute('src', urlImg);
    a.appendChild(img);
    background.classList = 'backModal';
    modal.classList = 'modal';
    info.classList = 'info';
    info.innerHTML = description;
    areaImg.classList = 'imgModal';
    areaImg.appendChild(a);
    modal.appendChild(areaImg);
    modal.appendChild(info);
    modal.appendChild(btnClose);
    console.log(btnClose.parentNode);
    background.appendChild(modal);
    body.appendChild(background);
    btnClose.addEventListener('click', closeImgInfo);
}

function closeImgInfo(e){
    const background = document.querySelector('.backModal');
    background.parentNode.removeChild(background);
}


loadImg();