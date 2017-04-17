import { Directive, HostListener, ElementRef, Input } from '@angular/core'

@Directive({
	selector: '[track-scroll]',
	host: {'(window:scroll)': 'track($event)'}
})
export class TrackScrollDirective {
	@Input('menuItemClickEvent') clickEvent: Event;

	eventOccurranceDelta: number = 100;

	constructor(private el: ElementRef) {}

	@HostListener('scroll', ['$event']) track(event: Event) {
		let delta = this.clickEvent && Math.abs(this.clickEvent.timeStamp - event.timeStamp);

		if (!this.clickEvent || delta > this.eventOccurranceDelta) {
			this.onScrollEvent();
		}

		this.changeMenuBackgroundOnScroll(window.pageYOffset);
	}

	private onScrollEvent(): void {
		let sections = [].slice.call(document.getElementsByTagName('section'));
		this.removeActiveClassOnScroll(sections);
	}

	private changeMenuBackgroundOnScroll(pageYOffset: number): void {
		let _classes = this.el.nativeElement.classList;

		if (pageYOffset >= 50 && !_classes.contains('navbar-scrolled')) {
			this.el.nativeElement.classList.add('navbar-scrolled');
		}

		if (pageYOffset < 50 && _classes.contains('navbar-scrolled')) {
			this.el.nativeElement.classList.remove('navbar-scrolled');
		}
	}

	private removeActiveClassOnScroll(sections: Array<any>): void {
		sections.forEach((item: any) => {
			let _classes = document.querySelectorAll('a[href="#' + item.id + '"]')[0].classList;

			if (_classes.contains('active')) {
				document.querySelectorAll('a[href="#' + item.id + '"]')[0].classList.remove('active');
			}
		});
	}
}