const StoryTellingTemplates = (function(){
    const step = function(obj){
        return `
        <div class="container d-flex align-items-center flex-column ">
            <img class="masthead-avatar mb-2 img-responsive" id="mainImage" src="${obj.url_imagem}"  alt="" style="
                    background:  white;
                    border-radius: 50%;
                    width: 240px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);">
        </div>
        <div class="container">
            <div class="row text-left mt-5 d-block">
                <div class="col-12" style="max-height: 250px; overflow-y: auto !important;" id="checks">
                    
                </div>
            </div>
        </div>
        `;
    }

    const nenhumLote = function(){
        return ``
    }

    return {
        step : step,
        nenhumLote : nenhumLote
    }
})();