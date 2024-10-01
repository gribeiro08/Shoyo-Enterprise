export default class ReservaAreaComum {
    constructor(area, data) {
        this.area = area;
        this.data = data;
    }

    reservar(area, data) {
        this.area = area;
        this.data = data;
    }

    obterDetalhes() {
        return { area: this.area, data: this.data };
    }
}
