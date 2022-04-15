import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppSessionStore } from '../state/app/session.store';
import { AppSessionQuery } from '../state/app/session.query';
import { User } from '../model/user.model';
@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private store: AppSessionStore, private query: AppSessionQuery) { }
    // ...
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token == null || token == 'null') {
            console.log(false)
            return false
        }
        return true
    }
    logout() {
        localStorage.setItem('token', null)
    }
    public async authenticate(email, password): Promise<boolean> {
        let result = false
        try {
            this.store.setError(null)
            this.store.setLoading(true)
            let body = {
                "email": email,
                "password": password
            }
            let url = `${environment.baseUrl}user/login`
            let user = await this.http.post<User>(url, body).toPromise()
            if (user.app_user == null) {
                this.setAppUser(user)
                result = true
            } else {
                this.store.setError('Invalid User')
                result = false
            }
            this.store.setLoading(false)
            return result
        } catch (exception) {
            if (exception.status == 400) {
                this.store.setError('Wrong Username or Password')
            }
            else {
                this.store.setError('Could not login you in, kindly contact admin')
            }
            this.store.setLoading(false)
            return result
        }
    }
    protected setAppUser(user: User) {
        localStorage.setItem('token', user.api_token)
        this.store.update({ appUser: user })
    }
}