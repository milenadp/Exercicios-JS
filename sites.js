function converter() {
    var titulo = $("#titulo").val();
    var duracao = $("#duracao").val();
    var varminutos = duracao % 60;
    var varhoras = (duracao - varminutos) / 60;
    $("#filme").append(titulo);
    $("#dur").append("Filme tem " + varhoras + " hora(s) e " + varminutos + " minuto(s). ");
}

function promocaoVeiculo() {
    var veiculo = $("#veiculo").val();
    var preco = $("#preco").val();
    var entrada = (preco - (preco * (50 / 100)));
    var parcela = ((preco - entrada) / 12);
    $("#promocao").append("Pomoção de: " + veiculo);
    $("#valor").append("Entrada de R$: " + entrada.toFixed(2) + " + 12x de: " + parcela.toFixed(2));
}

function converterRestaurante() {
    var buffet = $("#buffet").val();
    var gramas = $("#gramas").val();
    var total = (buffet * (gramas / 1000));
    $("#consumo").append("Valor a pagar (R$): " + total.toFixed(2));
}

function valorLanHouse() {
    var valor = $("#valor").val();
    var tempo = $("#tempo").val();
    var resto = tempo % 15;
    var inteiro = (tempo - resto) / 15;
    if (resto != 0)
        resto = 1;
    var total = (inteiro + resto) * valor;
    $("#val").append("Valor a pagar (R$): " + total.toFixed(2));
}

function promocaoSupermercado() {
    var produto = $("#produto").val();
    var preco = $("#preco").val();
    var terceiroProduto = 0,
        total = 0;
    terceiroProduto = (preco / 2.0);
    total = (2 * preco) + terceiroProduto;
    $("#promocao").append(produto + " - Promoção: Leve 3 por: R$ " + total.toFixed(2));
    $("#terceiro").append("O 3º produto custa apenas: R$ " + terceiroProduto.toFixed(2));
}