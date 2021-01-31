import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.scss']
})
export class MobileNavMenuComponent implements OnInit {

  navBarStat = false;
  activeNav = 'services';
  activeServices: number;
  @Output() scrollToForm = new EventEmitter();
  @Output() scrollNav = new EventEmitter();
  servicesItems = [
    {id: 0, text: 'Refrigirator'},
    {id: 1, text: 'Washer'},
    {id: 2, text: 'Dishwasher'},
    {id: 3, text: 'Drier'},
    {id: 4, text: 'Oven'},
    {id: 5, text: 'Appliance Instalation'},
    {id: 6, text: 'Range & Stove'},
    {id: 7, text: 'Trash Compactor'},
    {id: 8, text: 'Microwave'},
    {id: 9, text: 'Electric Appliance Instalation'},
    {id: 10, text: 'Kitchen Hood'},
    {id: 11, text: 'Cooktop'},
  ];
  activeLocation: number;
  locationItems = [
    {id: 0, text: 'Miami'},
    {id: 1, text: 'Orlando'},
    {id: 2, text: 'New York'},
  ];
  activeLanguage: number;
  languageItems = [
    {id: 0, text: 'En'},
    {id: 1, text: 'Fr'},
    {id: 2, text: 'Ru'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  navItemToggle(event): void {
    this.activeNav = this.activeNav === event ? '' : event;
  }

  setActiveSubparagraph(id: number): void {
    this.activeServices = id;
  }

  setActiveLocationSubparagraph(id: number): void {
    this.activeLocation = id;
  }

  setActiveLanguage(id: number): void {
    this.activeLanguage = id;
  }

  scrollTo(): void {
    this.navBarStat = false;
    this.scrollToForm.emit(true);
  }

  scrollNavAction(id): void{
    this.navBarStat = false;
    this.scrollNav.emit(id);
  }
}
