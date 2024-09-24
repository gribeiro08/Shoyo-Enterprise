class Visitante {
    constructor(
        public rg_visitante: string,
        public data_visita: Date,
        public nome_visitante: string,
        public morador_responsavel: Morador,
        public porteiro_responsavel: Porteiro
    ) {}
}