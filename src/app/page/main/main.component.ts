import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {log} from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('callBtn') callBtn: ElementRef;
  @ViewChild('callUs') callUs: ElementRef;

  name = '';
  mobile = '';
  time: any;
  date: any;
  path = 'requests/';
  seeMore = false;

  brandListItem = [
    {path: 'bosch.svg'},
    {path: 'whirlpool.svg'},
    {path: 'sub-zero.svg'},
    {path: 'kitchenAid.svg'},
    {path: 'ge-appliances.svg'},
  ];

  brandList = [
    {path: 'bosch.svg'},
    {path: 'whirlpool.svg'},
    {path: 'sub-zero.svg'},
    {path: 'kitchenAid.svg'},
    {path: 'ge-appliances.svg'},
    {path: 'samsung.svg'},
    {path: 'maytag.svg'},
    {path: 'lg.svg'},
    {path: 'amana.svg'},
    {path: 'blomberg.svg'},
    {path: 'kenmore.svg'},
    {path: 'jenn-air.svg'},
    {path: 'viking.svg'},
    {path: 'electrolux.svg'},
    {path: 'miele.svg'},
    {path: 'frigidaire.svg'},
    {path: 'thermador.svg'},
    {path: 'wolf.svg'},
    {path: 'fisher.svg'},
    {path: 'inglis.svg'},
  ];

  location = 0;

  constructor(
    private router: Router,
    private dataBase: AngularFireDatabase,
  ) {
  }

  onScroll(event): void {
    console.log(event);
  }

  ngOnInit(): void {
    // this.set();
  }

  @HostListener('window:scroll', ['$event']) scroll(event): void {
    const verticalOffset = window.pageYOffset;
    const callUs = this.callUs.nativeElement.offsetTop;
    if (verticalOffset > callUs) {
      this.callBtn.nativeElement.classList.add('active');
    } else {
      this.callBtn.nativeElement.classList.remove('active');
    }

  }

  goTo(type?: string): boolean {
    return false;
    if (type === 'refrigerator' || type === 'washer' || type === 'drier' || type === 'oven') {
      this.router.navigate(['product-next', type]);
    } else {
      this.router.navigate(['problem-type', type]);
    }
  }

  set(form): void {
    console.log(form);
    console.log(form.valid);
    if (form.valid) {
      const id = new Date().getTime();
      this.dataBase.object('requests/' + id).update({['name']: this.name})
        .then(_ => this.setNumber(id))
        .catch(err => console.log(err, 'You dont have access!'));
    } else {
      // alert('Fill out the form completely');
    }
  }

  setNumber(id): void {
    this.dataBase.object('requests/' + id).update({['mobile']: this.mobile})
      .then(_ => this.setTime(id))
      .catch(err => console.log(err, 'You dont have access!'));
  }

  setTime(id): void {
    this.dataBase.object('requests/' + id).update({['time']: this.time})
      .then(_ => this.setDate(id))
      .catch(err => console.log(err, 'You dont have access!'));
  }

  setDate(id): void {
    this.dataBase.object('requests/' + id).update({['date']: this.date})
      .then(_ => this.setState(id))
      .catch(err => console.log(err, 'You dont have access!'));
  }

  setState(id): void {
    this.dataBase.object('requests/' + id).update({['checked']: 'false'})
      .then(_ => this.setTime(id))
      .catch(err => console.log(err, 'You dont have access!'));
  }

  scrollToContact(): void {
    const termsTitle = document.getElementById('contactSection');
    const scrollIntoViewOptions: ScrollIntoViewOptions = {block: 'start', behavior: 'smooth'};
    termsTitle.scrollIntoView(scrollIntoViewOptions);
  }

  scrollTo(id): void {
    const termsTitle = document.getElementById(id).offsetTop;
    window.scroll({
      top: termsTitle - 54,
      behavior: 'smooth'
    });
  }

  goTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
