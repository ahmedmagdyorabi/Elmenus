import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IcompletedOrder } from '../ViewModels/icompleted-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  addOrder(order: IcompletedOrder): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<any>(`${environment.english_Api_URL}/orders`, order, HttpOptions)
  }

  getOrdersByUserEmail(email: string): Observable<IcompletedOrder[]> {
    return this.http.get<IcompletedOrder[]>(`${environment.english_Api_URL}/orders?userEmail=${email}`)
  }

}
