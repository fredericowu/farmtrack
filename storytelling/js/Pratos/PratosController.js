const PratosController = (function(){

    const init = function(){
        const url = new URL(location.href);
        const nome = url.searchParams.get("nome");
        if(!nome){
            $("#pratos").html(TemplateGlobal.itemNaoEncontrado());
            return;
        }

        sessionStorage.setItem("empresa", nome);

        new Promise((res, rej) => {
            $("#pratos").html(PratosTemplates.loader());
            $.get("/api/produtos/?produtor="+nome, res);
        }).then(pratos => {
            $("#pratos").html("");
            if(pratos.length == 0){
                $("#pratos").html(TemplateGlobal.itemNaoEncontrado());
                return;
            }
            for(let prato of pratos){
                $("#pratos").append(PratosTemplates.item(prato));
            }
    
            $("#qtd_pratos").html(pratos.length);
    
            $("#empresa").html(nome);
        });


    }
    return {
        init : init
    }
})();

$(document).ready(function(){
    PratosController.init();
});