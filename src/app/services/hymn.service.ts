import { Injectable } from '@angular/core';
import { Hymn } from '../model/hymn.model';
import { User } from '../model/user.model';
import { AppSessionStore } from '../state/app/session.store';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
@Injectable()
export class HymnService {
    constructor(private httpService: HttpService) { }
    // ...
    public async get(): Promise<User> {

        return null
    }
    async all(): Promise<Array<Hymn>> {
        let url = `${HttpService.BASE_URL}portal/hymns/all`
        let result = await this.httpService.get(url) as Array<Hymn>
        return result
    }
    async search(query, params: string): Promise<Array<Hymn>> {
        let url = `${HttpService.BASE_URL}portal/hymns/search`
        if (query != '' && params != '') {
            url += `?query=${query}&${params}`
        }else if(query == '' && params != ''){
            url += `?${params}`
        }
        let result = await this.httpService.get(url) as Array<Hymn>
        return result
    }
}
