"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TrackScrollDirective = (function () {
    function TrackScrollDirective(el) {
        this.el = el;
        this.eventOccurranceDelta = 100;
    }
    TrackScrollDirective.prototype.track = function (event) {
        var delta = this.clickEvent && Math.abs(this.clickEvent.timeStamp - event.timeStamp);
        if (!this.clickEvent || delta > this.eventOccurranceDelta) {
            this.onScrollEvent();
        }
        this.changeMenuBackgroundOnScroll(window.pageYOffset);
    };
    TrackScrollDirective.prototype.onScrollEvent = function () {
        var sections = [].slice.call(document.getElementsByTagName('section'));
        this.removeActiveClassOnScroll(sections);
    };
    TrackScrollDirective.prototype.changeMenuBackgroundOnScroll = function (pageYOffset) {
        var _classes = this.el.nativeElement.classList;
        if (pageYOffset >= 50 && !_classes.contains('navbar-scrolled')) {
            this.el.nativeElement.classList.add('navbar-scrolled');
        }
        if (pageYOffset < 50 && _classes.contains('navbar-scrolled')) {
            this.el.nativeElement.classList.remove('navbar-scrolled');
        }
    };
    TrackScrollDirective.prototype.removeActiveClassOnScroll = function (sections) {
        sections.forEach(function (item) {
            var _classes = document.querySelectorAll('a[href="#' + item.id + '"]')[0].classList;
            if (_classes.contains('active')) {
                document.querySelectorAll('a[href="#' + item.id + '"]')[0].classList.remove('active');
            }
        });
    };
    __decorate([
        core_1.Input('menuItemClickEvent'), 
        __metadata('design:type', Event)
    ], TrackScrollDirective.prototype, "clickEvent", void 0);
    __decorate([
        core_1.HostListener('scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], TrackScrollDirective.prototype, "track", null);
    TrackScrollDirective = __decorate([
        core_1.Directive({
            selector: '[track-scroll]',
            host: { '(window:scroll)': 'track($event)' }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TrackScrollDirective);
    return TrackScrollDirective;
}());
exports.TrackScrollDirective = TrackScrollDirective;
//# sourceMappingURL=track-scroll.directive.js.map