import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = 'http://localhost:9005/app/admin/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  viewAllMacs():Observable<any>{
    return this.http.get(API_URL+"viewAllMac",httpOptions);
  }

  deleteMac(macId){
    return this.http.delete(API_URL+"deleteMac?userId="+macId);
  }

}
