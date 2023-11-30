import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    create(flightDTO: FlightDTO): Promise<import("../common/interfaces/flight.interface").IFlight>;
    findAll(): Promise<import("../common/interfaces/flight.interface").IFlight[]>;
    findOne(id: string): Promise<import("../common/interfaces/flight.interface").IFlight>;
    update(payload: any): Promise<import("../common/interfaces/flight.interface").IFlight>;
    delete(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    addPassenger(payload: {
        flightId: string;
        passengerId: string;
    }): Promise<import("../common/interfaces/flight.interface").IFlight>;
}
