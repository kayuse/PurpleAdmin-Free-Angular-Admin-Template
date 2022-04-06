import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserPagesModule } from '../user-pages.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const user: User = {
      name: '',
      email: 'string',
      avatar: 'string',
      email_verified_at: 'string',
      created_at: 'string',
      updated_at: 'string',
      api_token: 'string'
    }
  }

}
