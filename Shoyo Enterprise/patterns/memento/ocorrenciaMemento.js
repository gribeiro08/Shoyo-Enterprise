export default class OcorrenciaMemento {
    constructor(ocorrencia) {
        this.ocorrencia = ocorrencia;
        this.state = { descricao: ocorrencia.descricao, data: ocorrencia.data };
    }

    getState() {
        return this.state;
    }
}
