export class Ticket {
    public cilindraje: string;
    public placaVehiculo: string;
    public tipoVehiculo: string;
    public fechaEntrada: string;

    constructor(cilindraje = '', placaVehiculo = '', fechaEntrada = '', tipoVehiculo = '') {
        this.cilindraje = cilindraje;
        this.placaVehiculo = placaVehiculo;
        this.fechaEntrada = fechaEntrada;
        this.tipoVehiculo = tipoVehiculo;
    }
};