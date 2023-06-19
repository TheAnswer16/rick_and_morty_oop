// Importação das duas classes utilizadas
import Personagem from './POO/Personagem.js';
import Retorno from './POO/Retorno.js'

// Definição da função principal do código, responsável pela requisição na The Rick And Morty API
// Nela utilizamos nossas classes para tratar os dados enviados e recebidos da API 
// Ela recebe o parâmetro page tendo em vista que os dados retornados pela API são paginados

function buscaPersonagens(page) {

  // Definição da URL base para a requisição
  const baseUrl = 'https://rickandmortyapi.com/api/character'

  // Instanciação do objeto payload, inicializado com um construtor padrão da classe Personagem
  const payload = new Personagem();

  //Atribuição do objeto payload utilizando os setters com os valores provenientes do HTML da tela
  payload.setNome = getInputValue('nome');
  payload.setStatus = getInputValue('status');
  payload.setEspecie = getInputValue('especie');
  payload.setTipo = getInputValue('tipo');
  payload.setGenero = getInputValue('genero');
  payload.setPage = page;

  //A função utilizada para realizar a requisição na API é nativa da linguagem e é chamada fetch
  // Ela recebe a baseUrl definida mais acima concatenada com a url de filtragem, que é alimentada com os valores do objeto payload
  // Aqui são utilizados os getters do objeto

  fetch(`${baseUrl}/?page=${payload.getPage}&name=${payload.getNome}&status=${payload.getStatus}&species=${payload.getEspecie}&type=${payload.getTipo}&gender=${payload.getGenero}`)
    .then(response => {

      if (response.ok) {
        return response.json();

      }

      throw new Error('Erro na solicitação');
    })
    .then(data => {
      // Se a requisição for realizada com sucesso, é instanciado o objeto Resposta da classe Retorno para receber os dados retornados da API
      // O objeto Resposta é instanciado utilizando seu construtor com parâmetros

      const Resposta = new Retorno("Sucesso", data["results"]);
      const container = document.querySelector('#personagens');

      // Aqui é realizada a chamada dos métodos da classe Retorno, sendo o clear utilizado para limpar a tela, e o show para inserir cada um dos personagens retornados pela API na tela
      Resposta.clear(container);
      Resposta.show(container);

      //Definição dos valores do botão de paginação
      setPagination(Number(page) - 1, Number(page) + 1, data["info"].pages, page);
    })
    .catch(error => {

      console.error(error);

      // Se por alguma razão, a requisição não ocorrer com sucesso, é instanciado um objeto da classe Retorno para tratar também os dados da falha
      //Aqui também é utilizado o construtor com parâmetros para inicializar o objeto
      const Resposta = new Retorno("Erro", "Erro ao buscar personagens");

    });
}

// Realiza a primeira requisição na API, sem filtros, com o carregamento da página
document.addEventListener("DOMContentLoaded", buscaPersonagens(1));

// Define a chamada da requisição também no botão do formulário, agora com os filtros do formuário alimentados
const serachButton = document.querySelector('#search');
serachButton.addEventListener('click', function(){
  buscaPersonagens(1);
})

// Define os botões de troca de página
const changePage = document.querySelectorAll('.change-page');

// Define as ações dos botões de troca de página
for (let cp of changePage) {
  cp.addEventListener('click', function(){
    let maxPage = Number(document.querySelector('#last-page').getAttribute('data-page'));
    const page = Number(this.getAttribute('data-page'));
    if (page != 0) {
      if (this.getAttribute('id') == 'next-page' && page > maxPage){
        return
      }
        buscaPersonagens(page)
    }
  })
}

//Função utilizada para atualizar os valores de cada botão de troca de página a cada requisição realizada na API
function setPagination(previousValue, nextValue, lastValue, currentValue) {

  const previousPage = document.querySelector('#previous-page');
  const nextPage = document.querySelector('#next-page');
  const lastPage = document.querySelector('#last-page');
  const currentPage = document.querySelector('#current-page');

  previousPage.setAttribute('data-page', previousValue);
  nextPage.setAttribute('data-page', nextValue);
  lastPage.setAttribute('data-page', lastValue);
  currentPage.textContent = currentValue;

}

//Função utilizada para pegar o conteúdo inserido em cada campo do formulário de filtro
function getInputValue(id) {
  return document.querySelector(`#${id}`).value;
}

