import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
export declare class PassengerController {
    private readonly passengerService;
    constructor(passengerService: PassengerService);
    create(passengerDTO: PassengerDTO): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    findAll(): Promise<import("../common/interfaces/passenger.interface").IPassenger[]>;
    findById(id: string): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    update(payload: any): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    delete(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
