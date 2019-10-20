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

        const produtosHTML = function(produtos){
            let html = "";
            for(let produto of produtos){
                html += `
                <li>${produto.nome}</li>
                `;
            }
            return html;
        }


        return `
  <div class="modal fade " id="myModal-${ingrediente.produtor.id}" >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
    
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Fornecedor</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
    
          <!-- Modal body -->
          <div class="modal-body">
              <h5>${ingrediente.produtor.nome} <span class="badge badge-success">local</span></h5>
              <p>${ingrediente.produtor.descricao}</p>
              <h5>Produtos</h5>
              <hr>
              <ul>
                    ${produtosHTML(ingrediente.produtor.produtos)}
              </ul>

          </div>
    
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Voltar</button>
          </div>
    
        </div>
      </div>
    </div>
    
        <div class="col-lg-6 mb-3">
            <div class="card card-success">
                <div class="card-header ">
                    <h5 class="text-center">${ingrediente.nome}</h5>
                </div>
                <div class="card-body text-center">
                    <img class="masthead-avatar" src="${ingrediente.url_imagem}" alt="">
                    <br>
                    <small>Fornecedores</small>
                    <p>${ingrediente.produtor.nome} <span class="fas fa-info-circle" data-target="#myModal-${ingrediente.produtor.id}" data-toggle="modal"></span></p>
                </div>
                <div class="card-footer">
                    <h6 class="text-dark">Métricas de qualidade</h6>
                    ${metricasHTML(ingrediente.metricas)}
                    <button type="button" class="btn btn-lg btn-block btn-round btn-warning mt-3" onclick="window.location.href='storytelling.html?ingrediente=${ingrediente.lote}'"><strong>VER HISTÓRIA</strong></button>
                </div>
            </div>
        </div>

        `;
    }
    return {
        item : item
    }
})();

