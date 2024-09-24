class Voto {
    constructor(
        public id_voto: number,
        public escolha: string,
        public votacao_aplicada: Votacao,
        public morador_votante: Morador
    ) {}
}