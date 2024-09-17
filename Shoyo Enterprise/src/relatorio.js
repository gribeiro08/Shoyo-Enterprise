export default class Relatorio {
    constructor() {
        this.conteudo = '';
    }

    adicionarConteudo(texto) {
        this.conteudo += texto;
    }

    gerarRelatorio() {
        return this.conteudo;
    }
}
