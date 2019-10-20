const TemplateGlobal = (function(){
    const itemNaoEncontrado = function(){
        return `
        <div class="col-lg-12">
            <div class="card mb-5">
                <div class="card-body text-center"> 
                    
                    <img class="" src="/img/sem_pratos.png" style="width: 60%" alt="">            
                    <h4>Desculpe! Não conseguimos encontrar o item que você solicitou.</h4>
                </div>
            </div>
        </div>
        `;
    }
    return {
        itemNaoEncontrado : itemNaoEncontrado
    }
})();