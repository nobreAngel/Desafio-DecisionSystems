
$(document).ready(function()
{
    // FUNÇÃO INPUT TEXTO
    $('#nome').keydown( function () {
        //Recebeu o valor editado pelo usuário no input Nome.
        var nomeAtual = $(this).val();
        //Trata o valor do input Nome conforme solicitado.
        var nomeTratado = nomeAtual.substr(0, 9);
        //Atualiza o input
        $(this).val(nomeTratado); 
    });


    //FUNÇÕES INPUT NUMBER
    $("#idade").keyup(function() {
        $("#idade").val(this.value.match(/[0-9]*/));
    });

});





