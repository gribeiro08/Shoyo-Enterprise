import ReservaAreaComum from '../../src/reservaAreaComum';

export default class ReservaPrototype {
    constructor(reserva) {
        this.reserva = reserva;
    }

    clonar() {
        return new ReservaAreaComum(this.reserva.area, this.reserva.data);
    }
}
