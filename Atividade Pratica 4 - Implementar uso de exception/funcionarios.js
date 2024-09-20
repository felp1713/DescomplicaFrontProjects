function exibirErro(mensagem) {
    document.getElementById('erro').textContent = mensagem;
}

function limparMensagens() {
    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';
}

function criarFuncionario() {
    limparMensagens();

    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        if (!nome || isNaN(idade) || !cargo) {
            throw new Error('Todos os campos básicos (nome, idade, cargo) devem ser preenchidos corretamente.');
        }

        let funcionario;

        if (cargo === 'Gerente') {
            if (!departamento) throw new Error('O campo departamento é obrigatório para Gerentes.');
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === 'Desenvolvedor') {
            if (!linguagem) throw new Error('O campo linguagem é obrigatório para Desenvolvedores.');
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error('Cargo inválido.');
        }

        funcionario.seApresentar();
        funcionario.trabalhar();
        if (cargo === 'Gerente') {
            funcionario.gerenciar();
        } else if (cargo === 'Desenvolvedor') {
            funcionario.programar();
        }
    } catch (error) {
        exibirErro(error.message);
    }
}

document.getElementById('cargo').addEventListener('change', function () {
    const cargoSelecionado = this.value;
    if (cargoSelecionado === 'Gerente') {
        document.getElementById('departamentoField').style.display = 'block';
        document.getElementById('linguagemField').style.display = 'none';
    } else if (cargoSelecionado === 'Desenvolvedor') {
        document.getElementById('departamentoField').style.display = 'none';
        document.getElementById('linguagemField').style.display = 'block';
    } else {
        document.getElementById('departamentoField').style.display = 'none';
        document.getElementById('linguagemField').style.display = 'none';
    }
});

class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        document.getElementById('resultado').textContent += `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.\n`;
    }

    trabalhar() {
        document.getElementById('resultado').textContent += `${this.nome} está trabalhando.\n`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        document.getElementById('resultado').textContent += `${this.nome} está gerenciando o departamento de ${this.departamento}.\n`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        document.getElementById('resultado').textContent += `${this.nome} está programando em ${this.linguagem}.\n`;
    }
}
