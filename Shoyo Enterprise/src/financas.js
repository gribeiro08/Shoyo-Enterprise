export default class Financas {
    constructor() {
        this.saldo = 0;
        this.lancamentos = [];
    }

    adicionarLancamento(valor, descricao) {
        this.lancamentos.push({ valor, descricao });
        this.saldo += valor;
    }

    obterSaldo() {
        return this.saldo;
    }

    obterLancamentos() {
        return this.lancamentos;
    }
}
