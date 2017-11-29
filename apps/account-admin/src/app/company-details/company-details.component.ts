import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { CompanyService } from '@tuskdesk-suite/backend';
import { Company } from '@tuskdesk-suite/data-models';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailsComponent implements OnInit {
  company$: Observable<Company>;

  constructor(private companyService: CompanyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.company$ = this.route.params.pipe(
      map(p => p.id),
      switchMap(id =>
        this.companyService
          .company(id)
          .pipe(mergeMap(company => this.companyService.usersByCompany(id).pipe(map(users => ({ ...company, users })))))
      )
    );
  }
}
