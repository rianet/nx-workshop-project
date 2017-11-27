import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company, CompanyService } from '@tuskdesk-suite/backend';

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
