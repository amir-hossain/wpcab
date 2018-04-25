import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
    constructor() { }
    public static navBar=false;
    private emitChangeSource = new Subject<any>();

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange() {
        this.emitChangeSource.next(CommunicationService.navBar);
    }
}