import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HomeService } from './home.service';
import { Observable, throwError, of } from 'rxjs';
import { Feed } from '../entity/feed';
import { asyncError, asyncData } from 'src/testing/async-observable-helpers';

describe('HomeService', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let homeService: HomeService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        homeService = new HomeService(<any>httpClientSpy);
    });

    it('should return expected heroes (HttpClient called once)', () => {

        const expectedFeed: Feed = {
            "items": [
                {
                    "title": "2019-03-21_-79.jpg",
                    "link": "https://www.flickr.com/photos/quiki69/48495261276/",
                    "pubDate": "2019-08-09T12:47:48.000Z",
                    "author": "Quiki",
                    "content": "\t\t\t<p><a href=\"https://www.flickr.com/people/quiki69/\">Quiki</a> posted a photo:</p>\n\t\n<p><a href=\"https://www.flickr.com/photos/quiki69/48495261276/\" title=\"2019-03-21_-79.jpg\"><img src=\"https://live.staticflickr.com/65535/48495261276_3fd381bfdd_m.jpg\" width=\"240\" height=\"160\" alt=\"2019-03-21_-79.jpg\" /></a></p>\n\n",
                    "contentSnippet": "Quiki posted a photo:",
                    "id": "tag:flickr.com,2005:/photo/48495261276",
                    "isoDate": "2019-08-09T12:47:48.000Z"
                }
            ],
            "link": "https://www.flickr.com/photos/",
            "feedUrl": "http://api.flickr.com/services/feeds/photos_public.gne?tags=",
            "title": "Uploads from everyone",
            "lastBuildDate": "2019-08-09T12:47:48Z"
        };

        httpClientSpy.get.and.returnValue(asyncData(expectedFeed));

        homeService.getFeed("").subscribe(
            feed => expect(feed).toEqual(expectedFeed, 'expected feed'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
        const errorResponse = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, 
          statusText: 'Not Found'
        });
      
        httpClientSpy.get.and.returnValue(asyncError(errorResponse));
      
        homeService.getFeed("").subscribe(
          feed => fail('expected an error, not feed'),
          error  => expect(error.status).toEqual(404)
        );
      });

});