import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

const registro = new RegistroAutomotor();

const auto = new Auto("Peugeot", "208", 2020, "ABC123");
const moto = new Moto("Yamaha", "M3", 2019, "XYZ789");
const camion = new Camion("Scania", "R450", 2021, "LMN456");

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Vehículos totales:");
console.log(registro.getVehiculos());

const vehiculoModificado = registro.getVehiculoPorPatente("ABC123");
if (vehiculoModificado) {
    vehiculoModificado.setAñO(2024);  
}
console.log("Vehículo modificado:");
console.log(registro.getVehiculoPorPatente("ABC123"));

registro.darDeBajaVehiculo("XYZ789");
console.log("Vehículos:");
console.log(registro.getVehiculos());
