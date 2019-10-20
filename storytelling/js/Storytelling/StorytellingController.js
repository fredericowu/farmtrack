const StoryTellingController = (function(){

    let stepNum = 0;

    let steps = [];

    const init = function(){

        const url = new URL(location.href);
        const lote = url.searchParams.get("lote");
        if(!lote){
            $("#").html(IngredientesTemplates.nenhumIngrediente());
            return;
        }
        

        //$.get("/", function(){

        //});
        //setStep(true);
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
            for(let check of step.checks){
                $("#checks").append(`
                    <h5><span class="fas fa-check-circle text-success"></span> ${check}</h5>
                `);
            }
        }else{
            for(let check of step.checks){
                $("#checks").append(`
                    <h5><span class="fas fa-check-circle text-success"></span> ${check}</h5>
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