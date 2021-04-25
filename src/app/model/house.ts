import { Adresse } from "./adresse";
import { Kindofgood } from "./kindofgood";


export interface House{
 IdHouse :number;	
	
	 adress :Adresse;
 area :number;	
	nbRooms :number;
 nbGarage:number;
 	terrace :boolean;
 swimmingPool:boolean;
 garden:boolean;
 sousSol:boolean;	
 ascenseur:boolean;
	 kindOfGood :Kindofgood;
    }