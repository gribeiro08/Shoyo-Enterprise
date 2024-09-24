class MultaAplicada {
    constructor(
        public id_multa_aplicada: number,
        public data_aplicacao: Date,
        public apartamento_multado: string,
        public tipo_multa: Multa
    ) {}
}