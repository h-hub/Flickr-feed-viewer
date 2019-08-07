import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    feedContent: any;
    tag: string="";

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getFeedContent();
        this.tag = "";
    }

    getFeedContent(): void {
        this.homeService.getFeed(this.tag).subscribe(feedContent => this.feedContent = feedContent);
    }
}
