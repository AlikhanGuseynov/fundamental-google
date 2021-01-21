import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-repair-product',
  templateUrl: './repair-product.component.html',
  styleUrls: ['./repair-product.component.scss']
})
export class RepairProductComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(type?: string): void {
    if (type === 'refrigerator' || type === 'washer' || type === 'drier' || type === 'oven') {
      this.router.navigate(['product-next', type]);
    }else{
      this.router.navigate(['problem-type', type]);
    }
  }
}
