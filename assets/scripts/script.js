let imgName = [
    'agua-de-coco',
    'bebida',
    'mapa',
    'mavis-avatar',
    'musica',
    'mae',
    'sherlock-holmes',
    'afrodite',
    'relogio'
]

const container = document.querySelector('#container-img');

function loadImg(){
    imgName.forEach(item => {
        const div = document.createElement('div');
        // const img = document.createElement('img');
        // const a = document.createElement('a');
    
        //div.classList = 'img';
        // a.setAttribute('href', `./assets/img/${item}.png`);
        // img.setAttribute('src', `./assets/img/${item}.png`);
        // a.appendChild(img);
        // div.appendChild(a);
        div.classList = 'img';
        div.style.backgroundImage = `url('./assets/img/${item}.png')`;
        container.appendChild(div);
        div.addEventListener('click', openImgInfo);
    })
}

function openImgInfo(e){
    const imgClicked = e.target.style.backgroundImage;
    const urlImg = imgClicked.slice(5, -2);
    const background = document.createElement('div');
    const modal = document.createElement('div');
    const info = document.createElement('div');
    const areaImg = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const body = document.querySelector('body');

    a.setAttribute('href', urlImg);
    img.setAttribute('src', urlImg);
    a.appendChild(img);
    background.classList = 'backModal';
    modal.classList = 'modal';
    info.innerHTML = '<h1>Afrodite</h1> <h2>Projeto de ilustração inspirado na deusa Afrodite,Mitologia Grega.</h2> <p>Afrodite, na mitologia grega, era a deusa da beleza e do amor. A ela os gregos iam pedir a sorte no amor, os segredos do fascínio e a conservação da juventude. Na mitologia romana era chamada de Vênus. A mitologia dá duas versões sobre o nascimento de Afrodite: segundo Hesíodo, na Teogonia, Cromos, o mais forte dos titãs, filho de Urano, mutilou o pai e atirou ao mar seus órgãos reprodutores, e Afrodite teria brotado das espumas como uma flor. Afrodite teria sido levada sobre as ondas por Zéfiro, um dos quatro ventos, até a ilha de Chipre, onde foi recolhida e cuidada pelas Estações, que a levaram, depois, à assembleia dos deuses. Todos ficaram encantados com sua beleza e desejaram-na para esposa. Para Homero, Afrodite seria filha de Dione, deusa das Ninfas, e Zeus, senhor dos homens, vigilante da manutenção da ordem do universo e supremo mandatário dos deuses que habitavam o Olimpo, o monte sagrado da Grécia.</p>';
    areaImg.classList = 'imgModal';
    areaImg.appendChild(a);
    modal.appendChild(areaImg);
    modal.appendChild(info);
    background.appendChild(modal);
    body.appendChild(background);
}


loadImg();