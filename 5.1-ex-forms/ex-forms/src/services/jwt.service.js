import {Subject, BehaviorSubject} from 'rxjs';

class JwtService {
    constructor() {
        this.jwt$ = new BehaviorSubject(null);
    }
}

export default new JwtService();