import { Anos } from './anos.model';

export interface Modelo {
  nome?: string;
  codigo?: string;
}

export interface Result {
  modelos?: Modelo[];
  anos?: Anos[];
}