Prática 01 - Mostrar o maior valor entre dois números
let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));

if (valor1 > valor2) {
    alert("O maior valor é: " + valor1);
} else if (valor2 > valor1) {
    alert("O maior valor é: " + valor2);
} else {
    alert("Os valores são iguais.");
}
Prática 02 - Calcular o quociente de uma divisão
let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));

if (divisor === 0) {
    alert("Erro: não é possível dividir por zero.");
} else {
    let quociente = dividendo / divisor;
    alert("O quociente da divisão é: " + quociente);
}