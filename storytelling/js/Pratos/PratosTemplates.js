const PratosTemplates = (function(){

    const item = function(prato){
        return `
        <div class="col-lg-6">
            <div class="card mb-5">
                <div class="card-body text-center"> 
                    <h5 class="text-center">${prato.nome}</h5>
                    <img class="masthead-avatar" src="${prato.url_imagem}" alt="">            
                    <button type="button" class="btn btn-lg btn-block btn-round btn-warning mt-3" onclick="window.location.href='ingredientes.html?prato=${prato.id}'"><strong>VER INGREDIENTES</strong></button>
                </div>
            </div>
        </div>
        `;
    }

    const nenhumPrato = function(){
        return `
        <div class="col-lg-12">
            <div class="card mb-5">
                <div class="card-body text-center"> 
                    
                    <img class="" src="/img/sem_pratos.png" style="width: 60%" alt="">            
                    <h4>Nenhum restaurante ou fornecedor informado.</h4>
                </div>
            </div>
        </div>
        `;

    }

    const loader = function(){
        return `
        <div class="col-12">
            <div class="ph-item">
                <div class="ph-col-12">
                <div class="ph-picture"></div>          
                </div>
            </div>
        </div>
        `;
    }

    return  {
        item : item,
        nenhumPrato : nenhumPrato,
        loader: loader
    
    }
})();

