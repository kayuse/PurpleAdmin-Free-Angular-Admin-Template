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
import { QuillModule } from 'ngx-quill'
import { HymneditComponent } from './hymn/hymnedit/hymnedit.component';
import { HymnNewComponent } from './hymn/hymn-new/hymn-new.component';
import { SundaySchoolComponent } from './sunday-school/sunday-school.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'hymns', component: HymnComponent, canActivate: [AuthGuardService] },
  { path: 'hymns/new', component: HymnNewComponent, canActivate: [AuthGuardService] },
  { path: 'hymn/edit/:id', component: HymneditComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [LoginComponent, HymnComponent, HymneditComponent, HymnNewComponent, SundaySchoolComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [AuthService, HymnService]
})
export class PagesModule { }
