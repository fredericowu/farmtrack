const StoryTellingController = (function(){

    let stepNum = 0;

    let steps = [
        /*
        {
            checks : ["Comeu só coisa boa", "Comeu catupiry", "Ficou no sol marinando"],
            mainImage : "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528329/mainImages/in-love_tytozp.png",
            description : "",
            background : "",
            metrica : "Sabor"
        },
        {
            checks : ["justificativa 1", "justificativa 2", "justificativa 3"],
            mainImage : "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528199/mainImages/strong_udlbbk.png",
            description : "",
            background : "",
            metrica : "Nutrição"
        },
        {
            checks : ["justificativa 1", "justificativa 2", "justificativa 3"],
            mainImage : "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528205/mainImages/thinking_tt05fr.png",
            description : "",
            background : "",
            metrica : "Boa Apresentação"
        },
        {
            checks : ["justificativa 1", "justificativa 2", "justificativa 3"],
            mainImage : "img/cow_badge.png",
            description : "",
            background : "",
            metrica : "Higienge"
        }
        */
    ];

    const init = function(){

        const url = new URL(location.href);
        const lote = url.searchParams.get("ingrediente");
        if(!lote){
            $("#").html(IngredientesTemplates.nenhumIngrediente());
            return;
        }

        //$.get("/", function(){

        //});

        new Promise((res, rej) => {
            $.get("/api/historicoslote/?lote="+lote, res);
        }).then((historico) => {
            for(let item of historico){
                steps.push(
                    item
                    /*
                    {
                        checks : ["Comeu só coisa boa", "Comeu catupiry", "Ficou no sol marinando"],
                        mainImage : "https://res.cloudinary.com/trackfarmcdn/image/upload/v1571528329/mainImages/in-love_tytozp.png",
                        metrica : "Sabor"
                    },
                    */

                );
                // f(ingrediente.fornecedor) fornecedores.push(ingrediente.fornecedor);
                // ("#ingredientes").append(IngredientesTemplates.item(ingrediente));
                //$("#ingredientes").append(StoryTellingTemplates.step(item));
            }

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
        }else{
            $(".prev-btn").show();
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