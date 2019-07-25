import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

    getFeed (): Observable<any> {
        return this.http.get<any>('http://localhost:3001/api/flickerFeed');
      }

}
