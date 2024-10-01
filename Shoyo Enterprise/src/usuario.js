export default class Usuario {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo; // 'Síndico', 'Administradora', 'Morador', 'Porteiro'
    }

    atualizarDados(novoNome) {
        this.nome = novoNome;
    }
}
