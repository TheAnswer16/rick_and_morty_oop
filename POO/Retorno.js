class Retorno {
    
    constructor(status, data){
        this._status = status;
        this._data = data;
    }

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
}

export default Retorno;
