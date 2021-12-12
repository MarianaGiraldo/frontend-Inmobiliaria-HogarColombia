import { PhotoModel } from "./photo.model";

export class InmuebleModel{
    id?: string;
    asesorId?: string;
    departamento?: string;
    ciudad?: string;
    direccion?: string;
    valor?: number;
    tipo?: string;
    tipoOferta?: string;
    encargado?: string;
    encargadoContacto?: string;
    videoUrl?: string;
    fotos? : PhotoModel[];
    foto_principal?: string;
}