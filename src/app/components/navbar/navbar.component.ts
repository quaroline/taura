import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {}

    onClick(path: string): void {
        this.router.navigate(['/'], { fragment: path });
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}