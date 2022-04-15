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
  
  }

}
