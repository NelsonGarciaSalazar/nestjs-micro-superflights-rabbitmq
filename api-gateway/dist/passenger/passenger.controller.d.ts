import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { PassengerDTO } from './dto/passenger.dto';
import { Observable } from 'rxjs';
import { IPassenger } from '../common/interfaces/passenger.interface';
export declare class PassengerController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxySuperFlights);
    private _clientProxyPassenger;
    create(passengerDTO: PassengerDTO): Observable<IPassenger>;
    findAll(): Observable<IPassenger>;
    findOne(id: string): Observable<IPassenger>;
    Update(id: string, passengerDTO: PassengerDTO): Observable<IPassenger>;
    delete(id: string): Observable<any>;
}
