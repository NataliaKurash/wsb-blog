import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
    public windowScrolled: boolean;
    @ViewChild('scroll') public scroll: ElementRef;
    constructor(@Inject(DOCUMENT) private document: Document, public render: Renderer2) {}
    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
            this.render.addClass(this.scroll.nativeElement, 'show-scrollTop');

        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
            this.render.removeClass(this.scroll.nativeElement, 'show-scrollTop');
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {}
}