let imagens = [
    {name: 'agua-de-coco', description: 'descrição de agua de coco'},
    {name: 'bebida', description: 'descrição de bebida'},
    {name: 'mapa', description: 'descrição de mapa'},
    {name: 'mavis-avatar', description: 'descrição de mavis-avatar'},
    {name: 'musica', description: 'descrição de musica'},
    {name: 'mae', description: 'descrição de mae'},
    {name: 'sherlock-holmes', description: 'descrição de sherlock'},
    {name: 'afrodite', description: '<h1>Afrodite</h1> <h2>Projeto de ilustração inspirado na deusa Afrodite,Mitologia Grega.</h2> <p>Afrodite, na mitologia grega, era a deusa da beleza e do amor. A ela os gregos iam pedir a sorte no amor, os segredos do fascínio e a conservação da juventude. Na mitologia romana era chamada de Vênus. A mitologia dá duas versões sobre o nascimento de Afrodite: segundo Hesíodo, na Teogonia, Cromos, o mais forte dos titãs, filho de Urano, mutilou o pai e atirou ao mar seus órgãos reprodutores, e Afrodite teria brotado das espumas como uma flor. Afrodite teria sido levada sobre as ondas por Zéfiro, um dos quatro ventos, até a ilha de Chipre, onde foi recolhida e cuidada pelas Estações, que a levaram, depois, à assembleia dos deuses. Todos ficaram encantados com sua beleza e desejaram-na para esposa. Para Homero, Afrodite seria filha de Dione, deusa das Ninfas, e Zeus, senhor dos homens, vigilante da manutenção da ordem do universo e supremo mandatário dos deuses que habitavam o Olimpo, o monte sagrado da Grécia.</p>'},
    {name: 'relogio', description: 'descrição de relogio'}
]

const container = document.querySelector('#container-img');

function loadImg(){
    imagens.forEach(item => {
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
    const btnClose = document.createElement('button');
    let description;
    
    imagens.forEach(item => {
        if(item.name === nameImg){
            description = item.description;
            return;
        }
    })

    btnClose.classList = 'btn-close';
    btnClose.innerHTML = 'X';
    btnClose.addEventListener('click', closeImgInfo);
    a.setAttribute('href', urlImg);
    img.setAttribute('src', urlImg);
    a.appendChild(img);
    background.classList = 'backModal';
    modal.classList = 'modal';
    info.innerHTML = description;
    areaImg.classList = 'imgModal';
    areaImg.appendChild(a);
    modal.appendChild(areaImg);
    modal.appendChild(info);
    background.appendChild(modal);
    background.appendChild(btnClose);
    body.appendChild(background);
}

function closeImgInfo(e){
    const background = document.querySelector('.backModal');
    background.parentNode.removeChild(background);
}


loadImg();