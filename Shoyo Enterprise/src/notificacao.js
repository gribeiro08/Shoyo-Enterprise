export default class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem;
    }

    enviar(mensagem) {
        console.log(`Notificação enviada: ${mensagem}`);
    }
}
