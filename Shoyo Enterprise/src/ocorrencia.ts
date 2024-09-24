class Ocorrencia {
    private estado: string;

    constructor(
        public id_ocorrencia: number,
        public conteudo: string,
        public data_ocorrencia: Date,
        public status_visualizacao: string,
        public morador_solicitante: Morador
    ) {
        this.estado = JSON.stringify(this);
    }

    setEstado(conteudo: string, status_visualizacao: string): void {
        this.conteudo = conteudo;
        this.status_visualizacao = status_visualizacao;
        this.estado = JSON.stringify(this);
        console.log(`Ocorrencia: Estado alterado para conteúdo: ${conteudo}, status: ${status_visualizacao}`);
    }

    saveToMemento(): OcorrenciaMemento {
        console.log(`Ocorrencia: Salvando estado no Memento.`);
        return new OcorrenciaMemento(this.estado);
    }

    restoreFromMemento(memento: OcorrenciaMemento): void {
        const estadoRestaurado = JSON.parse(memento.getEstado());
        this.id_ocorrencia = estadoRestaurado.id_ocorrencia;
        this.conteudo = estadoRestaurado.conteudo;
        this.data_ocorrencia = new Date(estadoRestaurado.data_ocorrencia);
        this.status_visualizacao = estadoRestaurado.status_visualizacao;
        this.morador_solicitante = estadoRestaurado.morador_solicitante;
        console.log(`Ocorrencia: Estado restaurado do Memento.`);
    }
}

// Uso de memento
const moradorSolicitante = new Morador("123456789", "João", "Apt 101");
const ocorrencia = new Ocorrencia(1, "Problema na luz", new Date(), "pendente", moradorSolicitante);
const ocorrenciaCaretaker = new OcorrenciaCaretaker();

ocorrencia.setEstado("Problema resolvido", "visualizado");
ocorrenciaCaretaker.addMemento(ocorrencia.saveToMemento());

ocorrencia.setEstado("Outro problema", "pendente");
ocorrenciaCaretaker.addMemento(ocorrencia.saveToMemento());

console.log("Restaurando para a versão anterior...");
ocorrencia.restoreFromMemento(ocorrenciaCaretaker.getMemento(0));