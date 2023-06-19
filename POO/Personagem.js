class Personagem {
    constructor (nome, status, especie, tipo, genero, page){
        this._nome = nome;
        this._status = status;
        this._especie = especie;
        this._tipo = tipo;
        this._genero = genero;
        this._page = page;
    }

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

export default Personagem;