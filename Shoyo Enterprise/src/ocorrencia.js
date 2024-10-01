export default class Ocorrencia {
    constructor(descricao) {
        this.descricao = descricao;
        this.data = new Date();
    }

    atualizarDescricao(novaDescricao) {
        this.descricao = novaDescricao;
    }

    obterDetalhes() {
        return { descricao: this.descricao, data: this.data };
    }
}
