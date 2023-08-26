import {Data} from "@angular/router";
import {UserDto} from "./UserDto";

export interface CarrierDto{
   title:string;
   Level:string ;
   needed_days: any;
   date_Start : Date;
   type : string;
    users:UserDto[];
}
