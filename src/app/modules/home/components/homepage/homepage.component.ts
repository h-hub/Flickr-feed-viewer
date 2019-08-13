import { Feed } from './../../entity/feed';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    feedContent: Feed;
    tag: string;
    errorMsg: string;

    constructor(private homeService: HomeService) {
        this.tag = "";
     }

    ngOnInit() {
        this.getFeedContent();
    }

    getFeedContent(): void {
        this.errorMsg = "";
        this.homeService.getFeed(this.tag).subscribe(
            res => this.feedContent = res,
            err => this.errorMsg = "Something went wrong. Try again."
        );
    }
}
