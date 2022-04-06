import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
@Injectable()
export class UserService {
    constructor() { }
    // ...
    public get(): User {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return null
    }
    updateUser() {
        const user: User = {
            name: 'Olaniyi',
            email: 'ifedamilola2009@gmail.com',
            avatar: '',
            email_verified_at: '',
            created_at: '',
            updated_at: '',
            api_token: 'string'
        }
    }
    public refresh(): User {
        let user: User = {
            name: 'string',
            email: 'string',
            avatar: 'string',
            email_verified_at: 'string',
            created_at: 'string',
            updated_at: 'string',
            api_token: 'string'
        }
        return user
    }
}
