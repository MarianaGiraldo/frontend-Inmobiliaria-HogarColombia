import { InmuebleModel } from "./parameters/inmueble.model";
import { UserDataModel } from "./security/user-data.model";

export class SolicitudModel{
    id?: string;
    inmueble?: InmuebleModel;
    inmuebleId?: string
    usuario?: UserDataModel;
    usuarioId?: string
    estado?: string;
}