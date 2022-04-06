import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppSessionState, AppSessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class AppSessionQuery extends Query<AppSessionState> {
    isLoading$ = this.select(('isLoading'))
    constructor(protected store: AppSessionStore) {
        super(store);
    }
}

