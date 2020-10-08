import { Dataa } from './Dataa';

export interface Store {
    total: number;
    limit: number;
    skip:  number;
    data:  Dataa[];
}