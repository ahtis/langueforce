import { Injectable } from '@angular/core';

import { MenuItem } from './menu-item';
import { MENU_BRAND, MENU_ITEMS } from './menu-items';

@Injectable()
export class MenuItemService {

	getBrand(): MenuItem {
		return MENU_BRAND;
	}

	getMenuItems(): Promise<MenuItem[]> {
		return Promise.resolve(MENU_ITEMS);
	}
}
