import { Component, OnInit } from '@angular/core';
import { Company } from '../company.interface';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company$: Observable<Company>;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.company$ = this.route.params
      .pipe(
        map(p => p.id),
        switchMap(id => this.companyService.company(id))
      );
  }
}
