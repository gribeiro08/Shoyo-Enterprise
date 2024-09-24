class Reuniao {
    constructor(
        public id_reuniao: number,
        public titulo: string,
        public assunto: string,
        public data_inicio: Date,
        public data_fim: Date,
        public link: string,
        public ata: string,
        public sindico_responsavel: Sindico
    ) {}
}