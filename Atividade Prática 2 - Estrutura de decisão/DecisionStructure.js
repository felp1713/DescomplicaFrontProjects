const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function escolherBebida(bebida) {
    let valor;

    switch (bebida.toLowerCase()) {
        case 'café':
            valor = 3.50;
            break;
        case 'leite':
            valor = 2.50;
            break;
        case 'chá':
            valor = 2.00;
            break;
        default:
            console.log("Escolha inválida. A opção deve ser café, leite ou chá.");
            rl.close();
            return;
    }

    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    rl.close();
}

console.log("Escolha uma bebida:");
console.log("Digite o nome da bebida (café, leite ou chá):");

rl.question('Digite a bebida desejada: ', (resposta) => {
    escolherBebida(resposta.trim());
});
