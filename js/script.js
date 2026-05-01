const urlApi = 'https://apisimpsons.fly.dev/api/personajes?page=';
var paginaAtual = 0;

// Controla a numeração de páginas no html
function atualizarNumeroPaginas () {
    let contador = document.getElementById("pNumeroPaginas");
    contador.innerText = paginaAtual + " de 136"
}

function urlProximaPagina() {
    paginaAtual ++;
    atualizarNumeroPaginas()
    return urlApi + paginaAtual;
}

function urlPaginaAnterior() {
    paginaAtual--;
    atualizarNumeroPaginas()
    return urlApi + paginaAtual;
}

async function pegarPaginaPersonagens(url){

    // Faz a requisição para a API e retorna os dados dos personagens
    let resposta = await fetch(url);
    let dados = await resposta.json();

    // pega o elemento que contem os cards
    let divCards = document.getElementById('divCards');
    // Limpa todos os cards para receber os próximos
    divCards.innerHTML = ""

    return dados.docs;
}

function inserirPersonagem(JsonPersonagem) {

    // pega o elemento onde os cards serão inseridos
    let divCards = document.getElementById('divCards');

    // Adiciona elementos dentro do card
    let divCard = document.createElement('div');
    let h3Card = document.createElement('h3');
    let divCardImage = document.createElement('div');
    let pCard = document.createElement('p');

    // Adiciona as classes CSS aos elementos
    divCard.classList.add('divCard');
    h3Card.classList.add('h3Card');
    divCardImage.classList.add('divCardImage');
    pCard.classList.add('pCard');

    // Adiciona o conteúdo aos elementos
    h3Card.textContent = JsonPersonagem.Nombre;
    divCardImage.style.backgroundImage = `url(${JsonPersonagem.Imagen})`;
    pCard.textContent = JsonPersonagem.Historia;

    // Adiciona os Cards
    divCards.appendChild(divCard);
    divCard.appendChild(h3Card);
    divCard.appendChild(divCardImage);
    divCard.appendChild(pCard);
}

async function criarCardsPersonagens(url) {

    // Manda cada personagem do Json para ser inserido no HTMl
    let personagens = await pegarPaginaPersonagens(url);
    personagens.forEach(personagem => {
        inserirPersonagem(personagem);
    });
}

// -------------------------------- Botões

const btnProximaPagina = document.getElementById('btnPaginaProxima');
const btnPaginaAnterior = document.getElementById('btnPaginaAnterior');

// Funções dos botões
btnProximaPagina.addEventListener('click', function() {
    if (paginaAtual < 136) {
        criarCardsPersonagens(urlProximaPagina());
    }
});

btnPaginaAnterior.addEventListener('click', function() {
    if (paginaAtual > 1) {
        criarCardsPersonagens(urlPaginaAnterior());
    }
});


// Ao carregar a página
window.addEventListener('load', function() {
    criarCardsPersonagens(urlProximaPagina());
});