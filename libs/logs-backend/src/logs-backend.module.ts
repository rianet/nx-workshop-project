import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LogService]
})
export class LogsBackendModule {}
