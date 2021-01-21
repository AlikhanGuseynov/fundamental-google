import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-repair-product-second',
  templateUrl: './repair-product-second.component.html',
  styleUrls: ['./repair-product-second.component.scss']
})
export class RepairProductSecondComponent implements OnInit {

  type = '';

  constructor(private activeRoute: ActivatedRoute, private router: Router, private location: Location) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.type = params.type;
    });
  }

  ngOnInit(): void {
  }

  goTo(type?: string): void {
    this.router.navigate(['problem-type', type]);
  }

  back(): void {
    this.location.back();
  }
}
