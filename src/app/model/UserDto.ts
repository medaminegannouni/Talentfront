import {CarrierDto} from "./CarrierDto";

export interface UserDto {
    username :string;
    email:string;
    phoneNumber:string;
    country:string;
    Objectif:string;
    carrier:CarrierDto;
}
