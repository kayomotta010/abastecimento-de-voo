// Arquivo: Voo.js
class VooSeguro {
    #codigo;
    #combustivel;
    origem;
    destino;

    constructor(codigoPassado, origemPassada, destinoPassada) {
        // Fase 2: Validação de Dados (Bomba-Relógio)
        if (origemPassada === destinoPassada) {
            throw new Error(`Operação Negada: O voo ${codigoPassado} não pode ter a origem igual ao destino!`);
        }
        if (codigoPassado === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código.");
        }

        this.#codigo = codigoPassado;
        this.origem = origemPassada;
        this.destino = destinoPassada;
        this.#combustivel = 100;
    }

    get lerCombustivel() {
        return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) {
            alert("Erro: Não é possível tirar combustível por aqui!");
        } else if (this.#combustivel + quantidade > 100) {
            alert("Erro: O tanque vai transbordar! Limite é 100%.");
        } else {
            this.#combustivel += quantidade;
        }
    }

    set gastar(quantidade) {
        if (quantidade < 0) {
            alert("Erro: Digite um valor positivo para gastar.");
        } else if (this.#combustivel - quantidade < 0) {
            alert("Erro: Combustível insuficiente! O voo não pode acontecer.");
        } else {
            this.#combustivel -= quantidade;
        }
    }
}

// Fase 1: Libera a classe para outros arquivos usarem
export default VooSeguro;

