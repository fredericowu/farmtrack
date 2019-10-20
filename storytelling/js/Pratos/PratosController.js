const PratosController = (function(){

    const init = function(){
        const url = new URL(location.href);
        const nome = url.searchParams.get("nome");
        if(!nome){
            $("#pratos").html(PratosTemplates.nenhumPrato());
            return;
        }

        sessionStorage.setItem("empresa", nome);

        new Promise((res, rej) => {
            $("#pratos").html(PratosTemplates.loader());
            $.get("http://192.168.249.193:8888/api/produtos/?produtor="+nome, res);
        }).then(pratos => {
            $("#pratos").html("");
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