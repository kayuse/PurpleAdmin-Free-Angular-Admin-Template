import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { HymnComponent } from './hymn/hymn.component';
import { HymnService } from '../services/hymn.service';
import { HymneditComponent } from './hymn/hymnedit/hymnedit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'hymns', component: HymnComponent, canActivate: [AuthGuardService] },
  { path: 'hymn/edit/:id', component: HymneditComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [LoginComponent,HymnComponent,HymneditComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AuthService, HymnService]
})
export class PagesModule { }
