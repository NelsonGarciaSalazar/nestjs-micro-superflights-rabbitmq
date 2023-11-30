import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { FlightDTO } from './dto/flight.dto';
import { Observable } from 'rxjs';
import { IFlight } from '../common/interfaces/flight.interface';
export declare class FlightController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxySuperFlights);
    private _clientProxyFlight;
    private _clientProxyPassenger;
    create(flightDTO: FlightDTO): Observable<IFlight>;
    findAll(): Observable<IFlight>;
    findOne(id: string): Observable<IFlight>;
    Update(id: string, flightDTO: FlightDTO): Observable<IFlight>;
    delete(id: string): Observable<any>;
    addPassenger(flightId: string, passengerId: string): Promise<any>;
}
