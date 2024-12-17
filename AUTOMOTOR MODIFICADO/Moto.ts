export class Moto {
    private Marca: string;
    private Modelo: string;
    private Año:number;
    private Patente:string;


    public getPatente(): string {
        return this.Patente;
    }

    public setPatente(Patente: string): void {
        this.Patente = Patente;
    }


    public getMarca(): string {
        return this.Marca;
    }

    public setMarca(Marca: string): void {
        this.Marca = Marca;
    }

    public getModelo(): string {
        return this.Modelo;
    }

    public setModelo(Modelo: string): void {
        this.Modelo = Modelo;
    }

    public getAñO(): number {
        return this.Año;
    }

    public setAñO(Año: number): void {
        this.Año = Año;
    }


    constructor(Marca:string, Modelo:string, Año:number, Patente:string) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Año = Año;
        this.Patente=Patente;


    }
}