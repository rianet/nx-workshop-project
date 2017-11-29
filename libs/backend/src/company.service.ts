import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { Company, User } from '@tuskdesk-suite/data-models';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  companies(): Observable<Company[]> {
    return this.http.get<Company[]>('/api/companies');
  }

  company(id: number): Observable<Company> {
    return this.http.get<Company>(`/api/companies/${id}`);
  }

  usersByCompany(id: number): Observable<User[]> {
    return this.http.get<User[]>(`/api/companies/${id}/users`);
  }
}
