import Documento from '../../src/documento';

export default class DocumentoPrototype {
    constructor(documento) {
        this.documento = documento;
    }

    clonar() {
        return new Documento(this.documento.titulo, this.documento.conteudo);
    }
}
