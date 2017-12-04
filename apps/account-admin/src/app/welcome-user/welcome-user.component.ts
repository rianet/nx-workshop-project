import { Component, OnInit } from '@angular/core';
import { UserFullNameService } from '../user-full-name.service';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.scss']
})
export class WelcomeUserComponent implements OnInit {
  name: string;
  constructor(private userFullNameService: UserFullNameService) {}

  ngOnInit() {
    this.name = this.userFullNameService.getUserFullName();
  }
}
