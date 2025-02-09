import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  getUsersRemotely(): Observable<any> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users => users.slice(0,6)) 
    );
  }
}
