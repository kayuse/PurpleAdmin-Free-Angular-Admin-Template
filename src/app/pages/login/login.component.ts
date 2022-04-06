import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppSessionQuery } from 'src/app/state/app/session.query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string
  public password: string
  public showError: boolean = false
  public error: string

  constructor(private router: Router,
    private authService: AuthService,
    private query: AppSessionQuery) {

  }

  ngOnInit() {
    this.query.selectError().subscribe(value => {
      this.showError = false
      if (value === undefined || value == null) {
        this.showError = false
      } else {
        this.error = value
        this.showError = true
      }
    })
  }
  async login() {
    let result = await this.authService.authenticate(this.email, this.password)
    console.log(result)
    if (result) {
      this.router.navigate(['/dashboard'])
    }

  }
}
