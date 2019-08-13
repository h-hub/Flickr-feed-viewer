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
        return this.http.get<Feed>('/api/flickerFeed?tag='+encodeURIComponent(tag))
        .pipe(
            retry(1),
            catchError(err => {
                if(err.status==404){
                    const errorResponse = new HttpErrorResponse({
                        error: 'test 404 error',
                        status: 404, 
                        statusText: 'Not Found'
                      });

                      return throwError(errorResponse);
                }
                return throwError(err);
            })
          );
    }
}
