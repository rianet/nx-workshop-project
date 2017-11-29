import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { TicketService } from './ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CompanyService, TicketService, UserService]
})
export class BackendModule {}
