import { HomeService } from '../../service/home.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';
import { DecodeURIComponentPipe } from '../decode-uri-component/decode-uri-component';
import { Feed } from '../../entity/feed';


describe('HomepageComponent', () => {

    let service: HomeService;
    let serviceSpy: jasmine.SpyObj<HomeService>;
    let fixture = null
    let component: HomepageComponent;
    let quoteEl = null;
    
    beforeEach(() => {
        const spy = jasmine.createSpyObj('HomeService', ['getFeed']);

        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ HomepageComponent, DecodeURIComponentPipe ],
            providers: [
                { provide: HomeService, useValue: spy }
            ]
        });
        fixture = TestBed.createComponent(HomepageComponent);
        component = fixture.componentInstance;
        quoteEl = fixture.nativeElement.querySelector('.title');

        serviceSpy = TestBed.get(HomeService);
    });

    it('#getFeedContent() should receive feedContent', () => {

        service = TestBed.get(HomeService);

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

        serviceSpy.getFeed.and.returnValue(of(expectedFeed));

        fixture.detectChanges(); 
        
        expect(quoteEl.textContent).toBe(expectedFeed.title);
        
      });

});