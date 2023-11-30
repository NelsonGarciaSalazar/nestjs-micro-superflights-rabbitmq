/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { Model } from 'mongoose';
import { IPassenger } from '../common/interfaces/passenger.interface';
export declare class PassengerService {
    private readonly model;
    constructor(model: Model<IPassenger>);
    create(passengerDTO: PassengerDTO): Promise<IPassenger>;
    findAll(): Promise<IPassenger[]>;
    findById(id: string): Promise<IPassenger>;
    update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger>;
    delete(id: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
}
