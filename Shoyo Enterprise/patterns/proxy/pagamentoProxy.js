import Pagamento from '../../src/pagamento';

export default class PagamentoProxy {
    constructor(pagamento) {
        this.pagamento = pagamento;
    }

    realizarPagamento() {
        // Lógica adicional ou validação antes de realizar o pagamento
        console.log('Verificando dados do pagamento...');
        this.pagamento.realizarPagamento();
    }
}
