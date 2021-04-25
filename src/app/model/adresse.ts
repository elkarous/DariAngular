import{House} from './house';
export interface Adresse{
    idAdress:number;
 municipal :string;
	  street :string ;
  city :string;
	  gouvernorat :string;
 houses :House [];
}