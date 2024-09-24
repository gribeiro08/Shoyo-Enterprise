// Classe Reserva implementando o Prototype
class Reserva implements Prototype {
    constructor(
        public id: number,             // ID da reserva (PK)
        public dataInicio: Date,       // Data de início da reserva
        public dataFim: Date,          // Data de fim da reserva
        public areaReservada: string   // Área reservada
    ) {}

    // Método para clonar o objeto Reserva
    clone(): this {
        // Cria uma cópia do objeto usando Object.create
        const clone = Object.create(this);
        clone.id = this.id;
        clone.dataInicio = new Date(this.dataInicio); // Clonando a data para evitar referência
        clone.dataFim = new Date(this.dataFim);       // Clonando a data para evitar referência
        clone.areaReservada = this.areaReservada;
        return clone;
    }

    // Método para exibir os detalhes da reserva
    mostrarDetalhes(): void {
        console.log(`ID: ${this.id}, Início: ${this.dataInicio.toLocaleDateString()}, Fim: ${this.dataFim.toLocaleDateString()}, Área: ${this.areaReservada}`);
    }
}

// Exemplo de uso do Prototype com Reserva
const reserva1 = new Reserva(1, new Date("2024-09-23"), new Date("2024-09-25"), "Salão de Festas");
reserva1.mostrarDetalhes();

// Criando uma cópia (clone) da reserva1
const reserva2 = reserva1.clone();
reserva2.id = 2;  // Alterando o ID no clone
reserva2.dataInicio = new Date("2024-09-26");  // Alterando a data de início no clone
reserva2.dataFim = new Date("2024-09-27");     // Alterando a data de fim no clone
reserva2.areaReservada = "Churrasqueira";      // Alterando a área reservada no clone
reserva2.mostrarDetalhes();

// O objeto original não foi alterado
reserva1.mostrarDetalhes();
