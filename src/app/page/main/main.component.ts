import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('phoneNumberBtn') phoneNumberBtn: ElementRef;
  @ViewChild('otherHeader') otherHeader: ElementRef;
  @ViewChild('bookAppointmentMain') bookAppointmentMain: ElementRef;
  @ViewChild('bookHeader') bookHeader: ElementRef;

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

  constructor(private router: Router) {
  }

  onScroll(event): void {
    console.log(event);
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) scroll(event): void {
    const verticalOffset = window.pageYOffset;
    const elPhoneNumber = this.phoneNumberBtn.nativeElement.offsetTop;
    const elBookHeader = this.bookAppointmentMain.nativeElement.offsetTop;

    if (verticalOffset > elPhoneNumber) {
      this.otherHeader.nativeElement.classList.add('active');
    } else {
      this.otherHeader.nativeElement.classList.remove('active');
    }

    if (verticalOffset > elBookHeader) {
      this.bookHeader.nativeElement.classList.add('active');
    } else {
      this.bookHeader.nativeElement.classList.remove('active');
    }

  }

  goTo(type?: string): void {
    if (type === 'refrigerator' || type === 'washer' || type === 'drier' || type === 'oven') {
      this.router.navigate(['product-next', type]);
    }else{
      this.router.navigate(['problem-type', type]);
    }
  }
}


































