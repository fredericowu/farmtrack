const PratosTemplates = (function(){

    const item = function(prato){
        return `
        <div class="col-lg-6">
            <div class="card mb-5">
                <div class="card-body text-center"> 
                    <h5 class="text-center">${prato.nome}</h5>
                    <img class="masthead-avatar" src="${prato.imagem}" alt="">            
                    <button type="button" class="btn btn-lg btn-block btn-round btn-warning mt-3" onclick="window.location.href='ingredientes.html?prato=${prato.id}'"><strong>VER INGREDIENTES</strong></button>
                </div>
            </div>
        </div>
        `;
    }

    const nenhumPrato = function(){
        return `
        <div class="col-lg-21">
            <div class="card mb-5">
                <div class="card-body text-center"> 
                    
                    <img class="" src="../../img/sem_pratos.png" style="width: 50%" alt="">            
                    
                </div>
            </div>
        </div>
        `;

    }

    return  {
        item : item,
        nenhumPrato : nenhumPrato
    
    }
})();

