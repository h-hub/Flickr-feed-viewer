import { Feed } from './../entity/feed';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

    getFeed (tag: string): Observable<Feed> {
        return this.http.get<Feed>('/api/flickerFeedx?tag='+encodeURIComponent(tag))
        .pipe(
            retry(1),
            catchError(err => {
                return throwError(err);
            })
          );
    }
}
