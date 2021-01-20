import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {RepairProductComponent} from './page/repair-product/repair-product.component';
import {ProblemTypeComponent} from './page/problem-type/problem-type.component';
import {BrandsComponent} from './page/brands/brands.component';
import {IssueInDetailComponent} from './page/issue-in-detail/issue-in-detail.component';
import {AddressComponent} from './page/address/address.component';
import {ContactInfoComponent} from './page/contact-info/contact-info.component';
import {SuccessfulConfirmationComponent} from './page/successful-confirmation/successful-confirmation.component';
import {DateComponent} from './page/date/date.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'product', component: RepairProductComponent},
  {path: 'problem-type', component: ProblemTypeComponent},
  {path: 'brands', component: BrandsComponent},
  {path: 'issue-in-detail', component: IssueInDetailComponent},
  {path: 'address', component: AddressComponent},
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'date', component: DateComponent},
  {path: 'successful-confirmation', component: SuccessfulConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
