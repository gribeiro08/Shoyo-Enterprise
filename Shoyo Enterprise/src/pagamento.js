export default class Pagamento {
    constructor(montante) {
        this.montante = montante;
        this.status = 'Pendente';
    }

    realizarPagamento() {
        this.status = 'Concluído';
        console.log(`Pagamento de R$${this.montante} realizado.`);
    }

    obterStatus() {
        return this.status;
    }
}
