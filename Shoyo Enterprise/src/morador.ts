// Classe Morador implementando o Prototype
class Morador implements Prototype {
    constructor(
        public rg: string,          // Registro do morador (PK)
        public nome: string,        // Nome do morador
        public apartamento: string  // Apartamento do morador
    ) {}

    // Método para clonar o objeto Morador
    clone(): this {
        // Object.create(this) cria uma cópia rasa do objeto atual
        const clone = Object.create(this);
        clone.rg = this.rg;
        clone.nome = this.nome;
        clone.apartamento = this.apartamento;
        return clone;
    }

    // Método para exibir os detalhes do morador
    mostrarDetalhes(): void {
        console.log(`RG: ${this.rg}, Nome: ${this.nome}, Apartamento: ${this.apartamento}`);
    }
}

// Exemplo de uso do Prototype com Morador
const morador1 = new Morador("123456789", "João Silva", "Apt 101");
morador1.mostrarDetalhes();

// Criando uma cópia (clone) do morador1
const morador2 = morador1.clone();
morador2.nome = "Maria Oliveira";  // Alterando o nome no clone
morador2.apartamento = "Apt 202";  // Alterando o apartamento no clone
morador2.mostrarDetalhes();

// O objeto original não foi alterado
morador1.mostrarDetalhes();