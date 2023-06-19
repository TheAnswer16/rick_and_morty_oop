//Definição da classe personagem, utilizada para tratar os dados que são utilizados para filtrar o retorno da API

/*
    - Nome
    - Status
    - Especie
    - Tipo
    - Genero
    - Page

    Sendo cada um deles um possível filtro para o consumo da API

    A API em questão (The Rick and Morty API) é pública e pode ser acessada através do link abaixo:
    https://rickandmortyapi.com/
*/
class Personagem {

    // Como o javascript não é uma linguagem tipada, a definição dos métodos é definida diretamente no construtor 
    // O sufixo _ antes da variável é responsável portornar o atributo privado

    // Definição dos atributos da classe
    constructor (nome, status, especie, tipo, genero, page){
        this._nome = nome;
        this._status = status;
        this._especie = especie;
        this._tipo = tipo;
        this._genero = genero;
        this._page = page;
    }

    //Definição de getters e setters para cada um dos atributos

    get getNome() {
        return this._nome;
    }

    set setNome(novoNome) {
        this._nome = novoNome;
    }

    get getStatus(){
        return this._status;
    }

    set setStatus(novoStatus){
        this._status = novoStatus;
    }

    get getEspecie() {
        return this._especie;
    }

    set setEspecie(novaEspecie){
         this._especie = novaEspecie;
    }

    get getTipo(){
        return this._tipo;
    }

    set setTipo(novoTipo) {
        this._tipo = novoTipo;
    } 

    get getGenero(){
        return this._genero;
    }

    set setGenero(novoGenero){
        this._genero = novoGenero;
    }

    get getPage(){
        return this._page;
    }

    set setPage(newPage){
        this._page = newPage;
    }

}

//Exportação da classe
export default Personagem;