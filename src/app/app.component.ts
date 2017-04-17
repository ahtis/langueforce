import { Component, Directive, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuItem } from './menu-item';
import { MenuItemService } from './menu-item.service';

@Component({
	selector: 'lf-app',
	providers: [MenuItemService],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	brand: MenuItem;
	menuItems: MenuItem[];
	selectedMenuItem: MenuItem;
	itemClickEvent: Event;
	collapsed: boolean = true;

	constructor(private menuItemService: MenuItemService) { }

	ngOnInit(): void {
		this.getBrand();
		this.getMenuItems();
	}

	registerClickEvent(event: Event): void {
		this.itemClickEvent = event;
	}

	onSelect(menuItem: MenuItem): void {
		if (this.collapsed === false) {
			this.collapsed = true;
		}

		this.selectedMenuItem = menuItem;
		this.highlightActiveMenuItem(this.selectedMenuItem.href);
	}

	getBrand(): void {
		this.brand = this.menuItemService.getBrand();
	}

	getMenuItems(): void {
		this.menuItemService.getMenuItems().then(menuItems => this.menuItems = menuItems);
	}

	private highlightActiveMenuItem(href: String): void {
		let _classes = document.querySelectorAll('a[href="#' + href + '"]')[0].classList;

		if (_classes && !_classes.contains('active')) {
			document.querySelectorAll('a[href="#' + href + '"]')[0].classList.add('active');
		}
	}
}