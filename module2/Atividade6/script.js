// Função que irá ser ativada com o cique no botão
function calcularOperacao(){
    // Declaração de variáveis
    const numeroUm = Number(document.getElementById("numeroUm").value);
    const numeroDois = Number(document.getElementById("numeroDois").value);
    const operador = document.getElementById("operador").value;
    // Criando o objeto requisitado para a atividade
    const calculadora = {
        // Definindo operações
        adicao: numeroUm + numeroDois,
        subtracao: numeroUm - numeroDois,
        divisao: numeroUm / numeroDois,
        multiplicacao: numeroUm * numeroDois,

        getAdicao: function(){
            return this.adicao
        },

        getSubtracao: function(){
            return this.subtracao
        },

        getMultiplicacao(){
            return this.multiplicacao
        },

        getDivisao(){
            return this.divisao
        },
    }
    
    // Verificando se está recebendo números
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        alert("Por favor, digite números válidos");
        return;
    }
    
    // Definindo o valor da operação e invocando o switch para comparar o operador
    let valor;
    switch(operador){
        case '+':
            valor = calculadora.getAdicao();
            break
        case '-':
            valor = calculadora.getSubtracao();
            break
        case '*':
            valor = calculadora.getMultiplicacao();
            break
        case '/':
            if (numeroDois === 0) {
                alert("Não é possível dividir por zero");
                return;
            }
            valor = calculadora.getDivisao();
            break
        default:
            alert("Operador inválido");
            return;
    }

    //Exibição dos resultados
    alert("O valor da operação é: " + valor.toFixed(2));
}