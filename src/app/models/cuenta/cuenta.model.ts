import { Deserializable } from "../../interface/deserealizable.model";



export class Cuenta implements Deserializable  {
    id!: number;
    nombre!: string;
    primer_apellido!: string;
    segundo_apellido!: string;
    email!: string;
    password!: string;
    ingresos!: number;
    access_token!: string;
    status_code!: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
