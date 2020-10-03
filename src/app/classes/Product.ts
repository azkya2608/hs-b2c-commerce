import { Data } from './Data';

export interface Product {
    total: number;
    limit: number;
    skip:  number;
    data:  Data[];
}