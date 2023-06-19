import Personagem from './POO/Personagem.js';
import Retorno from './POO/Retorno.js'

function buscaPersonagens(page) {

  limpaTela();

  const baseUrl = 'https://rickandmortyapi.com/api/character'

  const payload = new Personagem();

  payload.setNome = getInputValue('nome');
  payload.setStatus = getInputValue('status');
  payload.setEspecie = getInputValue('especie');
  payload.setTipo = getInputValue('tipo');
  payload.setGenero = getInputValue('genero');
  payload.setPage = page;

  console.log(payload.getNome)

  fetch(`${baseUrl}/?page=${payload.getPage}&name=${payload.getNome}&status=${payload.getStatus}&species=${payload.getEspecie}&type=${payload.getTipo}&gender=${payload.getGenero}`)
    .then(response => {

      if (response.ok) {
        return response.json();

      }

      throw new Error('Erro na solicitação');
    })
    .then(data => {
      const Resposta = new Retorno("Sucesso", data["results"]);
      const container = document.querySelector('#personagens');
      Resposta.show(container);
      setPagination(Number(page) - 1, Number(page) + 1, data["info"].pages, page);
    })
    .catch(error => {

      console.error(error);
      const Resposta = new Retorno("Erro", "Erro ao buscar personagens");

    });
}


document.addEventListener("DOMContentLoaded", buscaPersonagens(1));

const serachButton = document.querySelector('#search');
serachButton.addEventListener('click', function(){
  buscaPersonagens(1);
})

const changePage = document.querySelectorAll('.change-page');

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


function limpaTela() {
  const container = document.querySelector('#personagens');
  container.innerHTML = '';
}

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

function getInputValue(id) {
  return document.querySelector(`#${id}`).value;
}

