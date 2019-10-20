const TemplateGlobal = (function(){
    const itemNaoEncontrado = function(){
        return `
        <div class="col-lg-12 mb-5">
            <div class="card ">
                <div class="card-body text-center"> 
                    
                    <img class="" src="https://res.cloudinary.com/trackfarmcdn/image/upload/v1571577384/mainImages/nao_encontrado_rf8vzk.png" style="width: 40%" alt="">            
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