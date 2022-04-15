import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class HttpService {
    private errors: string
    public static BASE_URL = `${environment.baseUrl}`
    constructor(private http: HttpClient) { }
    public async post(url, data): Promise<any> {
        try {
            let headers = this.getHeaders()
            let response = await this.http.post<any>(url, data, { headers }).toPromise()
            return response
        } catch (exception) {
            if (exception.status == 400) {
                this.errors = 'Unauthorized User'
                return false
            }
            else {
                return false
            }

        }
    }
    public getErrors() : string {
        return this.errors
    }
    public async get(url): Promise<any> {
        try {
            let headers = this.getHeaders()
            let response = await this.http.get<any>(url, { headers: headers }).toPromise()
            return response
        } catch (exception) {
            if (exception.status == 400) {
                this.errors = 'Unauthorized User'
                return false
            }
            else {
                return false
            }

        }
    }
    protected getHeaders(): HttpHeaders {
        let token = localStorage.getItem('token') 
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('apiToken',token)
        return headers
    }

}