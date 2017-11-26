import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from '../company.interface';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies$ = this.companyService.companies();
  }
}
