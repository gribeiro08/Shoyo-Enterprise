// Memento para Ocorrencia
class OcorrenciaMemento {
    constructor(private estado: string) {}

    getEstado(): string {
        return this.estado;
    }
}

// Caretaker para Ocorrencia
class OcorrenciaCaretaker {
    private mementos: OcorrenciaMemento[] = [];

    addMemento(memento: OcorrenciaMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): OcorrenciaMemento {
        return this.mementos[index];
    }
}

