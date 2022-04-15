import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
@Injectable()
export class UserService {
    constructor(private httpService: HttpService, private authService: AuthService) { }
    // ...
    public async get(): Promise<User> {

        return null
    }
    async getUser(): Promise<User> {
        let url = `${HttpService.BASE_URL}auth-user`
        let result = await this.httpService.get(url) as User
        return result
    }
}
