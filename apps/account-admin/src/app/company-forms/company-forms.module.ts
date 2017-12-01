import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company/add-company.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: 'add', component: AddCompanyComponent }])],
  declarations: [AddCompanyComponent]
})
export class CompanyFormsModule {}
