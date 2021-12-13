import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}