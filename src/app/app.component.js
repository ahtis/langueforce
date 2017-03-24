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
var menu_item_service_1 = require('./menu-item.service');
var AppComponent = (function () {
    function AppComponent(menuItemService) {
        this.menuItemService = menuItemService;
        this.collapsed = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getBrand();
        this.getMenuItems();
    };
    AppComponent.prototype.registerClickEvent = function (event) {
        this.itemClickEvent = event;
    };
    AppComponent.prototype.onSelect = function (menuItem) {
        if (this.collapsed === false)
            this.collapsed = true;
        this.selectedMenuItem = menuItem;
        this.highlightActiveMenuItem(this.selectedMenuItem.href);
    };
    AppComponent.prototype.getBrand = function () {
        this.brand = this.menuItemService.getBrand();
    };
    AppComponent.prototype.getMenuItems = function () {
        var _this = this;
        this.menuItemService.getMenuItems().then(function (menuItems) { return _this.menuItems = menuItems; });
    };
    AppComponent.prototype.highlightActiveMenuItem = function (href) {
        var _classes = document.querySelectorAll('a[href="#' + href + '"]')[0].classList;
        if (_classes && !_classes.contains('active')) {
            document.querySelectorAll('a[href="#' + href + '"]')[0].classList.add('active');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lf-app',
            providers: [menu_item_service_1.MenuItemService],
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [menu_item_service_1.MenuItemService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map