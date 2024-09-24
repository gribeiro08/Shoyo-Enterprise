class AvisosGerais {
    constructor(
        public idAvisosGerais: number, // ID dos avisos gerais (PK)
        public conteudo: string,       // Conteúdo do aviso
        public dataAviso: Date         // Data do aviso
    ) {}

    mostrarAviso(): void {
        console.log(`Aviso ID: ${this.idAvisosGerais}, Conteúdo: ${this.conteudo}, Data: ${this.dataAviso.toLocaleDateString()}`);
    }
}
