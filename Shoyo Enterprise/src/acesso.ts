class Acesso {
    constructor(
        public idAcesso: number,   // ID do acesso (PK)
        public dataAcesso: Date,   // Data do acesso
        public rgEntrada: string    // Registro de entrada
    ) {}

    mostrarDetalhes(): void {
        console.log(`Acesso ID: ${this.idAcesso}, Data: ${this.dataAcesso.toLocaleDateString()}, RG: ${this.rgEntrada}`);
    }
}