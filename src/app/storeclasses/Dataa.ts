import { Service } from './Service';

export interface Dataa {
    id:        number;
    name:      string;
    type:      string;
    address:   string;
    address2:  string;
    city:      string;
    state:     string;
    zip:       string;
    lat:       number;
    lng:       number;
    hours:     string;
    createdAt: string;
    updatedAt: string;
    services:  Service[];
}