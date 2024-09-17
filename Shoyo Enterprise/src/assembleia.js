export default class Assembleia {
    constructor(titulo, data) {
        this.titulo = titulo;
        this.data = data;
    }

    atualizarDetalhes(novoTitulo, novaData) {
        this.titulo = novoTitulo;
        this.data = novaData;
    }

    obterDetalhes() {
        return { titulo: this.titulo, data: this.data };
    }
}
