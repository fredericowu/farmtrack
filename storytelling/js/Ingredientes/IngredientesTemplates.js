const IngredientesTemplates = (function(){
    const item = function(ingrediente){
        const metricasHTML = function(metricas){
            let html = "";
            for(let metrica of metricas){
                html += `
                <h6 class="text-dark"><span class="fas fa-medal text-success"></span> ${metrica}</h6>
                `;
            }
            return html;
        }
        return `
        <div class="col-lg-6 mb-3">
            <div class="card card-success">
                <div class="card-header ">
                    <h5 class="text-center">${ingrediente.nome}</h5>
                </div>
                <div class="card-body text-center">
                    <img class="masthead-avatar" src="${ingrediente.imagem}" alt="">
                    <br>
                    <small>Fornecedores</small>
                    <p>${ingrediente.produtor.nome} <span class="fas fa-info-circle" data-target="#myModal" data-toggle="modal"></span></p>
                </div>
                <div class="card-footer">
                    <h6 class="text-dark">Métricas de qualidade</h6>
                    ${metricasHTML(ingrediente.metricas)}
                    <button type="button" class="btn btn-lg btn-block btn-round btn-warning mt-3" onclick="window.location.href='storytelling.html?ingrediente=${ingrediente.id}'"><strong>VER HISTÓRIA</strong></button>
                </div>
            </div>
        </div>

        `;
    }
    return {
        item : item
    }
})();