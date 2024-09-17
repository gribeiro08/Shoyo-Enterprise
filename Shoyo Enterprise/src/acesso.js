export default class Acesso {
    constructor(usuario, status) {
        this.usuario = usuario;
        this.status = status; // 'Liberado', 'Negado'
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
    }

    obterStatus() {
        return this.status;
    }
}
