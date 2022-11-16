import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/api/v1/items';

  public getItems(parametri): Observable<any> {
    var params = new HttpParams()
      .set('paramtri', parametri)

    return this.http.get<any>(`${this.url}`, {
      params: params
    });
  }
}
