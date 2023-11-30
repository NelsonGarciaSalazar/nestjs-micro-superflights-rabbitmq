import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from '../common/interfaces/user.interface';
export declare class UserController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxySuperFlights);
    private _clientProxyUser;
    create(userDTO: UserDTO): Observable<IUser>;
    findAll(): Observable<IUser>;
    findOne(id: string): Observable<IUser>;
    Update(id: string, userDTO: UserDTO): Observable<IUser>;
    delete(id: string): Observable<any>;
}
