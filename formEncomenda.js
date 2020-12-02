// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {

    //Evento change do campo Preço unitário
    $('.price').change(function () {
        debugger;

        //Pesquisa o tr da linha do controlo alterado
        var x = $(this).parentsUntil("tbody", "tr");

        //pesquisa o controlo .qtd  na linha previamente seleccionada
        var qtd = x.find(".qtd");
        
        //pequisa o controlo .total na linha previmente seleccionada
        var total = x.find(".total");

        //atribui valor à seleccção 
        total.val( $(this).val() * qtd.val() );
    }); 
     

})();


function calcular(event) {
    debugger;
    var aux = 0;
    $(".total").each(function () {

        if ($.isNumeric($(this).val())) {
            aux += Number($(this).val());
        }

    });

    $("#total").text(aux);

}

function totalLinhas(){
    alert($("#table tr").length);
}
 