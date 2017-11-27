import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [CommonModule],
  providers: [CompanyService, TicketService]
})
export class BackendModule {}
