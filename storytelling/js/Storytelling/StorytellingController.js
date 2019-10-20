const StoryTellingController = (function(){

    let stepNum = 0;

    
    let steps = [
        {
            "processos": [
                "Uniformização das Mudas"
            ],
            "metrica": "Apresentação",
            "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528205/mainImages/thinking_tt05fr.png"
        },
        {
            "processos": [
                "Seleção",
                "Suplementação de Nutrientes"
            ],
            "metrica": "Nutrição",
            "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528199/mainImages/strong_udlbbk.png"
        },
        {
            "processos": [
                "Substratos comerciais"
            ],
            "metrica": "Sabor",
            "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528329/mainImages/in-love_tytozp.png"
        },
        {
            "processos": [
                "Controle Fitossanitário",
                "Tratamento Térmico"
            ],
            "metrica": "Higiene",
            "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571573821/mainImages/higiene_hlqwnw.jpg"
        }
    ]

    const init = function(){

        const url = new URL(location.href);
        const lote = url.searchParams.get("lote");
        if(!lote){
            $("#step").html(StoryTellingTemplates.nenhumLote());
            return;
        }

       // new Promise((res, rej) => {
       //     $.get("/api/historicoslote/?lote="+lote, res);
       // }).then((historico) => {
            // steps = historico
            
            
            steps.push({
                "metrica": "You rock!",
                "url_imagem": "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571572759/mainImages/satisfaction_xwh9ge.jpg",
                "processos": []
            }); 


            setStep(true);
       // });


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
        }else{
            $(".next-btn").show();
            $(".resetSession-btn").hide();
        }

        let step = steps[stepNum];
        $("#step").html(StoryTellingTemplates.step(step));
        $("#metrica").html(step.metrica);

        if(nextStep){
            for(let processo of step.processos){
                $("#checks").append(`
                    <h5><span class="fas fa-check-circle text-success"></span> ${processo}</h5>
                `);
            }
        }else{
            for(let processo of step.processos){
                $("#checks").append(`
                    <h5><span class="fas fa-check-circle text-success"></span> ${processo}</h5>
                `);
            }
        }

        $("#page").html((stepNum + 1) + " de " + steps.length);

        
        
    }

    return {
        prev : prev, 
        next : next,
        init : init
    }

})();

$(document).ready(function(){
    StoryTellingController.init();
});