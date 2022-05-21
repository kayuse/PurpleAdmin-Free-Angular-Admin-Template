import { Injectable } from '@angular/core';
import { Hymn } from '../model/hymn.model';
import { User } from '../model/user.model';
import { AppSessionStore } from '../state/app/session.store';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
@Injectable()
export class SundayService {
    constructor(private httpService: HttpService) { }
    // ...
    public async get(id: number): Promise<Hymn> {
        let url = `${HttpService.BASE_URL}portal/hymns/get/${id}`
        let hymn = await this.httpService.get(url) as Hymn
        return hymn
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
        } else if (query == '' && params != '') {
            url += `?${params}`
        }
        let result = await this.httpService.get(url) as Array<Hymn>
        return result
    }
    async edit(hymn): Promise<Hymn> {
        let data = {
            title: hymn.title,
            number: hymn.number,
            language: hymn.language,
            chorus: hymn.chorus,
            extra: hymn.extra
        }
        let verses = hymn.verses.map(verse => {
            return verse.content
        })
        data['verses'] = verses
        let url = `${HttpService.BASE_URL}portal/hymns/edit/${hymn.id}`
        let result = await this.httpService.post(url, data) as Hymn
        return result
    }
    async new(hymn): Promise<Hymn> {
        let data = {
            title: hymn.title,
            number: hymn.number,
            language: hymn.language,
            chorus: hymn.chorus,
            extra: hymn.extra
        }
        let verses = hymn.verses.map(verse => {
            return verse.content
        })
        data['verses'] = verses
        let url = `${HttpService.BASE_URL}portal/hymns/new/`
        console.log(data)
        let result = await this.httpService.post(url, data) as Hymn
        return result
    }
}
