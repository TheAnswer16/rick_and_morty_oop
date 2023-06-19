//Definição da classe Retorno, utilizada para tratar os dados que são utilizados para filtrar o retorno da API

/*
    - Status (da requisição)
    - Data (dados retornados da requisição)

    Sendo cada um deles um possível filtro para o consumo da API

    A API em questão (The Rick and Morty API) é pública e pode ser acessada através do link abaixo:
    https://rickandmortyapi.com/
*/
class Retorno {
    
    // Como o javascript não é uma linguagem tipada, a definição dos métodos é definida diretamente no construtor 
    // O sufixo _ antes da variável é responsável portornar o atributo privado

    // Definição de atributos
    constructor(status, data){
        this._status = status;
        this._data = data;
    }

    //Definição de getters e setters para cada um dos atributos

    get getStatus(){
        return this._status;
    }

    set setStatus(novoStatus){
        this._status = novoStatus;
    }

    get getData(){
        return this._data;
    }

    set setData(novaData){
        this._data = novaData;
    }

    // Definição do método show, utilizado para criar os cards de cada um dos personagens na tela da aplicação
    show(container){
        
        const info = this._data;
        
        for (let i of info){
            container.innerHTML += 
                `<div class="flex bg-slate-50 w-[100%] rounded-md p-3 mt-3">
                    <figure>
                        <img src=${i.image} class="rounded-md" />
                    </figure>
                    <div class="ml-5">
                        <h2 class='text-violet-700 text-4xl font-bold mt-3 mb-2'> ${i.name} </h2>
                        <p class="text-2xl"> Status: ${i.status} </p>
                        <p class="text-2xl"> Species: ${i.species} </p>
                        <p class="text-2xl"> Type: ${i.type} </p>
                        <p class="text-2xl"> Gender: ${i.gender} </p>
                        <p class="text-2xl"> Origin: ${i.origin.name} </p>
                        <p class="text-2xl"> Location: ${i.location.name} </p>
                    </div>
                </div>`;
        }
    }

    // Definição do método clear, utilizado para limpar a tela sempre que ocorre uma nova requisição na API, evitando a repetição e conflito de informações
    clear (container){
        container.innerHTML = '';
    }
}

// Exportação da classe
export default Retorno;
