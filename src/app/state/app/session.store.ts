import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from 'src/app/model/user.model';

export interface UserSessionData {
    appUser: User
}
export interface AppSessionState {
    isLoading: boolean,
    appUser: User
}

export function createAppInitialStore(): AppSessionState {
    let isLoading: boolean = false
    return { isLoading: isLoading, appUser: null }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppSessionStore extends Store<AppSessionState>{
    constructor() {
        super(createAppInitialStore())
    }
}