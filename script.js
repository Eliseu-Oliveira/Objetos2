let valores = [];

const adicionarValor = () => {
    const valor = Number(document.getElementById("valor").value);
    valores.push(valor);
    document.getElementById("valor").value = "";
    console.log(valores);
};

const calcularTriplo = () => {
    const triplos = valores.map(valor => valor * 3);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>Valores adicionados: " + valores.join(", ") + "</p>";
    resultado.innerHTML += "<p>Triplos dos valores adicionados: " + triplos.join(", ") + "</p>";
};

const limparValores = () => {
    valores = [];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
};

document.getElementById("adicionar").addEventListener("click", adicionarValor);
document.getElementById("calcular").addEventListener("click", calcularTriplo);
document.getElementById("limpar").addEventListener("click", limparValores);