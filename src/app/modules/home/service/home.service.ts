import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

    getFeed (tag: string): Observable<any> {
        return this.http.get<any>('/api/flickerFeed?tag='+tag);
    }

}
