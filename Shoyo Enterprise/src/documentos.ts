class Documentos {
    private estado: string;

    constructor(
        public id_documento: number,
        public categoria: string,
        public arquivo: string
    ) {
        this.estado = JSON.stringify(this);
    }

    setEstado(arquivo: string): void {
        this.arquivo = arquivo;
        this.estado = JSON.stringify(this);
        console.log(`Documentos: Estado alterado para arquivo: ${arquivo}`);
    }

    saveToMemento(): DocumentosMemento {
        console.log(`Documentos: Salvando estado no Memento.`);
        return new DocumentosMemento(this.estado);
    }

    restoreFromMemento(memento: DocumentosMemento): void {
        const estadoRestaurado = JSON.parse(memento.getEstado());
        this.id_documento = estadoRestaurado.id_documento;
        this.categoria = estadoRestaurado.categoria;
        this.arquivo = estadoRestaurado.arquivo;
        console.log(`Documentos: Estado restaurado do Memento.`);
    }
}
// Uso memento
const documentos = new Documentos(1, "Contrato", "contrato.pdf");
const documentosCaretaker = new DocumentosCaretaker();

documentos.setEstado("contrato_v2.pdf");
documentosCaretaker.addMemento(documentos.saveToMemento());

documentos.setEstado("contrato_v3.pdf");
documentosCaretaker.addMemento(documentos.saveToMemento());

console.log("Restaurando para a versão anterior...");
documentos.restoreFromMemento(documentosCaretaker.getMemento(0));

