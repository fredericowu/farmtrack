const StoryTellingController = (function(){

    let stepNum = 0;

    
    let steps = [];
    const init = function(){

        const url = new URL(location.href);
        const lote = url.searchParams.get("ingrediente");
        if(!lote){
            $("#step").html(TemplateGlobal.itemNaoEncontrado());
            return;
        }

        new Promise((res, rej) => {
            $.get("/api/historicoslote/?lote="+lote, res);
        }).then((historico) => {
            if(historico.length == 0){
                $("#step").html(TemplateGlobal.itemNaoEncontrado());
                return;
            }
            steps = historico;
            steps.push({
                "metrica": "Estamos contruibuindo para um mundo mais transparente!",
                "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571572759/mainImages/satisfaction_xwh9ge.jpg",
                "processos": []
            }); 

            $("#nomeIngrediente").html(url.searchParams.get("nome"));


            setStep(true);
        });


    }

    const next = function(){
        stepNum++;
        setStep(true);
    }

    const prev = function(){
        stepNum--;
        setStep(false);
    }

    const setStep = function(nextStep){
        if(stepNum == 0){
            $(".prev-btn").hide();
        }else {
            $(".prev-btn").show();
        }

        if(stepNum == (steps.length - 1)){
            $(".next-btn").hide();
            $(".resetSession-btn").show();
            $("#nomeIngrediente").hide();
        }else{
            $(".next-btn").show();
            $(".resetSession-btn").hide();
            $("#nomeIngrediente").show();
        }

        let step = steps[stepNum];
        $("#step").html(StoryTellingTemplates.step(step));
        $("#metrica").html(step.metrica);

            for(let processo of step.processos){
                $("#checks").append(`
                    <h5><span class="fas fa-check-circle text-success"></span> ${processo}</h5>
                `);
            }   
        

        $("#page").html((stepNum + 1) + " de " + steps.length);

        
        
    }

    const resetSession = function(){
        window.location.href = "index.html?nome="+sessionStorage.getItem("empresa");
    }

    return {
        prev : prev, 
        next : next,
        init : init,
        resetSession : resetSession
    }

})();

$(document).ready(function(){
    StoryTellingController.init();
});