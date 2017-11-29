import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '@tuskdesk-suite/backend';
import { Company } from '@tuskdesk-suite/data-models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies$ = this.companyService.companies();
  }
}
