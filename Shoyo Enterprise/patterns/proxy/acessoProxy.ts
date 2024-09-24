// Tipos Comuns de Proxy:
// Remote Proxy: Controla o acesso a um objeto que reside em um endereço remoto, como em outro servidor ou localidade.
// Virtual Proxy: Adia a criação e inicialização de objetos caros até que sejam realmente necessários.
// Protection Proxy: Controla o acesso a um objeto, restringindo operações com base nas permissões do usuário.
// Cache Proxy: Gerencia o cache de resultados para otimizar o desempenho.
// Logging Proxy: Gera logs de todas as interações com o objeto.

// Proxy de Cache para Acesso
class AcessoProxy {
    private cache: Map<number, Acesso> = new Map(); // Armazenar os acessos em cache

    constructor(private acessoReal: Acesso) {}

    acessarAcesso(): Acesso {
        // Verifica se o acesso já está em cache
        if (this.cache.has(this.acessoReal.idAcesso)) {
            console.log("Retornando acesso do cache...");
            return this.cache.get(this.acessoReal.idAcesso)!; // Retorna o acesso do cache
        }

        // Caso contrário, armazena em cache e retorna o acesso real
        console.log("Acesso não encontrado no cache. Armazenando em cache...");
        this.cache.set(this.acessoReal.idAcesso, this.acessoReal);
        return this.acessoReal;
    }
}

// Exemplo de uso do Proxy para Acesso
const acesso1 = new Acesso(1, new Date("2024-09-23"), "RG12345");
const acessoProxy = new AcessoProxy(acesso1);

console.log("Primeiro acesso:");
const a1 = acessoProxy.acessarAcesso();
a1.mostrarDetalhes();

console.log("\nAcessando novamente:");
const a2 = acessoProxy.acessarAcesso();
a2.mostrarDetalhes();