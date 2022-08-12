const images = [
    {name: 'agua-de-coco', description: `<h1>Social Midia</h1>
    <p>Arte feita para postagem em redes sociais como forma de divulgação<p>`},
    {name: 'bebida', description: `<h1>Social Midia</h1>
    <p>Arte feita para postagem em redes sociais como forma de divulgação<p>`},
    {name: 'mapa', description: `<h1>Mapa de mudança de Localização</h1>
    <span>(Ilustrações por Freepik)</span>`},
    {name: 'mavis-avatar', description: 'descrição de mavis-avatar'},
    {name: 'musica', description: `<h1>Social Midia</h1>
    <p>Arte feita para postagem em redes sociais como forma de divulgação<p>`},
    {name: 'mae', description: 'descrição de mae'},
    {name: 'sherlock-holmes', description: `<h1>Criação de Capa de Livro para o conto 
    "A liga dos Cabeças Vermelhas"</h1> 
    <h2>Livro Virtual, jornal e tipografias by Freepik.</h1>`},
    {name: 'afrodite', description: `<h1>Afrodite</h1> 
    <h2>Projeto de ilustração inspirado na deusa Afrodite,Mitologia Grega.</h2> 
    <p>Afrodite, na mitologia grega, era a deusa da beleza e do amor. A ela os gregos iam pedir a sorte no amor, 
    os segredos do fascínio e a conservação da juventude. Na mitologia romana era chamada de Vênus. 
    A mitologia dá duas versões sobre o nascimento de Afrodite: segundo Hesíodo, na Teogonia, Cromos, o mais forte dos titãs, 
    filho de Urano, mutilou o pai e atirou ao mar seus órgãos reprodutores, e Afrodite teria brotado das espumas como uma flor. 
    Afrodite teria sido levada sobre as ondas por Zéfiro, um dos quatro ventos, até a ilha de Chipre, onde foi recolhida e 
    cuidada pelas Estações, que a levaram, depois, à assembleia dos deuses. Todos ficaram encantados com sua beleza e 
    desejaram-na para esposa. Para Homero, Afrodite seria filha de Dione, deusa das Ninfas, e Zeus, senhor dos homens, 
    vigilante da manutenção da ordem do universo e supremo mandatário dos deuses que habitavam o Olimpo, 
    o monte sagrado da Grécia.</p>`},
    {name: 'relogio', description: 'descrição de relogio'}
];

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
    // const sections = document.getElementsByTagName('section');
    // for(let i = 0; i < sections.length; i++){
    //     sections[i].classList.add('no-scroll');
    // }
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
    background.appendChild(modal);
    body.appendChild(background);
    body.classList.add('no-scroll');
    btnClose.addEventListener('click', closeModal);
}

function closeModal(e){
    const background = document.querySelector('.backModal');
    const body = document.querySelector('body');
    body.classList.remove('no-scroll');
    background.parentNode.removeChild(background);
    
}