export default class DocumentoMemento {
    constructor(documento) {
        this.documento = documento;
        this.state = { titulo: documento.titulo, conteudo: documento.conteudo };
    }

    getState() {
        return this.state;
    }
}
