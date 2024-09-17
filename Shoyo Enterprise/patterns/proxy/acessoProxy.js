import Acesso from '../../src/acesso';

export default class AcessoProxy {
    constructor(usuario) {
        this.usuario = usuario;
        this.acesso = new Acesso(usuario, 'Pendente');
    }

    verificarAcesso() {
        // Simulação de lógica de verificação
        if (this.usuario.tipo === 'Síndico' || this.usuario.tipo === 'Administradora') {
            this.acesso.atualizarStatus('Liberado');
        } else {
            this.acesso.atualizarStatus('Negado');
        }
        return this.acesso.obterStatus();
    }
}
