// Proxy de Cache para AvisosGerais
class AvisosGeraisProxy {
    private cache: Map<number, AvisosGerais> = new Map(); // Armazenar os avisos em cache

    constructor(private avisoReal: AvisosGerais) {}

    acessarAvisosGerais(): AvisosGerais {
        // Verifica se o aviso já está em cache
        if (this.cache.has(this.avisoReal.idAvisosGerais)) {
            console.log("Retornando aviso do cache...");
            return this.cache.get(this.avisoReal.idAvisosGerais)!; // Retorna o aviso do cache
        }

        // Caso contrário, armazena em cache e retorna o aviso real
        console.log("Aviso não encontrado no cache. Armazenando em cache...");
        this.cache.set(this.avisoReal.idAvisosGerais, this.avisoReal);
        return this.avisoReal;
    }
}

// Exemplo de uso do Proxy para AvisosGerais
const aviso1 = new AvisosGerais(1, "Aviso importante sobre a reunião.", new Date("2024-09-22"));
const avisoProxy = new AvisosGeraisProxy(aviso1);

console.log("\nPrimeiro acesso ao aviso:");
const a1Aviso = avisoProxy.acessarAvisosGerais();
a1Aviso.mostrarAviso();

console.log("\nAcessando novamente o aviso:");
const a2Aviso = avisoProxy.acessarAvisosGerais();
a2Aviso.mostrarAviso();