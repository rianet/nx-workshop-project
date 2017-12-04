import { TestBed } from '@angular/core/testing';

import { CompaniesComponent } from './companies.component';
import { CompanyService } from '@tuskdesk-suite/backend';
import { RouterTestingModule } from '@angular/router/testing';
import createSpyObj = jasmine.createSpyObj;
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { WelcomeUserComponent } from '../welcome-user/welcome-user.component';
import { UserFullNameService } from '../user-full-name.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CompaniesComponent', () => {
  describe('[isolation specs]', () => {
    it('should call companyService.companies', () => {
      const companyService = createSpyObj('CompanyService', ['companies']);
      const component = new CompaniesComponent(companyService);
      component.ngOnInit();
      expect(companyService.companies).toHaveBeenCalled();
    });
  });

  describe('[shallow specs]', () => {
    it('should render company cards when companies exist', () => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [CompaniesComponent],
        providers: [
          {
            provide: CompanyService,
            useValue: {
              companies: () => Observable.of([{ id: 1, name: 'a company', userIds: [] }])
            }
          }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
      const fixture = TestBed.createComponent(CompaniesComponent);
      const component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      const elements = fixture.debugElement.queryAll(By.css('.card'));
      expect(elements.length).toBe(1);
    });
  });

  describe('[integration specs]', () => {
    it('should render company cards when companies exist', () => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [CompaniesComponent, WelcomeUserComponent],
        providers: [CompanyService, UserFullNameService]
      }).compileComponents();
      const fixture = TestBed.createComponent(CompaniesComponent);
      const component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      const httpMock = TestBed.get(HttpTestingController);
      const companiesRequest = httpMock.expectOne('/api/companies');
      companiesRequest.flush([{ id: 1, name: 'a company', userIds: [] }]);
      fixture.detectChanges();
      const elements = fixture.debugElement.queryAll(By.css('.card'));
      expect(elements.length).toBe(1);
    });
  });
});
