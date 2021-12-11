import { InmuebleModel } from "./parameters/inmueble.model";
import { UserDataModel } from "./security/user-data.model";

export class SolicitudModel{
    id?: string;
    inmueble?: InmuebleModel;
    inmuebleId = this.inmueble?.id
    usuario?: UserDataModel;
    usuarioId = this.usuario?.id
    estado?: string;
}