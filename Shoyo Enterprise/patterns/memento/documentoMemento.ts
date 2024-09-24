// Memento para Documentos
class DocumentosMemento {
    constructor(private estado: string) {}

    getEstado(): string {
        return this.estado;
    }
}

// Caretaker para Documentos
class DocumentosCaretaker {
    private mementos: DocumentosMemento[] = [];

    addMemento(memento: DocumentosMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): DocumentosMemento {
        return this.mementos[index];
    }
}
