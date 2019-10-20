const IngredientesController = (function(){
    let fornecedores = [];
    const init = function(){
        let empresa = sessionStorage.getItem("empresa");
        
        if(empresa) {
            $("#empresa").html(empresa);
        }

        const url = new URL(location.href);
        const pratoId = url.searchParams.get("prato");
        if(!pratoId){
            $("#ingredientes").html(IngredientesTemplates.nenhumIngrediente());
            return;
        }

        new Promise((res, rej) => {
            $.get("/api/produtos/detalhes/?id="+pratoId, res);
        }).then((ingredientes) => {

            for(let ingrediente of ingredientes){
                if(ingrediente.fornecedor) fornecedores.push(ingrediente.fornecedor);
                $("#ingredientes").append(IngredientesTemplates.item(ingrediente));
            }
        });

    }
    return {
        init : init
    }
})();

$(document).ready(function(){
    IngredientesController.init();
});