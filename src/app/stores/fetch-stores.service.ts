import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchStoresService {
  url="http://localhost:3030/stores";

  constructor(private http:HttpClient) { }

  getStores():Observable<any>{
    return this.http.get(this.url);
  }
}
