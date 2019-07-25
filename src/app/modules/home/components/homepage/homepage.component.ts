import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    feedContent: any;

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getFeedContent()
    }

    getFeedContent(): void {
        this.homeService.getFeed().subscribe(feedContent => this.feedContent = feedContent);
    }
}
