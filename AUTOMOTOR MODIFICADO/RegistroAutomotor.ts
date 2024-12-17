import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

type Vehiculo = Auto | Moto | Camion;

export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    public modificarVehiculo(patente: string, datosNuevos: Partial<Vehiculo>): boolean {
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);
        if (vehiculo) {
            if (datosNuevos instanceof Auto || datosNuevos instanceof Moto || datosNuevos instanceof Camion) {
                Object.assign(vehiculo, datosNuevos);
            }
            return true;
        }
        return false;
    }

    public darDeBajaVehiculo(patente: string): boolean {
        const index = this.vehiculos.findIndex(v => v.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }
        return false;
    }

    public getVehiculoPorPatente(patente: string): Vehiculo | undefined {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }
}

