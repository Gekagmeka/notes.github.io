$(function(){
        $(".btn").on("click",function(event){
            console.log($(this));
            console.log($(event.currentTarget));
            console.log($(event.target));
        });


        $("#outer").on("click",function(event){
            console.log($(this)); /*div#outer - будет выведен; отловит клики внутри, но выведет тот элемент, на котором будет событие висеть
            если он содержит детей внутри*/
            console.log($(event.currentTarget)); /*div#outer будет выведен - аналогично this*/
            console.log($(event.target)); /*input#InnerB.btn - будет выведен; всегда в консоли будет выведен элемент, по которому кликнули*/
        });
        
        
        $("#inner").on("click",function(event){
            console.log($(this)); /*div#inner - будет выведен; отловит клики внутри, но выведет тот элемент, на котором будет событие висеть
            если он содержит детей внутри*/
            console.log($(event.currentTarget)); /*div#inner будет выведен - аналогично this*/
            console.log($(event.target)); /*input#InnerB.btn - будет выведен; всегда в консоли будет выведен элемент, по которому кликнули*/
        })
    })