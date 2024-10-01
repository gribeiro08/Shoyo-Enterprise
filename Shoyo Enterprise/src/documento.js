export default class Documento {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    atualizarConteudo(novoConteudo) {
        this.conteudo = novoConteudo;
    }

    obterDetalhes() {
        return { titulo: this.titulo, conteudo: this.conteudo };
    }
}
